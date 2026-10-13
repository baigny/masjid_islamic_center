import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import galleryPhotos from "../gallery.js";
import PhotoLightbox from "./PhotoLightbox.jsx";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const slides = [
    galleryPhotos[25],
    galleryPhotos[23],
    galleryPhotos[18],
    galleryPhotos[31],
    galleryPhotos[20],
  ];

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveSlide((current) => (current + 1) % slides.length),
      6000,
    );
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-emerald-950 text-white">
      {slides.map((photo, index) => (
        <img
          key={photo.src}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${activeSlide === index ? "opacity-70" : "opacity-0"}`}
          src={photo.src}
          alt={index === activeSlide ? photo.alt : ""}
          fetchPriority={index === 0 ? "high" : undefined}
          aria-hidden={index !== activeSlide}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-emerald-950/55 to-emerald-950/15" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-5 px-4 pb-14 pt-28 sm:gap-7 md:min-h-[610px] md:grid-cols-[.85fr_1.15fr] md:px-10 md:pb-16 md:pt-28">
        <div className="flex flex-col justify-center py-2 md:py-6">
          <p className="mb-4 text-[10px] font-bold tracking-[.24em] text-amber-200/90">
            ISLAMIC CENTRE · TOLICHOWKI
          </p>
          <h1 className="font-display text-4xl leading-[1.05] text-amber-200 sm:text-5xl xl:text-6xl">
            Assalamu Alaikum{" "}
            <span className="block text-white">
              wa Rahmatullahi wa Barakatuh
            </span>
          </h1>
          <p className="mt-3 text-sm font-semibold text-white/80 md:text-base">
            May Peace and blessings of Lord be upon you.
          </p>
          <p className="mt-6 border-l-2 border-amber-200 pl-4 text-base leading-7 text-white md:text-lg">
            Welcome to Islamic Centre, 7 Tombs Road, Tolichowki, Hyderabad—a
            place where hearts come together in worship, faith, and brotherhood.
          </p>
        </div>
        <div className="flex items-center">
          <div className="max-w-2xl rounded-2xl border border-white/20 bg-emerald-950/35 p-5 shadow-xl backdrop-blur-sm sm:p-7 md:rounded-3xl md:p-8">
            <p className="text-sm leading-7 text-white/95 md:text-base md:leading-8">
              Our masjid brings the community together through daily prayers,
              Juma, Islamic learning, and service. It is a welcoming place to
              connect with Allah, strengthen faith, and grow together.
            </p>
            <p className="mt-4 font-display text-2xl leading-snug text-amber-200 sm:text-3xl">
              You are most welcome here.
            </p>
            <p className="mt-2 text-sm text-white/85">
              We look forward to welcoming you.
            </p>
            <button
              type="button"
              onClick={() => setSelectedPhoto(slides[activeSlide])}
              aria-haspopup="dialog"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/60 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              View this photo <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
        <div
          className="absolute bottom-4 left-0 right-0 flex justify-center gap-2"
          role="group"
          aria-label="Hero image slides"
        >
          {slides.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-pressed={activeSlide === index}
              className={`h-2.5 rounded-full transition-all ${activeSlide === index ? "w-7 bg-amber-200" : "w-2.5 bg-white/55 hover:bg-white"}`}
            />
          ))}
        </div>
      </div>
      <PhotoLightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </section>
  );
}
