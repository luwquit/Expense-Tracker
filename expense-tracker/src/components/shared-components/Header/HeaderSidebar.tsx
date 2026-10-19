import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar";
import { NavLink } from "react-router";


export function HeaderSidebar() {
  return (
    <>
      <Sidebar collapsible="offcanvas" variant="inset">
        <SidebarInset>
          <SidebarHeader className="text-deep-blue dark:text-bluish-white">
            <SidebarMenu className="px-10 py-5 rounded-2xl bg-bluish-gray dark:bg-deep-blue mt-3">
              <SidebarMenuItem className="text-xl">Expense tracker</SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent className="px-10">

            <SidebarGroup>
              <SidebarGroupLabel>
                <NavLink to="/history">
                  <SidebarGroupLabel className="text-lg">View history</SidebarGroupLabel>
                </NavLink>
              </SidebarGroupLabel>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>
                <NavLink to="/savings">
                  <SidebarGroupLabel className="text-lg">My Savings</SidebarGroupLabel>
                </NavLink>
              </SidebarGroupLabel>
            </SidebarGroup>

          </SidebarContent>
          <SidebarFooter></SidebarFooter>
          <SidebarRail></SidebarRail>
        </SidebarInset>
      </Sidebar>
    </>
  );
}