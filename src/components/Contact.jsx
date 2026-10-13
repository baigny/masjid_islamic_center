import { ArrowUpRight, MapPin } from "lucide-react";

export default function Contact() {
  const address =
    "8-1-22/1/M, 7 Tombs Rd, Golden Sands Colony, Aditya Nagar Colony, Surya Nagar, Toli Chowki, Hyderabad, Telangana 500008";
  const mapQuery = encodeURIComponent(address);

  return (
    <section className="bg-[#f7fafb] px-5 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 max-w-3xl md:mb-12">
          <p className="mb-3 text-xs font-bold tracking-[.22em] text-cyan-800">
            COME VISIT
          </p>
          <h1 className="font-display text-5xl leading-[1.05] text-[#193a45] sm:text-6xl md:text-7xl">
            You are <em className="text-cyan-800">welcome here.</em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Come for prayer, learning, or time with the community. Find us on 7
            Tombs Road in Toli Chowki.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-6">
          <article className="flex flex-col justify-between rounded-3xl bg-[#193a45] p-7 text-white shadow-[0_20px_50px_-30px_rgba(25,58,69,.6)] sm:p-9 lg:min-h-[460px]">
            <div>
              <span className="grid size-14 place-items-center rounded-2xl border border-white/20 bg-white/10 text-amber-200">
                <MapPin size={27} strokeWidth={1.7} />
              </span>
              <p className="mt-9 text-xs font-bold tracking-[.22em] text-amber-200">
                FIND THE CENTRE
              </p>
              <h2 className="mt-2 font-display text-4xl leading-tight sm:text-5xl">
                Islamic Centre
              </h2>
              <address className="mt-5 max-w-md not-italic text-base leading-8 text-white/85">
                8-1-22/1/M, 7 Tombs Rd
                <br />
                Golden Sands Colony, Aditya Nagar Colony
                <br />
                Surya Nagar, Toli Chowki
                <br />
                Hyderabad, Telangana 500008
              </address>
            </div>
            <a
              className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-amber-200 px-6 py-3.5 text-sm font-bold text-[#193a45] transition hover:bg-amber-100"
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noreferrer"
            >
              Get directions <ArrowUpRight size={18} />
            </a>
          </article>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-[0_20px_50px_-35px_rgba(25,58,69,.35)]">
            <div className="relative h-[350px] overflow-hidden rounded-2xl sm:h-[460px] lg:h-full lg:min-h-[460px]">
              <iframe
                title="Map showing Islamic Centre in Toli Chowki"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="absolute -top-20 h-[calc(100%+5rem)] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
