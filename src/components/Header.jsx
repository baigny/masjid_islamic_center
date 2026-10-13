import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "react-router";

const routes = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export default function Header({ currentRoute, isScrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const transparent = currentRoute === "/" && !isScrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md transition-colors duration-300 ${transparent ? "border-transparent bg-emerald-950/20 text-white shadow-none [&_strong]:!text-white [&_small]:!text-white/75" : "border-slate-200 bg-white/95 text-slate-800 shadow-sm"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
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
            <strong className="block font-display text-2xl leading-none text-[#193a45] md:text-3xl">
              Islamic Centre
            </strong>
            <small className="mt-1 block text-[9px] tracking-[.22em] text-slate-500">
              TOLICHOWKI · HYDERABAD
            </small>
          </span>
        </Link>
        <nav
          className={`hidden items-center gap-7 text-sm md:flex ${transparent ? "text-white/90" : "text-slate-600"}`}
          aria-label="Main navigation"
        >
          {routes.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              aria-current={currentRoute === path ? "page" : undefined}
              className={`transition hover:text-amber-300 ${currentRoute === path ? (transparent ? "font-bold text-white" : "font-bold text-cyan-900") : ""}`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-cyan-800 px-5 py-3 font-semibold text-white transition hover:bg-cyan-900"
          >
            Visit us <ArrowUpRight className="ml-1 inline" size={16} />
          </Link>
        </nav>
        <button
          type="button"
          className={`grid size-11 place-items-center rounded-full border md:hidden ${transparent ? "border-white/50 text-white" : "border-slate-300 text-slate-700"}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <nav
          className="grid gap-1 border-t border-slate-200 bg-white px-6 pb-5 text-slate-700 md:hidden"
          aria-label="Mobile navigation"
        >
          {routes.map(([label, path]) => (
            <Link
              className="border-b border-slate-100 py-3"
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
