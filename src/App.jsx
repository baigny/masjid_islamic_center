import { useEffect, useState } from 'react';
import {
  ArrowRight, ArrowUp, ArrowUpRight, BookOpen, Building2, CalendarDays,
  GraduationCap, HandCoins, HeartHandshake, Landmark, LibraryBig, MapPin, Menu,
  MoonStar, PenTool, Scissors, UsersRound, Wrench, X,
} from 'lucide-react';
import galleryPhotos from './gallery.json';

const services = [
  { title: 'Library', text: 'A quiet reading space with Qur’anic tafaseer, Hadith, Islamic history, literature, and books for reflection. Open Monday to Saturday, 3:00-8:15 PM.', icon: LibraryBig },
  { title: 'Weekly talks & Friday sermons', text: 'Thoughtful talks rooted in Islam and everyday life. Saturday session: after Maghrib for one hour. Friday sermon: 1:00 PM; prayer: 1:40 PM.', icon: CalendarDays },
  { title: 'Islamic Book Centre', text: 'Islamic books and literature for readers of all ages. Open Monday to Saturday, 9:00 AM-11:00 PM.', icon: BookOpen },
  { title: 'Jami Riyazus-Saalehat', text: 'Girls’ seminary offering certified diploma courses in Islamic studies, with Islamic calligraphy classes included in the 2026-27 academic year.', icon: GraduationCap },
  { title: 'Maktab Ar-Rayhan', text: 'Part-time Qur’an literacy and foundational learning for children before their teenage years. Classes run Monday to Saturday, Asr to Maghrib.', icon: BookOpen },
  { title: 'Rahnuma Centre', text: 'Guidance on public services, government schemes, and civic needs, including voter enrolment and scholarship registration. Open Monday to Saturday, 3:00-8:15 PM.', icon: HeartHandshake },
  { title: 'Ideal Welfare Society', text: 'Small interest-free loans for people in need, following due diligence. Open Monday to Saturday, 3:00-8:15 PM.', icon: HandCoins },
  { title: 'Al-Khair Society', text: 'Skills courses that support women, including tailoring and mehendi.', icon: Scissors },
  { title: 'Auditorium Hall', text: 'A venue for community gatherings and events, including value-based Nikah ceremonies with separate, comfortable seating for women and men.', icon: Building2 },
  { title: 'Skill Development Centre', text: 'Mobile technician and HVAC training courses run for three to four months. Ten batches and 150 students had completed training by September 2026.', icon: Wrench },
  { title: 'Musalli-un-Nisa', text: 'Women’s prayer space in Cellar 01 is open for the five daily prayers and Juma. During Ramadan, Cellar 02 hosts Taraweeh and Qiyam-ul-Lail.', icon: MoonStar },
  { title: 'Arabic & Urdu calligraphy', text: 'A distinctive art form taught by Ustad Nizamuddin Badr Farooqui. Calligraphy classes are also part of Jami Riyazus-Saalehat’s 2026-27 academic year.', icon: PenTool },
];

const routes = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Gallery', '/gallery'], ['Contact', '/contact'],
];

function routeName(path) {
  return routes.some(([, route]) => route === path) ? path : '/';
}

function PageLink({ to, onNavigate, children, className = '', ...props }) {
  return <a href={to} className={className} onClick={event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate(to);
  }} {...props}>{children}</a>;
}

function Header({ onNavigate, currentRoute, isScrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const transparent = currentRoute === '/' && !isScrolled;
  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md transition-colors duration-300 ${transparent ? 'border-transparent bg-emerald-950/20 text-white shadow-none [&_strong]:!text-white [&_small]:!text-white/75' : 'border-slate-200 bg-white/95 text-slate-800 shadow-sm'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
        <PageLink to="/" onNavigate={onNavigate} className="flex items-center gap-3" aria-label="Islamic Centre home">
          <span className="grid size-12 shrink-0 place-items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm"><img src="/images/Islamic_center_logo.png" alt="Islamic Centre logo" className="size-full object-contain" /></span>
          <span><strong className="block font-display text-2xl leading-none text-[#193a45] md:text-3xl">Islamic Centre</strong><small className="mt-1 block text-[9px] tracking-[.22em] text-slate-500">TOLICHOWKI · HYDERABAD</small></span>
        </PageLink>
        <nav className={`hidden items-center gap-7 text-sm md:flex ${transparent ? 'text-white/90' : 'text-slate-600'}`} aria-label="Main navigation">
          {routes.map(([label, path]) => <PageLink key={path} to={path} onNavigate={onNavigate} aria-current={currentRoute === path ? 'page' : undefined} className={`transition hover:text-amber-300 ${currentRoute === path ? (transparent ? 'font-bold text-white' : 'font-bold text-cyan-900') : ''}`}>{label}</PageLink>)}
          <PageLink to="/contact" onNavigate={onNavigate} className="rounded-full bg-cyan-800 px-5 py-3 font-semibold text-white transition hover:bg-cyan-900">Visit us <ArrowUpRight className="ml-1 inline" size={16} /></PageLink>
        </nav>
        <button className={`grid size-11 place-items-center rounded-full border md:hidden ${transparent ? 'border-white/50 text-white' : 'border-slate-300 text-slate-700'}`} aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="grid gap-1 border-t border-slate-200 bg-white px-6 pb-5 text-slate-700 md:hidden" aria-label="Mobile navigation">{routes.map(([label, path]) => <PageLink className="border-b border-slate-100 py-3" key={path} to={path} onNavigate={path => { setMenuOpen(false); onNavigate(path); }}>{label}</PageLink>)}</nav>}
    </header>
  );
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [galleryPhotos[25], galleryPhotos[23], galleryPhotos[18], galleryPhotos[31], galleryPhotos[20]];

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide(current => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-emerald-950 text-white">
      {slides.map((photo, index) => <img key={photo.src} className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${activeSlide === index ? 'opacity-70' : 'opacity-0'}`} src={photo.src} alt={index === activeSlide ? photo.alt : ''} fetchPriority={index === 0 ? 'high' : undefined} aria-hidden={index !== activeSlide} />)}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-emerald-950/55 to-emerald-950/15" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-5 px-4 pb-14 pt-28 sm:gap-7 md:min-h-[610px] md:grid-cols-[.85fr_1.15fr] md:px-10 md:pb-16 md:pt-28">
        <div className="flex flex-col justify-center py-2 md:py-6">
          <p className="mb-4 text-[10px] font-bold tracking-[.24em] text-amber-200/90">ISLAMIC CENTRE · TOLICHOWKI</p>
          <h1 className="font-display text-4xl leading-[1.05] text-amber-200 sm:text-5xl xl:text-6xl">Assalamu Alaikum <span className="block text-white">wa Rahmatullahi wa Barakatuh</span></h1>
          <p className="mt-3 text-sm font-semibold text-white/80 md:text-base">May Peace and blessings of Lord be upon you.</p>
          <p className="mt-6 border-l-2 border-amber-200 pl-4 text-base leading-7 text-white md:text-lg">Welcome to Islamic Centre, 7 Tombs Road, Tolichowki, Hyderabad—a place where hearts come together in worship, faith, and brotherhood.</p>
        </div>
        <div className="flex items-center">
          <div className="max-w-2xl rounded-2xl border border-white/20 bg-emerald-950/35 p-5 shadow-xl backdrop-blur-sm sm:p-7 md:rounded-3xl md:p-8">
            <p className="text-sm leading-7 text-white/95 md:text-base md:leading-8">Our masjid brings the community together through daily prayers, Juma, Islamic learning, and service. It is a welcoming place to connect with Allah, strengthen faith, and grow together.</p>
            <p className="mt-4 font-display text-2xl leading-snug text-amber-200 sm:text-3xl">You are most welcome here.</p>
            <p className="mt-2 text-sm text-white/85">We look forward to welcoming you.</p>
          </div>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2" role="group" aria-label="Hero image slides">
          {slides.map((photo, index) => <button key={photo.src} type="button" onClick={() => setActiveSlide(index)} aria-label={`Show slide ${index + 1}`} aria-pressed={activeSlide === index} className={`h-2.5 rounded-full transition-all ${activeSlide === index ? 'w-7 bg-amber-200' : 'w-2.5 bg-white/55 hover:bg-white'}`} />)}
        </div>
      </div>
    </section>
  );
}

function HomeBento({ onNavigate }) {
  const images = [
    [galleryPhotos[25], 'Main prayer hall', 'col-span-1 row-span-2 md:col-span-3 md:col-start-1 md:row-span-2 md:row-start-1'],
    [galleryPhotos[23], 'Library reading space', 'col-span-1 md:col-span-6 md:col-start-4 md:row-start-1'],
    [galleryPhotos[18], 'Islamic Book Centre', 'col-span-1 row-span-2 md:col-span-3 md:col-start-10 md:row-span-2 md:row-start-1'],
    [galleryPhotos[6], 'Skills training space', 'col-span-1 md:col-span-3 md:col-start-4 md:row-start-2'],
    [galleryPhotos[31], 'Learning space', 'col-span-2 row-span-2 md:col-span-3 md:col-start-7 md:row-span-1 md:row-start-2'],
    [galleryPhotos[22], 'Community library', 'col-span-1 md:col-span-4 md:col-start-1 md:row-start-3'],
    [galleryPhotos[20], 'Community service office', 'col-span-1 md:col-span-5 md:col-start-5 md:row-start-3'],
    [galleryPhotos[1], 'Prayer hall', 'col-span-2 md:col-span-3 md:col-start-10 md:row-start-3'],
  ];

  return <section className="bg-[#e8b2aa] px-2 py-3 sm:px-3 md:py-5">
    <div className="mx-auto mb-2 flex max-w-5xl items-end justify-between gap-3 px-1 sm:mb-3">
      <div><p className="mb-1 text-[10px] font-bold tracking-[.2em] text-[#5b4554]">A GLIMPSE INSIDE</p><h2 className="font-display text-3xl leading-tight text-[#2c202e] sm:text-4xl">Life at the centre</h2></div>
      <PageLink to="/gallery" onNavigate={onNavigate} className="mb-1 inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2c202e] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#443346] sm:px-5 sm:text-sm">Show more <ArrowRight size={15} /></PageLink>
    </div>
    <div className="mx-auto max-w-5xl rounded-2xl bg-[#2c202e] p-1 shadow-[0_16px_45px_-24px_rgba(44,32,46,.6)] sm:rounded-3xl sm:p-1.5 md:p-2">
      <div className="grid grid-flow-dense auto-rows-[88px] grid-cols-2 gap-1 sm:auto-rows-[110px] md:auto-rows-[100px] md:grid-cols-12 md:gap-1">
        {images.map(([photo, alt, layout]) => <div key={photo.src} className={`group relative overflow-hidden rounded-lg bg-white/10 sm:rounded-xl ${layout}`}>
          <img src={photo.src} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]" />
        </div>)}
      </div>
    </div>
  </section>;
}

function AboutPage() {
  return <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
    <p className="mb-3 text-xs font-bold tracking-[.22em] text-cyan-800">WELCOME TO YOUR CENTRE</p>
    <div className="grid gap-8 md:grid-cols-[.9fr_1.1fr] md:gap-16">
      <h1 className="font-display text-5xl leading-tight text-[#193a45] md:text-7xl">A masjid at our heart.<br /><em className="text-cyan-800">A community around it.</em></h1>
      <div className="self-center text-base leading-8 text-slate-600"><p>Our centre is a place for daily prayer and Juma, and a vibrant home for learning, reflection, and service. We strive to create a welcoming space where individuals and families can connect, strengthen their faith, and grow together.</p><p className="mt-5">People of every perspective are respected here. Come to pray, find a book, learn a skill, get guidance, or simply meet your neighbours.</p><p className="mt-5">May this masjid be a source of guidance, peace, knowledge, brotherhood, and positive change for the entire community.</p></div>
    </div>
    <div className="mt-12 grid gap-4 md:grid-cols-3"><img src={galleryPhotos[25].src} alt="The main prayer hall" className="h-64 w-full rounded-2xl object-cover md:col-span-2 md:h-80" /><img src={galleryPhotos[23].src} alt="The centre library" className="h-64 w-full rounded-2xl object-cover md:h-80" /></div>
  </section>;
}

const serviceTimingPattern = /(Open Monday to Saturday[^.]*\.|Saturday session:[^.]*\.\s*Friday sermon:[^.]*\.|Classes run Monday to Saturday[^.]*\.)/;

function ServiceDescription({ text }) {
  return <p className="mt-3 text-sm leading-7 text-slate-500 md:text-base">{text.split(serviceTimingPattern).map((part, index) => serviceTimingPattern.test(part)
    ? <strong key={index} className="mt-2 block font-bold text-slate-700">Timing: {part}</strong>
    : part
  )}</p>;
}

function ServicesPage() {
  return <section className="bg-[#f7fafb] px-5 py-14 md:px-10 md:py-20">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 flex flex-col items-center text-center md:mb-12"><p className="mb-3 text-xs font-bold tracking-[.22em] text-cyan-800">SERVICES AT THE CENTRE</p><h1 className="font-display text-5xl leading-[1.02] text-[#193a45] md:text-6xl">Why our community<br />comes together.</h1><p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">From worship and Islamic learning to practical guidance and skills, the centre supports everyday life in Tolichowki.</p></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(({ title, text, icon: Icon }) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(23,60,76,.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_32px_rgba(23,60,76,.10)] md:p-8">
        <span className="mb-6 grid size-14 place-items-center rounded-2xl bg-cyan-50 text-cyan-800"><Icon size={26} strokeWidth={1.7} /></span>
        <h2 className="font-display text-2xl font-semibold text-[#193a45] md:text-3xl">{title}</h2><ServiceDescription text={text} />
      </article>)}
      </div>
    </div>
  </section>;
}

function GalleryPage() {
  return <section className="bg-[#f7f4ed] px-5 py-14 md:px-10 md:py-20">
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 md:mb-12"><p className="mb-3 text-xs font-bold tracking-[.22em] text-cyan-800">ISLAMIC CENTRE · TOLICHOWKI</p><h1 className="font-display text-5xl leading-none text-[#193a45] md:text-7xl">Spaces to gather <em className="text-cyan-800">and grow.</em></h1></div>
      <div className="columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
        {galleryPhotos.map((photo) => <figure key={photo.src} className="mb-3 break-inside-avoid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:mb-4">
          <img className="block h-auto w-full object-cover" src={photo.src} alt={photo.alt} loading="lazy" />
          <figcaption className="px-3 py-2 text-xs text-slate-600">{photo.title.replaceAll('_', ' ')}</figcaption>
        </figure>)}
      </div>
    </div>
  </section>;
}

function ContactPage() {
  return <section className="bg-[#f7fafb] px-5 py-16 md:px-10 md:py-24">
    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1fr] md:gap-20">
      <div><p className="mb-3 text-xs font-bold tracking-[.22em] text-cyan-800">COME VISIT</p><h1 className="font-display text-6xl leading-tight text-[#193a45] md:text-7xl">You are<br /><em className="text-cyan-800">welcome here.</em></h1><p className="mt-6 max-w-xl text-base leading-8 text-slate-600">Visit us for prayer, learning, or to connect with the community. We look forward to welcoming you.</p><a className="mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-800 px-6 py-4 text-sm font-semibold text-white transition hover:bg-cyan-900" href="https://www.google.com/maps/search/?api=1&query=Islamic+Centre%2C+7+Tombs+Road%2C+Tolichowki%2C+Hyderabad" target="_blank" rel="noreferrer"><MapPin size={18} /> Get directions <ArrowUpRight size={16} /></a></div>
      <article className="h-fit rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9"><span className="grid size-12 place-items-center rounded-2xl bg-cyan-50 text-cyan-800"><MapPin size={23} /></span><h2 className="mt-5 font-display text-3xl text-[#193a45]">Find the centre</h2><address className="mt-3 not-italic leading-7 text-slate-600">Islamic Centre<br />7 Tombs Road, Tolichowki<br />Hyderabad, Telangana</address></article>
    </div>
  </section>;
}

function Footer({ onNavigate }) {
  return <footer className="bg-[#f7f4ed] px-5 pb-8 pt-4 text-sm text-slate-500 md:px-10"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
    <PageLink to="/" onNavigate={onNavigate} className="flex items-center gap-3" aria-label="Islamic Centre home"><span className="grid size-12 shrink-0 place-items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm"><img src="/images/Islamic_center_logo.png" alt="Islamic Centre logo" className="size-full object-contain" /></span><span><strong className="block font-display text-xl leading-none text-[#193a45]">Islamic Centre</strong><small className="mt-1 block text-[9px] tracking-[.22em] text-slate-500">TOLICHOWKI · HYDERABAD</small></span></PageLink>
  </div></footer>;
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => routeName(window.location.pathname));
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 40);
  const navigate = path => {
    const nextRoute = routeName(path);
    window.history.pushState({}, '', nextRoute);
    setCurrentRoute(nextRoute);
    setShowBackToTop(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onPopState = () => { setCurrentRoute(routeName(window.location.pathname)); window.scrollTo(0, 0); };
    const onScroll = () => { setShowBackToTop(window.scrollY > 420); setIsScrolled(window.scrollY > 40); };
    window.addEventListener('popstate', onPopState);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('popstate', onPopState); window.removeEventListener('scroll', onScroll); };
  }, []);

  return <div className="font-sans text-slate-800">
    <Header onNavigate={navigate} currentRoute={currentRoute} isScrolled={isScrolled} />
    <main className={currentRoute === '/' ? '' : 'pt-[72px]'}>
      {currentRoute === '/' && <><Hero /><section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 md:grid-cols-2 md:px-10 md:py-20"><div><p className="mb-3 text-xs font-bold tracking-[.22em] text-cyan-800">WELCOME TO YOUR CENTRE</p><h2 className="font-display text-4xl leading-tight text-[#193a45] md:text-5xl">A masjid at our heart.<br /><em className="text-cyan-800">A community around it.</em></h2></div><div className="self-center leading-7 text-slate-600"><p>A welcoming place to pray, learn, reflect, and grow together. People of every perspective are respected here.</p><PageLink to="/about" onNavigate={navigate} className="mt-5 inline-flex items-center gap-2 font-semibold text-cyan-800">About the centre <ArrowRight size={16} /></PageLink></div></section><ServicesPage /><HomeBento onNavigate={navigate} /></>}
      {currentRoute === '/about' && <AboutPage />}
      {currentRoute === '/services' && <ServicesPage />}
      {currentRoute === '/gallery' && <GalleryPage />}
      {currentRoute === '/contact' && <ContactPage />}
    </main>
    <Footer onNavigate={navigate} />
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className={`fixed bottom-5 right-5 z-30 grid size-12 place-items-center rounded-full bg-cyan-800 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-900 md:bottom-8 md:right-8 ${showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}><ArrowUp size={20} /></button>
  </div>;
}
