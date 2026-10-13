import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import galleryPhotos from "../gallery.js";
import PhotoLightbox from "./PhotoLightbox.jsx";

export default function HomeBento() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const images = [
    [galleryPhotos[25], "Main prayer hall", "col-span-2 row-span-2"],
    [galleryPhotos[23], "Library reading space", "md:col-span-2"],
    [galleryPhotos[18], "Islamic Book Centre", "md:col-span-2"],
    [galleryPhotos[6], "Skills training space", "md:col-span-2"],
    [galleryPhotos[31], "Learning space", "md:col-span-2"],
    [galleryPhotos[22], "Community library", "md:col-span-2"],
    [galleryPhotos[20], "Community service office", "md:col-span-2"],
    [galleryPhotos[1], "Prayer hall", "col-span-2"],
  ];

  return (
    <section className="bg-white px-5 py-14 md:px-10 md:py-20">
      <div className="mx-auto mb-7 flex max-w-7xl flex-wrap items-end justify-between gap-5 md:mb-9">
        <div>
          <p className="mb-3 text-xs font-bold tracking-[.22em] text-cyan-800">
            A GLIMPSE INSIDE
          </p>
          <h2 className="font-display text-4xl leading-tight text-[#193a45] md:text-5xl">
            Life at the centre
          </h2>
        </div>
        <Link
          to="/gallery"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cyan-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-900"
        >
          Show more <ArrowRight size={15} />
        </Link>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[170px] md:auto-rows-[180px] md:grid-cols-6 md:gap-4 lg:auto-rows-[200px]">
          {images.map(([photo, alt, layout]) => (
            <div
              key={photo.src}
              className={`group relative overflow-hidden rounded-2xl bg-slate-100 ${layout}`}
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                aria-label={`Enlarge ${alt}`}
                aria-haspopup="dialog"
                className="block h-full w-full cursor-zoom-in focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-cyan-700"
              >
                <img
                  src={photo.src}
                  alt={alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />
              </button>
            </div>
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
