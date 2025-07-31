import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Plane, 
  Home, 
  Building2, 
  GraduationCap, 
  Crown, 
  User,
  ChevronDown,
  Hotel,
  Car,
  Anchor,
  MapPin,
  Clock,
  Calendar,
  Briefcase,
  FileText,
  BookOpen,
  UserPlus,
  Settings,
  CreditCard
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Bookings",
    url: "/bookings",
    icon: Plane,
    subItems: [
      { title: "Flights", url: "/bookings?tab=flights", icon: Plane },
      { title: "Hotels", url: "/bookings?tab=hotels", icon: Hotel },
      { title: "Transportation", url: "/bookings?tab=transport", icon: Car },
      { title: "Yachts", url: "/bookings?tab=yachts", icon: Anchor },
      { title: "Activities", url: "/bookings?tab=activities", icon: MapPin },
    ],
  },
  {
    title: "Real Estate",
    url: "/real-estate",
    icon: Home,
    subItems: [
      { title: "Properties", url: "/real-estate?tab=properties", icon: Home },
      { title: "Agents", url: "/real-estate?tab=agents", icon: User },
      { title: "Saved", url: "/real-estate?tab=saved", icon: Clock },
    ],
  },
  {
    title: "Business Setup",
    url: "/business",
    icon: Building2,
    subItems: [
      { title: "Company Formation", url: "/business?tab=formation", icon: Building2 },
      { title: "Banking", url: "/business?tab=banking", icon: CreditCard },
      { title: "Licensing", url: "/business?tab=licensing", icon: FileText },
      { title: "Documents", url: "/business?tab=documents", icon: Briefcase },
    ],
  },
  {
    title: "Schooling",
    url: "/schooling",
    icon: GraduationCap,
    subItems: [
      { title: "Schools", url: "/schooling?tab=schools", icon: BookOpen },
      { title: "Applications", url: "/schooling?tab=applications", icon: FileText },
      { title: "Enrollment", url: "/schooling?tab=enrollment", icon: UserPlus },
    ],
  },
  {
    title: "VIP Lounge Access",
    url: "/vip",
    icon: Crown,
    subItems: [
      { title: "Lounges & Dining", url: "/vip?tab=lounges", icon: Crown },
      { title: "Nightclubs", url: "/vip?tab=clubs", icon: Crown },
      { title: "Events", url: "/vip?tab=events", icon: Calendar },
    ],
  },
  {
    title: "My Profile",
    url: "/profile",
    icon: User,
    subItems: [
      { title: "Personal Info", url: "/profile?tab=info", icon: User },
      { title: "Documents", url: "/profile?tab=documents", icon: FileText },
      { title: "Settings", url: "/profile?tab=settings", icon: Settings },
      { title: "Billing", url: "/profile?tab=billing", icon: CreditCard },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [openGroups, setOpenGroups] = useState<string[]>([]);

  const isActive = (path: string) => currentPath === path || currentPath.startsWith(path + "?");
  
  const isGroupActive = (item: any) => {
    if (isActive(item.url)) return true;
    return item.subItems?.some((sub: any) => isActive(sub.url.split("?")[0]));
  };

  const toggleGroup = (title: string) => {
    setOpenGroups(prev => 
      prev.includes(title) 
        ? prev.filter(group => group !== title)
        : [...prev, title]
    );
  };

  const getNavClassName = (isActiveItem: boolean) =>
    isActiveItem 
      ? "bg-accent text-accent-foreground font-medium" 
      : "hover:bg-accent/50";

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gold font-semibold">
            Dubai À La Carte
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isGroupOpen = openGroups.includes(item.title) || isGroupActive(item);
                
                return (
                  <SidebarMenuItem key={item.title}>
                    {item.subItems ? (
                      <Collapsible open={isGroupOpen} onOpenChange={() => toggleGroup(item.title)}>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton 
                            className={`${getNavClassName(isGroupActive(item))} w-full justify-between`}
                          >
                            <div className="flex items-center">
                              <Icon className="mr-2 h-4 w-4" />
                              <span>{item.title}</span>
                            </div>
                            <ChevronDown 
                              className={`h-4 w-4 transition-transform ${
                                isGroupOpen ? "rotate-180" : ""
                              }`} 
                            />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.subItems.map((subItem) => {
                              const SubIcon = subItem.icon;
                              return (
                                <SidebarMenuSubItem key={subItem.title}>
                                  <SidebarMenuSubButton asChild>
                                    <NavLink 
                                      to={subItem.url} 
                                      className={({ isActive }) => getNavClassName(isActive)}
                                    >
                                      <SubIcon className="mr-2 h-3 w-3" />
                                      <span>{subItem.title}</span>
                                    </NavLink>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              );
                            })}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton asChild>
                        <NavLink 
                          to={item.url} 
                          className={({ isActive }) => getNavClassName(isActive)}
                        >
                          <Icon className="mr-2 h-4 w-4" />
                          <span>{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}