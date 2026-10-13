import galleryPhotos from "../gallery.js";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <p className="mb-3 text-xs font-bold tracking-[.22em] text-cyan-800">
        WELCOME TO YOUR CENTRE
      </p>
      <div className="grid gap-8 md:grid-cols-[.9fr_1.1fr] md:gap-16">
        <h1 className="font-display text-5xl leading-tight text-[#193a45] md:text-7xl">
          A masjid at our heart.
          <br />
          <em className="text-cyan-800">A community around it.</em>
        </h1>
        <div className="self-center text-base leading-8 text-slate-600">
          <p>
            Our centre is a place for daily prayer and Juma, and a vibrant home
            for learning, reflection, and service. We strive to create a
            welcoming space where individuals and families can connect,
            strengthen their faith, and grow together.
          </p>
          <p className="mt-5">
            People of every perspective are respected here. Come to pray, find a
            book, learn a skill, get guidance, or simply meet your neighbours.
          </p>
          <p className="mt-5">
            May this masjid be a source of guidance, peace, knowledge,
            brotherhood, and positive change for the entire community.
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <img
          src={galleryPhotos[25].src}
          alt="The main prayer hall"
          className="h-64 w-full rounded-2xl object-cover md:col-span-2 md:h-80"
        />
        <img
          src={galleryPhotos[23].src}
          alt="The centre library"
          className="h-64 w-full rounded-2xl object-cover md:h-80"
        />
      </div>
    </section>
  );
}
