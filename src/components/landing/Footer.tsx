import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import extremaSurfLogo from "@/assets/images/extrema-surf-logo.png";
import { trackGroupLead } from "@/lib/meta-tracking";
const Footer = () => {
  const whatsappGroupLink = "https://chat.whatsapp.com/FoGmJXK7eZ37CjelmoGMcB?mode=gi_t";
  const containerVariants: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return <footer className="bg-background">
      {/* Final CTA Section */}
      <div className="border-t border-border py-20 md:py-24">
        <div className="container">
          <motion.div className="mx-auto max-w-3xl space-y-8 text-center md:space-y-10" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={containerVariants}>
            <motion.h2 className="font-display text-3xl uppercase leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl" variants={itemVariants}>
              PRONTO PARA
              <br />
              AUMENTAR SEU LUCRO?
            </motion.h2>

            <motion.p className="text-base leading-relaxed text-muted-foreground md:text-lg" variants={itemVariants}>
              Entre no grupo e acesse as ofertas do atacado.
            </motion.p>

            <motion.p className="mx-auto max-w-xl text-base leading-relaxed text-foreground md:text-lg" variants={itemVariants}>
              A Pré Black já começou. Monte seu estoque nos preços da campanha.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button variant="cta-lg" size="xl" className="group animate-blink-glow" onClick={() => {
                trackGroupLead("footer");
                window.open(whatsappGroupLink, "_blank");
              }}>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer bg-[length:200%_100%]" />
                <span className="relative z-10">ENTRAR NO GRUPO EXCLUSIVO</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
              <img src={extremaSurfLogo} alt="EXTREMA SURF Logo" className="h-10 w-10 rounded-full" />
              <span className="font-display text-xl uppercase tracking-tight text-foreground">EXTREMA SURF</span>
            </div>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Todos os direitos reservados
            </span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
