import * as React from "react";
import { ChevronDown, Home, Settings, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/dashboard",
  },
  {
    title: "Users",
    icon: Users,
    href: "/dashboard/users",
    subItems: [
      { title: "All Users", href: "/dashboard/users" },
      { title: "Add User", href: "/dashboard/users/add" },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="text-lg font-semibold">My Dashboard</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {sidebarItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                {item.subItems ? (
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.title}
                        <ChevronDown className="ml-auto h-4 w-4" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarGroup>
                        <SidebarGroupContent>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuItem key={subItem.title}>
                              <SidebarMenuButton asChild>
                                <a href={subItem.href}>{subItem.title}</a>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarGroupContent>
                      </SidebarGroup>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
