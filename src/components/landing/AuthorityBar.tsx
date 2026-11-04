import { useEffect, useState, useRef } from "react";
import { Package, Users, TrendingUp, Shield } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import CampaignTag from "@/components/landing/CampaignTag";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay?: number;
}

const StatItem = ({ icon, value, label, delay = 0 }: StatItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && numericValue > 0) {
      const duration = 2000;
      const startTime = Date.now();
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(numericValue * easeOut));
        if (progress >= 1) clearInterval(timer);
      }, 20);
      return () => clearInterval(timer);
    }
  }, [isVisible, numericValue]);

  return (
    <motion.div
      ref={ref}
      className="flex h-full flex-col items-center justify-center gap-3 rounded-[16px] border border-border bg-card px-4 py-8 text-center"
      initial={{ opacity: 0, y: 16 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay * 0.001, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <span className="text-muted-foreground">{icon}</span>
      <span className="font-display text-4xl leading-none tracking-tight text-primary tabular-nums md:text-5xl">
        +{count.toLocaleString("pt-BR")}
      </span>
      <span className="text-[11px] uppercase leading-snug tracking-[0.14em] text-muted-foreground md:text-xs">
        {label}
      </span>
    </motion.div>
  );
};

const AuthorityBar = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="border-y border-border bg-background py-20 md:py-24">
      <div className="container">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <CampaignTag
            label="QUEM FATURA, JÁ ESTÁ SE ESTOCANDO PRA BLACK"
            size="sm"
            when="view"
            className="mb-6"
          />
          <motion.h2
            className="font-display text-2xl uppercase leading-tight tracking-tight text-foreground md:text-3xl"
            variants={itemVariants}
          >
            A CONFIANÇA DE QUEM ENTREGA RESULTADOS
          </motion.h2>
        </motion.div>

        <div className="grid auto-rows-fr grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          <StatItem
            icon={<Package className="h-5 w-5" />}
            value="55387"
            label="PEÇAS ENTREGUES EM TODO O BRASIL"
            delay={0}
          />
          <StatItem
            icon={<Users className="h-5 w-5" />}
            value="3200"
            label="REVENDEDORES ATIVOS"
            delay={100}
          />
          <StatItem
            icon={<TrendingUp className="h-5 w-5" />}
            value="150"
            label="% DE MARGEM MÉDIA"
            delay={200}
          />
          <StatItem
            icon={<Shield className="h-5 w-5" />}
            value="100"
            label="% DE SATISFAÇÃO"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default AuthorityBar;
