import { useState, useRef } from "react";
import { Play, X } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import feedback1 from "@/assets/videos/feedback1.mp4";
import feedback2 from "@/assets/videos/feedback2.mp4";
import feedback3 from "@/assets/videos/feedback3.mp4";
import testimonial1 from "@/assets/images/testimonial1.jpg";
import testimonial2 from "@/assets/images/testimonial2.jpg";

/**
 * Uniform moldura: surface #131313, 1px border #262626, radius 16px.
 * Same frame for every video and every WhatsApp print — nothing else changes.
 */
const FRAME =
  "relative aspect-[9/16] overflow-hidden rounded-[16px] border border-border bg-card";

/** One aligned grid: 2 columns on mobile, 3 on desktop, all tiles the same size. */
const TILE = "w-[calc((100%-1rem)/2)] md:w-[calc((100%-2.5rem)/3)]";

interface VideoCardProps {
  video: string;
  thumbnail?: string;
  title: string;
}

const VideoCard = ({ video, thumbnail, title }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const handleClose = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`${FRAME} group cursor-pointer transition-colors duration-300 hover:border-primary/40`}
      onClick={!isPlaying ? handlePlay : undefined}
    >
      {!isPlaying ? (
        <>
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <video
              src={video}
              className="h-full w-full object-cover"
              muted
              preload="metadata"
            />
          )}

          {/* Overlay — base mais fechada pra rótulo sempre legível no celular */}
          <div className="absolute inset-0 bg-gradient-to-t from-black from-30% via-black/45 to-transparent" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:scale-105">
              <Play className="ml-0.5 h-6 w-6 fill-current text-primary-foreground" />
            </div>
          </div>

          {/* Title */}
          <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
            <span className="inline-flex items-center rounded-full bg-black/70 px-3 py-1.5 text-[11px] font-medium tracking-wide text-foreground md:px-4 md:py-2 md:text-sm">
              {title}
            </span>
          </div>
        </>
      ) : (
        <>
          <video
            ref={videoRef}
            src={video}
            className="h-full w-full object-cover"
            controls
            autoPlay
            playsInline
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            aria-label="Fechar vídeo"
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground transition-colors hover:bg-background"
          >
            <X className="h-4 w-4" />
          </button>
        </>
      )}
    </div>
  );
};

const TestimonialImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className={FRAME}>
    <img src={src} alt={alt} className="h-full w-full object-cover" />
  </div>
);

const VideoFeedbacks = () => {
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
    hidden: { opacity: 0, y: 30 },
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
    <section className="border-t border-border bg-background py-20 md:py-24">
      <div className="container">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span
            className="inline-block rounded-full border border-border px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
            variants={itemVariants}
          >
            PROVAS REAIS
          </motion.span>
          <motion.h2
            className="mt-6 font-display text-3xl uppercase leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
            variants={itemVariants}
          >
            CLIENTES QUE CONFIAM
            <br />
            NA EXTREMA SURF
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            variants={itemVariants}
          >
            Revendedores reais. Resultados reais.
          </motion.p>
        </motion.div>

        {/* Vídeos e prints: mesma moldura, mesma grade, mesma ordem */}
        <motion.div
          className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4 md:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className={TILE} variants={itemVariants}>
            <VideoCard video={feedback1} title="Cliente de Alagoas" />
          </motion.div>
          <motion.div className={TILE} variants={itemVariants}>
            <VideoCard video={feedback2} title="Estouro de vendas" />
          </motion.div>
          <motion.div className={TILE} variants={itemVariants}>
            <VideoCard video={feedback3} title="Reposição garantida" />
          </motion.div>
          <motion.div className={TILE} variants={itemVariants}>
            <TestimonialImage src={testimonial1} alt="Feedback de cliente" />
          </motion.div>
          <motion.div className={TILE} variants={itemVariants}>
            <TestimonialImage src={testimonial2} alt="Referência de cliente" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoFeedbacks;
