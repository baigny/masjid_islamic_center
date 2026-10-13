import { useState } from "react";
import galleryPhotos from "../gallery.js";
import PhotoLightbox from "./PhotoLightbox.jsx";

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="bg-[#f7f4ed] px-5 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 md:mb-12">
          <p className="mb-3 text-xs font-bold tracking-[.22em] text-cyan-800">
            ISLAMIC CENTRE · TOLICHOWKI
          </p>
          <h1 className="font-display text-5xl leading-none text-[#193a45] md:text-7xl">
            Spaces to gather <em className="text-cyan-800">and grow.</em>
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {galleryPhotos.map((photo) => (
            <figure
              key={photo.src}
              className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                aria-label={`Enlarge ${photo.title.replaceAll("_", " ")}`}
                aria-haspopup="dialog"
                className="group block w-full cursor-zoom-in overflow-hidden focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-cyan-700"
              >
                <img
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                />
              </button>
              <figcaption className="px-3 py-2 text-xs text-slate-600">
                {photo.title.replaceAll("_", " ")}
              </figcaption>
            </figure>
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
