import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#f7f4ed] px-5 pb-8 pt-4 text-sm text-slate-500 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="Islamic Centre home"
        >
          <span className="grid size-12 shrink-0 place-items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            <img
              src={`${import.meta.env.BASE_URL}images/Islamic_center_logo.png`}
              alt="Islamic Centre logo"
              className="size-full object-contain"
            />
          </span>
          <span>
            <strong className="block font-display text-xl leading-none text-[#193a45]">
              Islamic Centre
            </strong>
            <small className="mt-1 block text-[9px] tracking-[.22em] text-slate-500">
              TOLICHOWKI · HYDERABAD
            </small>
          </span>
        </Link>
      </div>
    </footer>
  );
}
