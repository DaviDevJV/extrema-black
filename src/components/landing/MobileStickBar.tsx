import { Button } from "@/components/ui/button";

/**
 * Mobile-only fixed bottom bar (esquenta black).
 * Dark panel, 1px yellow hairline on top, yellow pill button with black text.
 * Text and link unchanged.
 */
const MobileStickBar = () => {
  const whatsappGroupLink = "https://chat.whatsapp.com/FoGmJXK7eZ37CjelmoGMcB?mode=gi_t";

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary bg-[var(--stick-bar)] px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden">
      <Button
        variant="cta"
        size="default"
        className="h-12 w-full animate-blink-glow text-[13px]"
        onClick={() => window.open(whatsappGroupLink, "_blank")}
      >
        <span className="relative z-10">ENTRAR NO GRUPO — ESQUENTA BLACK</span>
      </Button>
    </div>
  );
};

export default MobileStickBar;
