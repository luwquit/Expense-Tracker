import { useIsMobile } from "@/hooks/use-mobile";
import { Header } from "./Header";
import type { ReactNode } from "react";
import { SidebarInset, SidebarProvider } from "../../ui/sidebar";
import { HeaderSidebar } from "./HeaderSidebar";
import { CustomSidebarTrigger } from "./CustomSidebarTrigger";
import { LayoutSidebarHeader } from "./LayoutSidebarHeader";

export function Layout({children}: {children: ReactNode}) {
  const isMobile = useIsMobile();

  if(!isMobile) {
    return (
      <>
        <Header />
        <main className="relative py-30 lg:px-50 md:px-25 px-10 mt-5">{children}</main>
      </>
    );
  }
  return (
    <>
      <SidebarProvider>
        <HeaderSidebar />
        <SidebarInset className="bg-transparent">
          <LayoutSidebarHeader><CustomSidebarTrigger /></LayoutSidebarHeader>
          <div className="relative py-17 px-10 mt-10">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}