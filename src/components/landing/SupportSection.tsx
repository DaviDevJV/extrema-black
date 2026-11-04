import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const SupportSection = () => {
  const vendedor1Link = "https://wa.me/5535991072549?text=Ol%C3%A1%20bom%20pelo%20WhatsApp%20";
  const vendedor2Link = "https://wa.me/message/2GKDI2PR6RUDD1";
  const containerVariants: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
  const vendors = [
    {
      name: "Vendedor 01",
      role: "Atendimento personalizado",
      link: vendedor1Link
    },
    {
      name: "Vendedor 02",
      role: "Atendimento personalizado",
      link: vendedor2Link
    }
  ];
  return <section className="border-t border-border bg-background py-20 md:py-24">
      <div className="container">
        <motion.div className="mx-auto max-w-5xl" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
          {/* Header */}
          <motion.div className="mx-auto mb-10 max-w-2xl text-center md:mb-12" variants={itemVariants}>
            <h2 className="font-display text-3xl uppercase leading-tight tracking-tight text-foreground md:text-4xl">
              FALE COM NOSSA
              <br />
              EQUIPE DE VENDAS
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Fale direto com a equipe e monte seu pedido.
            </p>
          </motion.div>

          {/* Vendedor Cards */}
          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            {vendors.map((vendor) => (
              <motion.div key={vendor.name} variants={itemVariants} className="flex h-full flex-col gap-6 rounded-[16px] border border-border bg-card p-6 transition-colors duration-300 hover:border-muted-foreground/40 md:p-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] border border-border bg-background text-muted-foreground">
                    <Headphones className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl uppercase leading-none tracking-tight text-foreground">
                      {vendor.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{vendor.role}</p>
                  </div>
                </div>

                <Button variant="whatsapp" size="lg" className="mt-auto w-full" onClick={() => window.open(vendor.link, "_blank")}>
                  CHAMAR NO WHATSAPP
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default SupportSection;
