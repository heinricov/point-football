import { AppSidebar } from "@workspace/ui/dashboard/app-sidebar"
import { SiteHeader } from "@workspace/ui/dashboard/site-header"
import { TooltipProvider } from "@workspace/ui/providers/tooltip-provider"
import { SidebarInset, SidebarProvider } from "@workspace/ui/components/sidebar"

export const iframeHeight = "800px"

export const description = "A sidebar with a header and a search form."

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TooltipProvider>
      <div className="[--header-height:calc(--spacing(14))]">
        <SidebarProvider className="flex flex-col">
          <SiteHeader />
          <div className="flex flex-1">
            <AppSidebar />
            <SidebarInset>
              <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </TooltipProvider>
  )
}
