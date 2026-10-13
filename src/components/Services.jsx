import {
  BookOpen,
  Building2,
  CalendarDays,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  LibraryBig,
  MoonStar,
  PenTool,
  Scissors,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Library",
    text: "A quiet reading space with Qur’anic tafaseer, Hadith, Islamic history, literature, and books for reflection. Open Monday to Saturday, 3:00-8:15 PM.",
    icon: LibraryBig,
  },
  {
    title: "Weekly talks & Friday sermons",
    text: "Thoughtful talks rooted in Islam and everyday life. Saturday session: after Maghrib for one hour. Friday sermon: 1:00 PM; prayer: 1:40 PM.",
    icon: CalendarDays,
  },
  {
    title: "Islamic Book Centre",
    text: "Islamic books and literature for readers of all ages. Open Monday to Saturday, 9:00 AM-11:00 PM.",
    icon: BookOpen,
  },
  {
    title: "Jami Riyazus-Saalehat",
    text: "Girls’ seminary offering certified diploma courses in Islamic studies, with Islamic calligraphy classes included in the 2026-27 academic year.",
    icon: GraduationCap,
  },
  {
    title: "Maktab Ar-Rayhan",
    text: "Part-time Qur’an literacy and foundational learning for children before their teenage years. Classes run Monday to Saturday, Asr to Maghrib.",
    icon: BookOpen,
  },
  {
    title: "Rahnuma Centre",
    text: "Guidance on public services, government schemes, and civic needs, including voter enrolment and scholarship registration. Open Monday to Saturday, 3:00-8:15 PM.",
    icon: HeartHandshake,
  },
  {
    title: "Ideal Welfare Society",
    text: "Small interest-free loans for people in need, following due diligence. Open Monday to Saturday, 3:00-8:15 PM.",
    icon: HandCoins,
  },
  {
    title: "Al-Khair Society",
    text: "Skills courses that support women, including tailoring and mehendi.",
    icon: Scissors,
  },
  {
    title: "Auditorium Hall",
    text: "A venue for community gatherings and events, including value-based Nikah ceremonies with separate, comfortable seating for women and men.",
    icon: Building2,
  },
  {
    title: "Skill Development Centre",
    text: "Mobile technician and HVAC training courses run for three to four months. Ten batches and 150 students had completed training by September 2026.",
    icon: Wrench,
  },
  {
    title: "Musalli-un-Nisa",
    text: "Women’s prayer space in Cellar 01 is open for the five daily prayers and Juma. During Ramadan, Cellar 02 hosts Taraweeh and Qiyam-ul-Lail.",
    icon: MoonStar,
  },
  {
    title: "Arabic & Urdu calligraphy",
    text: "A distinctive art form taught by Ustad Nizamuddin Badr Farooqui. Calligraphy classes are also part of Jami Riyazus-Saalehat’s 2026-27 academic year.",
    icon: PenTool,
  },
];

const serviceTimingPattern =
  /(Open Monday to Saturday[^.]*\.|Saturday session:[^.]*\.\s*Friday sermon:[^.]*\.|Classes run Monday to Saturday[^.]*\.)/;

function ServiceDescription({ text }) {
  return (
    <p className="mt-3 text-sm leading-7 text-slate-500 md:text-base">
      {text.split(serviceTimingPattern).map((part, index) =>
        serviceTimingPattern.test(part) ? (
          <strong key={index} className="mt-2 block font-bold text-slate-700">
            Timing: {part}
          </strong>
        ) : (
          part
        ),
      )}
    </p>
  );
}

export default function Services() {
  return (
    <section className="bg-[#f7fafb] px-5 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-center text-center md:mb-12">
          <p className="mb-3 text-xs font-bold tracking-[.22em] text-cyan-800">
            SERVICES AT THE CENTRE
          </p>
          <h1 className="font-display text-5xl leading-[1.02] text-[#193a45] md:text-6xl">
            Why our community
            <br />
            comes together.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
            From worship and Islamic learning to practical guidance and skills,
            the centre supports everyday life in Tolichowki.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(23,60,76,.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_32px_rgba(23,60,76,.10)] md:p-8"
            >
              <span className="mb-6 grid size-14 place-items-center rounded-2xl bg-cyan-50 text-cyan-800">
                <Icon size={26} strokeWidth={1.7} />
              </span>
              <h2 className="font-display text-2xl font-semibold text-[#193a45] md:text-3xl">
                {title}
              </h2>
              <ServiceDescription text={text} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
