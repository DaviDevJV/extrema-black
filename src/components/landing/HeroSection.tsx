import { Button } from "@/components/ui/button";
import heroBg from "@/assets/images/hero-bg.jpg";
import extremaSurfLogo from "@/assets/images/extrema-surf-logo.png";
import CampaignTag from "@/components/landing/CampaignTag";
import { trackGroupLead } from "@/lib/meta-tracking";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const whatsappGroupLink = "https://chat.whatsapp.com/FoGmJXK7eZ37CjelmoGMcB?mode=gi_t";
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const ease = [0.22, 1, 0.36, 1] as const;
  const reveal: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: 0.1 + i * 0.1 } }),
  };

  return (
    <section ref={sectionRef} className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-background">
      {/* Photo treatment */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: backgroundY }}>
        <img src={heroBg} alt="EXTREMA SURF - Atacado de roupas" className="h-full w-full scale-110 object-cover grayscale-[35%]" />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--background)/0.35)_0%,hsl(var(--background)/0.9)_65%,hsl(var(--background))_100%)]" />
        {/* Right-side falloff keeps the poster in the photo illegible */}
        <div className="absolute inset-0 bg-[linear-gradient(to_left,hsl(var(--background))_0%,hsl(var(--background))_30%,hsl(var(--background)/0.94)_38%,hsl(var(--background)/0.6)_47%,hsl(var(--background)/0.18)_57%,transparent_67%)]" />
        <div className="absolute inset-y-0 right-0 w-[42%] backdrop-blur-[3px] [mask-image:linear-gradient(to_left,black_0%,black_50%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        <div aria-hidden className="bg-grain absolute inset-0 opacity-[0.07] mix-blend-overlay" />
      </motion.div>

      <div className="container py-12 md:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.img
            src={extremaSurfLogo}
            alt="EXTREMA SURF Logo"
            className="h-20 w-20 rounded-full border border-border md:h-24 md:w-24"
            initial="hidden" animate="visible" variants={reveal} custom={0}
          />

          <CampaignTag label="GRUPO VIP!" className="mt-10" delay={0.2} />

          <motion.h1
            className="mt-8 font-display text-5xl uppercase leading-[0.95] tracking-tight text-foreground md:text-7xl"
            initial="hidden" animate="visible" variants={reveal} custom={2}
          >
            <span className="block">Abasteça sua loja</span>
            <span className="block">
              NA <span className="text-primary">Black Friday</span> com desconto
            </span>
            <span className="block">
              de fábrica <span className="text-primary">exclusivo no grupo!</span>
            </span>
          </motion.h1>

          <motion.div className="mt-8 flex w-full max-w-xl items-center gap-4" initial="hidden" animate="visible" variants={reveal} custom={3}>
            <span className="h-px flex-1 bg-border" />
            <p className="text-sm text-muted-foreground md:text-base">
              A Black Friday está chegando. Quem revende, já está montando o estoque.
            </p>
            <span className="h-px flex-1 bg-border" />
          </motion.div>

          <motion.div className="mt-10 flex flex-col items-center" initial="hidden" animate="visible" variants={reveal} custom={4}>
            <Button variant="cta-lg" size="xl" onClick={() => {
              trackGroupLead("hero");
              window.open(whatsappGroupLink, "_blank");
            }}>
              ENTRAR NO GRUPO EXCLUSIVO
            </Button>
            <p className="mt-5 text-sm text-muted-foreground">🔥 Vagas limitadas • Acesso imediato</p>
            <p className="mt-1.5 text-sm text-muted-foreground">As ofertas da campanha são liberadas primeiro no grupo</p>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border" />
    </section>
  );
};

export default HeroSection;
