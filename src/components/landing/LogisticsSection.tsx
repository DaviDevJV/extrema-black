import { Truck } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const LogisticsSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="border-t border-border bg-background py-20 md:py-24">
      <div className="container">
        <motion.div
          className="mx-auto max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              className="font-display text-3xl uppercase leading-tight tracking-tight text-foreground md:text-4xl"
              variants={itemVariants}
            >
              LOGÍSTICA
              <br />
              VELOZ E SEGURA
            </motion.h2>
            <motion.p
              className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              variants={itemVariants}
            >
              Envio para todo o Brasil, com rastreamento completo e seguro
              nacional incluso.
            </motion.p>
          </div>

          {/* Destaque: despacho em 24h — mesma largura das demais grades da página */}
          <motion.div
            className="mt-10 flex items-center justify-center gap-5 rounded-[16px] border border-border bg-card p-7 md:gap-6 md:p-8"
            variants={itemVariants}
          >
            <Truck className="h-8 w-8 shrink-0 text-muted-foreground" />
            <p className="font-display text-3xl uppercase leading-none tracking-tight text-primary md:text-4xl">
              DESPACHO EM 24H
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogisticsSection;
