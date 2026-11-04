import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import CampaignTag from "@/components/landing/CampaignTag";
import { OFFERS, type Offer } from "@/components/landing/offers-data";

const whatsappGroupLink = "https://chat.whatsapp.com/FoGmJXK7eZ37CjelmoGMcB";

/** Mesmo padrão de grade da página: 2 colunas no celular, 3 no desktop */
const TILE = "w-[calc((100%-1rem)/2)] md:w-[calc((100%-2.5rem)/3)]";

/**
 * Card tipográfico: nenhuma foto de produto é gerada nem reutilizada —
 * nenhuma imagem real do projeto corresponde a esses produtos.
 */
const OfferCard = ({ offer }: { offer: Offer }) => {
  const hasTiers = Boolean(offer.tiers?.length);

  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-[16px] border border-border bg-card p-5 transition-colors duration-300 hover:border-muted-foreground/40 md:p-6",
        !hasTiers && "justify-center gap-5"
      )}
    >
      <h3 className="font-display text-base uppercase leading-tight tracking-tight text-foreground md:text-xl">
        {offer.name}
      </h3>

      {offer.tiers ? (
        <dl className="mt-4 border-t border-border">
          {offer.tiers.map((tier) => (
            <div
              key={tier.label}
              className="flex items-baseline justify-between gap-3 border-b border-border py-2.5"
            >
              <dt className="text-[13px] leading-snug text-muted-foreground md:text-sm">
                {tier.label}
              </dt>
              <dd
                className={cn(
                  "text-sm font-semibold tabular-nums md:text-base",
                  tier.best ? "text-primary" : "text-foreground"
                )}
              >
                {tier.price}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      <div className={cn(hasTiers && "mt-auto pt-5")}>
        <span className="text-[11px] tracking-[0.12em] text-muted-foreground">
          a partir de
        </span>
        <div className="font-display text-2xl leading-none tracking-tight text-primary tabular-nums md:text-3xl">
          {offer.anchor}
        </div>
      </div>
    </div>
  );
};

const OffersSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
  };

  return (
    <section className="border-t border-border bg-background py-20 md:py-24">
      <div className="container">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <CampaignTag label="PRÉ BLACK FRIDAY" size="sm" when="view" className="mb-6" />
          <motion.h2
            className="font-display text-3xl uppercase leading-tight tracking-tight text-foreground md:text-4xl"
            variants={itemVariants}
          >
            OFERTAS PRÉ BLACK
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            variants={itemVariants}
          >
            Quanto maior o lote, menor o preço por peça. É assim que o lojista lucra na Black.
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4 md:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {OFFERS.map((offer) => (
            <motion.div key={offer.name} className={TILE} variants={itemVariants}>
              <OfferCard offer={offer} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto mt-8 max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.p
            className="text-sm leading-relaxed text-muted-foreground md:text-base"
            variants={itemVariants}
          >
            Preços da campanha Pré Black, direto de fábrica. Somente atacado, para revendedores e lojistas.
          </motion.p>
          <motion.div className="mt-8 flex justify-center" variants={itemVariants}>
            <a
              href={whatsappGroupLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "cta-lg", size: "lg" }))}
            >
              QUERO APROVEITAR NO GRUPO
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OffersSection;
