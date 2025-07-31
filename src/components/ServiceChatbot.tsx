import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Send, X, Minimize2, Home, Building2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ServiceChatbotProps {
  serviceName: string;
  botName: string;
  botColor: string;
  systemPrompt: string;
  welcomeMessage: string;
  position?: 'right' | 'left';
  icon?: 'home' | 'building' | 'default';
}

export const ServiceChatbot = ({ 
  serviceName, 
  botName, 
  botColor, 
  systemPrompt,
  welcomeMessage,
  position = 'right',
  icon = 'default'
}: ServiceChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: welcomeMessage,
      isUser: false,
      timestamp: new Date(),
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat-assistant', {
        body: {
          message: message,
          systemPrompt: systemPrompt,
          conversationHistory: messages.slice(-5) // Keep last 5 messages for context
        }
      });

      if (error) throw error;

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const positionClass = position === 'right' ? 'right-6' : 'left-6';
  
  const getIcon = () => {
    switch (icon) {
      case 'home':
        return <Home className="w-6 h-6 text-white" />;
      case 'building':
        return <Building2 className="w-6 h-6 text-white" />;
      default:
        return <Home className="w-6 h-6 text-white" />;
    }
  };

  if (!isOpen) {
    return (
      <div className={`fixed bottom-6 ${positionClass} z-50`}>
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full shadow-luxury hover:shadow-glow transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: botColor }}
        >
          {getIcon()}
        </Button>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 ${positionClass} z-50`}>
      <Card className={`w-80 bg-background/95 backdrop-blur-lg border-border shadow-luxury transition-all duration-300 ${
        isMinimized ? "h-14" : "h-96"
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border" style={{ background: `linear-gradient(to right, ${botColor}20, transparent)` }}>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-foreground">{botName}</span>
            <span className="text-xs text-muted-foreground">({serviceName})</span>
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="w-8 h-8 p-0"
            >
              <Minimize2 className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <ScrollArea className="h-64 p-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                        msg.isUser
                          ? "text-white"
                          : "bg-muted text-foreground"
                      }`}
                      style={{ 
                        backgroundColor: msg.isUser ? botColor : undefined 
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground max-w-[80%] rounded-2xl px-3 py-2 text-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-background border-border"
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  size="sm"
                  disabled={isLoading}
                  style={{ backgroundColor: botColor }}
                  className="text-white hover:opacity-90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};