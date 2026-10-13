import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Outlet, useLocation } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  const { pathname } = useLocation();
  const currentRoute = pathname.replace(/\/$/, "") || "/";
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 40);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowBackToTop(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 420);
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-sans text-slate-800">
      <Header currentRoute={currentRoute} isScrolled={isScrolled} />
      <main className={currentRoute === "/" ? "" : "pt-[72px]"}>
        <Outlet />
      </main>
      <Footer />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-5 right-5 z-30 grid size-12 place-items-center rounded-full bg-cyan-800 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-900 md:bottom-8 md:right-8 ${showBackToTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
