import { motion, type Variants } from "framer-motion";
import heroBg from "@/assets/images/hero-bg.jpg";
import testimonial2 from "@/assets/images/testimonial2.jpg";

/**
 * Exact-crop photo tile: the wrapper keeps the crop's own pixel aspect,
 * the image is scaled and offset so ONLY the wanted region shows.
 * All crops come from photos already in the project — nothing is generated.
 */
interface Crop {
  src: string;
  alt: string;
  /** displayed size/offset, in % of the tile */
  width: string;
  height: string;
  left: string;
  top: string;
}

const STOCK_PHOTOS: Crop[] = [
  {
    // Stack of folded, individually bagged t-shirts (real photo in testimonial2)
    src: testimonial2,
    alt: "Camisetas dobradas e embaladas prontas para envio",
    width: "238.1%",
    height: "423.4%",
    left: "-46.7%",
    top: "-220.8%"
  },
  {
    // Wrapped wholesale bundle (real photo in testimonial2)
    // Window trimmed at the bottom so no chat-app timestamp shows in the tile
    src: testimonial2,
    alt: "Pacote de atacado embalado e pronto para despacho",
    width: "301.1%",
    height: "535.3%",
    left: "-67.9%",
    top: "-133.9%"
  },
  {
    // Clothing bundles on the store floor (real photo from the hero background)
    src: heroBg,
    alt: "estoque de camisetas separado na loja",
    width: "526.3%",
    height: "568.2%",
    left: "-252.6%",
    top: "-458.5%"
  }
];

const StockSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
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
    <section className="bg-background py-20 md:py-24">
      <div className="container">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="font-display text-3xl uppercase leading-tight tracking-tight text-foreground md:text-4xl"
            variants={itemVariants}
          >
            ESTOQUE PRONTO PRA BLACK
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            variants={itemVariants}
          >
            Grades montadas, estoque real, direto de fábrica. Sua loja pronta pra girar na Black.
          </motion.p>
        </motion.div>

        {/* Faixa com 3 fotos reais, cortes quadrados uniformes */}
        <motion.div
          className="grid grid-cols-3 gap-3 md:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {STOCK_PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative aspect-square overflow-hidden rounded-[16px] border border-border bg-card"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                aria-hidden={false}
                className="absolute max-w-none transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  width: photo.width,
                  height: photo.height,
                  left: photo.left,
                  top: photo.top
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StockSection;
