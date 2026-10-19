import { useIsMobile } from "@/hooks/use-mobile";
import { Header } from "./Header";
import type { ReactNode } from "react";
import { SidebarProvider } from "../../ui/sidebar";
import { HeaderSidebar } from "./HeaderSidebar";
import { CustomSidebarTrigger } from "./CustomSidebarTrigger";
import { LayoutSidebarHeader } from "./LayoutSidebarHeader";

export function Layout({children}: {children: ReactNode}) {
  const isMobile = useIsMobile();

  if(!isMobile) {
    return (
      <>
        <Header />
        <main className="relative py-30 lg:px-50 md:px-25 px-10">{children}</main>
      </>
    );
  }
  return (
    <>
      <SidebarProvider>
        <HeaderSidebar />
        <LayoutSidebarHeader><CustomSidebarTrigger /></LayoutSidebarHeader>
        <main className="relative py-20 px-5 mx-auto">
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}