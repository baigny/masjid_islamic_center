import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function HomeIntro() {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 md:grid-cols-2 md:px-10 md:py-20">
      <div>
        <p className="mb-3 text-xs font-bold tracking-[.22em] text-cyan-800">
          WELCOME TO YOUR CENTRE
        </p>
        <h2 className="font-display text-4xl leading-tight text-[#193a45] md:text-5xl">
          A masjid at our heart.
          <br />
          <em className="text-cyan-800">A community around it.</em>
        </h2>
      </div>
      <div className="self-center leading-7 text-slate-600">
        <p>
          A welcoming place to pray, learn, reflect, and grow together. People
          of every perspective are respected here.
        </p>
        <Link
          to="/about"
          className="mt-5 inline-flex items-center gap-2 font-semibold text-cyan-800"
        >
          About the centre <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
