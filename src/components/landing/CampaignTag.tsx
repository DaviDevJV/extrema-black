import { motion } from "framer-motion";

interface CampaignTagProps {
  /** Exact text printed on the tag */
  label: string;
  /** md = hero size, sm = long labels / small sections */
  size?: "md" | "sm";
  /** mount = animate on load (hero), view = reveal on scroll */
  when?: "mount" | "view";
  className?: string;
  delay?: number;
}

/**
 * Campaign symbol: a clothing hang-tag (etiqueta de roupa) — never a coupon.
 * Yellow body (#FFD400 token), black text, punched hole + cord in CSS, slightly tilted.
 */
const CampaignTag = ({ label, size = "md", when = "mount", className = "", delay = 0.15 }: CampaignTagProps) => {
  const trigger = when === "mount"
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } };

  return (
    <motion.div
      className={`flex justify-center ${className}`}
      initial={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, delay }}
      {...trigger}
    >
      <div className="relative inline-block -rotate-3">
        {/* Cordão (string) coming out of the punched hole */}
        <span aria-hidden className="absolute bottom-1/2 left-[15px] h-[26px] w-[2px] origin-bottom rotate-[18deg] rounded-full bg-gradient-to-t from-white/70 via-white/35 to-transparent" />
        <span aria-hidden className="absolute -top-[13px] left-[1px] h-[9px] w-[9px] rounded-full border-[1.5px] border-white/45" />
        {/* Tag body */}
        <div className="relative flex items-center rounded-[4px] bg-[var(--esquenta-tag)] py-2 pl-9 pr-5 shadow-[0_12px_30px_rgba(0,0,0,0.65)] ring-1 ring-black/10 md:pr-6">
          {/* Punched hole */}
          <span aria-hidden className="absolute left-[11px] top-1/2 h-[11px] w-[11px] -translate-y-1/2 rounded-full bg-[#0b0b0b] shadow-[inset_0_1px_2px_rgba(0,0,0,0.9),0_0_0_2px_rgba(0,0,0,0.14)]" />
          <span
            className={
              size === "sm"
                ? "font-['Space_Grotesk'] text-[9px] font-extrabold uppercase tracking-[0.12em] text-black md:text-[11px] md:tracking-[0.18em]"
                : "font-['Space_Grotesk'] text-[11px] font-extrabold uppercase tracking-[0.22em] text-black md:text-sm"
            }
          >
            {label}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CampaignTag;
