"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  textAutoHide?: boolean;
  disableAnimations?: boolean;
  images?: string[];
}

export interface BentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;

const cardData: BentoCardProps[] = [
  {
    color: "#120F17",    
    label: "Overview",
    images: ["/assets/images/about-img.png"],
  },
  {
    color: "#120F17",
    title: "Fasad Ornamental yang Memikat",
    description:
      "Ukiran detail berupa bunga, makhluk mitologi, dan pola geometris menghiasi jendela serta balkon, menciptakan tampilan yang kaya akan seni dan cerita masa lalu.",
    label: "Arsitektur",
    images: ["/assets/images/hero-img.jpg"],
  },
  {
    color: "#120F17",
    title: "Langit-Langit Tinggi & Jendela Besar",
    description:
      "Dirancang khusus untuk iklim tropis, rumah-rumah ini tetap sejuk secara alami dengan sirkulasi udara yang optimal, dan nyaman tanpa perlu pendingin modern.",
    label: "Arsitektur",
    images: [
      "/assets/images/about-img.png",
      "/assets/images/hero-img.jpg",
      "/assets/images/rumah-img.jpg",
    ],
  },
  {
    color: "#120F17",
    title: "Koleksi rumah warisan",
    description:
      "Sampel bangunan merupakan rumah tinggal generasi pertama di Kampung Kemasan yang memiliki karakter kuat yang membedakan dengan bangunan di lingkungan sekitar, khususnya pada arsitektur rumah rakyat dan arsitektur publik yang sudah dipengaruhi oleh gaya modern. Karakter tersebut adalah luas bangunan dengan ukuran dua kali lebih besar, adanya jumlah pintu dan jendela yang lebih banyak dari pada rumah hunian pada umumnya yang diimbangi oleh bentuk bangunan vertikal yang terlihat kokoh. Kemudian yang menarik dan unik dari rumah ini adalah bentuk ornamen dengan ciri khas arsitektur Cina dan Eropa dan Arab yang berbeda-beda sesuai dengan tingkat ekonomi, sosial, budaya yang terjadi di kalangan masyarakat pada waktu itu.",
    label: "Koleksi",
    images: [
      "/assets/images/about-img.png",
      "/assets/images/hero-img.jpg",
      "/assets/images/rumah-img.jpg",
      "/assets/images/about-img.png",
      "/assets/images/hero-img.jpg",
      "/assets/images/rumah-img.jpg",
    ],
  },
  {
    color: "#120F17",
    title: "Ubin Impor & Detail Besi Artistik",
    description:
      "Sentuhan elegan hadir melalui ubin keramik Eropa dan ornamen besi cor yang didatangkan langsung pada masa kolonial, memperkuat nilai sejarahnya.",
    label: "Arsitektur",
    images: [
      "/assets/images/about-img.png",
      "/assets/images/hero-img.jpg",
      "/assets/images/rumah-img.jpg",
    ],
  },
  {
    color: "#120F17",
    title: "Simetri & Warna yang Menawan",
    description:
      "Perpaduan bentuk simetris dan warna-warna cerah menjadikan Kampung Kemasan tampil berbeda—anggun, hidup, dan penuh karakter.",
    label: "Arsitektur",
    images: [
      "/assets/images/about-img.png",
      "/assets/images/hero-img.jpg",
      "/assets/images/rumah-img.jpg",
    ],
  },
];

const CardWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
  disableAnimations?: boolean;
}> = ({
  children,
  className = "",
  style,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
  disableAnimations = false,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el || disableAnimations) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        gsap.to(el, { rotateX, rotateY, duration: 0.12, ease: "power2.out" });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.03;
        const magnetY = (y - centerY) * 0.03;
        magnetismAnimationRef.current = gsap.to(el, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      if (enableTilt)
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      if (enableMagnetism)
        gsap.to(el, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const maxDistance = Math.max(rect.width, rect.height) * 1.2;
      const ripple = document.createElement("div");
      ripple.style.cssText = `position:absolute; left:${x - maxDistance / 2}px; top:${y - maxDistance / 2}px; width:${maxDistance}px; height:${maxDistance}px; border-radius:50%; background:rgba(255,255,255,0.06); pointer-events:none; z-index:50;`;
      el.appendChild(ripple);
      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 0.5 },
        {
          scale: 1,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          onComplete: () => ripple.remove(),
        },
      );
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("click", handleClick);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("click", handleClick);
      magnetismAnimationRef.current?.kill();
    };
  }, [enableTilt, enableMagnetism, clickEffect, disableAnimations]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={style}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight: React.FC<{
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}> = () => null;

const BentoCardGrid: React.FC<{
  children: React.ReactNode;
  gridRef?: React.RefObject<HTMLDivElement | null>;
}> = ({ children, gridRef }) => (
  <div
    className="bento-section grid gap-2 p-3 select-none relative"
    style={{ fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.5rem)" }}
    ref={gridRef}
  >
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const CardInner: React.FC<{ card: BentoCardProps; textAutoHide: boolean }> = ({
  card,
  textAutoHide,
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  // Interval Slideshow Gambar
  useEffect(() => {
    if (!card.images || card.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % card.images!.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [card.images]);

  // Efek Pengecekan Truncate (Teks terpotong atau tidak)
  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current && !isExpanded) {
        // Jika tinggi scroll (asli) > tinggi client (terlihat), berarti ada teks yang tersembunyi/overflow
        const { scrollHeight, clientHeight } = textRef.current;
        setNeedsReadMore(scrollHeight > clientHeight);
      }
    };

    // setTimeout memberikan sedikit jeda agar DOM ter-render sempurna & style CSS apply sepenuhnya
    const timer = setTimeout(checkTruncation, 10);
    window.addEventListener("resize", checkTruncation);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkTruncation);
    };
  }, [card.description, isExpanded, textAutoHide]);

  return (
    <>
      {card.images && card.images.length > 0 && (
        <div className="absolute inset-0 z-0 bg-zinc-900 overflow-hidden">
          <div
            className="flex h-full w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentImg * 100}%)` }}
          >
            {card.images.map((src, i) => (
              <div key={i} className="min-w-full h-full relative">
                <Image
                  src={src}
                  width={250}
                  height={250}
                  alt={card.title || "Gallery image"}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent z-0"></div>
        </div>
      )}

      {/* --- Top Area: Label & Indicator --- */}
      <div className="flex justify-between items-start gap-3 relative z-10 w-full pointer-events-none">
        <span className="text-xs font-bold bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md text-white uppercase tracking-wider shadow-sm">
          {card.label}
        </span>

        {card.images && card.images.length > 1 && (
          <div className="flex gap-1 items-center bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm">
            <span className="text-xs font-bold text-white tracking-widest">
              {currentImg + 1}/{card.images.length}
            </span>
          </div>
        )}
      </div>

      {/* --- Bottom Area: Text Content --- */}
      <div
        className={`flex flex-col relative z-10 w-full mt-auto transition-all duration-300 ease-in-out pointer-events-auto ${
          isExpanded
            ? "bg-black/80 backdrop-blur-md rounded-2xl max-h-[85%] overflow-y-auto custom-scrollbar ring-1 ring-white/10"
            : ""
        }`}
      >
        <h3
          className={`font-bold text-xl mb-2 text-white ${textAutoHide && !isExpanded ? "text-clamp-1" : ""}`}
        >
          {card.title}
        </h3>

        <p
          ref={textRef}
          className={`text-sm text-zinc-300 leading-relaxed ${textAutoHide && !isExpanded ? "text-clamp-3" : ""}`}
        >
          {card.description}
        </p>

        {/* Tombol HANYA akan muncul jika needsReadMore bernilai true ATAU dalam keadaan expanded (ingin ditutup) */}
        {(needsReadMore || isExpanded) && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="self-start mt-3 text-xs font-bold text-[#D29063] uppercase tracking-widest hover:text-white transition-colors"
          >
            {isExpanded ? "Tutup" : "Baca Selengkapnya"}
          </button>
        )}
      </div>
    </>
  );
};

const BentoGrid: React.FC<BentoProps> = ({
  textAutoHide = true,
  enableSpotlight = true,
  enableBorderGlow = false,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  return (
    <>
      <style>{`
        .text-clamp-1 { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden; }
        .text-clamp-3 { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
      `}</style>

      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-3 w-full mx-auto">
          {cardData.map((card, index) => {
            const baseClassName = `card flex flex-col justify-between relative aspect-[4/3] min-h-[250px] w-full max-w-full p-5 rounded-[20px] border border-solid overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${
              enableBorderGlow ? "card--border-glow" : ""
            }`;

            const cardStyle = {
              backgroundColor: card.color || "#120F17",
              borderColor: "#2F293A",
              color: "#ffffff",
            } as React.CSSProperties;

            const spanClasses = [] as string[];
            if (index === 2)
              spanClasses.push("lg:col-span-2 lg:row-span-2 min-h-[400px]");
            if (index === 3)
              spanClasses.push("lg:col-span-2 lg:row-span-2 min-h-[400px]");
            if (index === 5) spanClasses.push("lg:col-start-4 lg:row-start-3");

            const classes = `${baseClassName} ${spanClasses.join(" ")}`.trim();

            return (
              <CardWrapper
                key={index}
                className={classes}
                style={cardStyle}
                enableTilt={enableTilt}
                clickEffect={clickEffect}
                enableMagnetism={enableMagnetism}
                disableAnimations={shouldDisableAnimations}
              >
                <CardInner card={card} textAutoHide={textAutoHide} />
              </CardWrapper>
            );
          })}
        </div>
      </BentoCardGrid>
    </>
  );
};

export default BentoGrid;
