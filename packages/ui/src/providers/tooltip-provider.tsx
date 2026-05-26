import { TooltipProvider as TooltipProviderShadcn } from "@workspace/ui/components/tooltip"

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TooltipProviderShadcn>{children}</TooltipProviderShadcn>
    </>
  )
}
