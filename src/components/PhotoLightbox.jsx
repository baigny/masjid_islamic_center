import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function PhotoLightbox({ photo, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!photo) return;
    const dialog = dialogRef.current;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      if (trigger instanceof HTMLElement && trigger.isConnected)
        trigger.focus();
    };
  }, [photo]);

  return (
    <dialog
      ref={dialogRef}
      aria-label="Enlarged photo"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current.close();
      }}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none items-center justify-center border-0 bg-slate-950/95 p-4 text-white backdrop:bg-slate-950/80 open:flex md:p-10"
    >
      <form
        method="dialog"
        className="absolute right-4 top-4 z-10 md:right-6 md:top-6"
      >
        <button
          type="submit"
          aria-label="Close enlarged photo"
          className="grid size-12 place-items-center rounded-full border border-white/30 bg-slate-900/80 text-white transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <X size={24} />
        </button>
      </form>
      {photo && (
        <figure className="max-w-6xl">
          <img
            src={photo.src}
            alt={photo.alt}
            className="mx-auto max-h-[calc(100dvh-10rem)] max-w-full rounded-lg object-contain"
          />
          <figcaption className="mt-4 text-center text-sm text-white/90 md:text-base">
            {photo.title.replaceAll("_", " ")}
          </figcaption>
        </figure>
      )}
    </dialog>
  );
}
