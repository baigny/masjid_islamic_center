# Islamic Centre, Tolichowki

A React application built with Vite, Radix UI, and Lucide icons. All page copy is based on the supplied centre document. All 43 photographs from the supplied ZIP are included in the gallery.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. For a production build, run `npm run build`. The generated `dist/` folder can be served by any static host. `npm run preview` serves that build locally.

## Components and content

- `src/App.jsx`: homepage, Radix program tabs, mobile navigation, and accessible photo gallery.
- `src/additional-photos.js`: remaining photographs and descriptive captions; the eight featured photographs are defined in `App.jsx`.
- `src/theme.css`: responsive theme styling, with Cormorant Garamond and Manrope fonts bundled locally.
- `images/`: optimized versions of all supplied photographs. The original DOCX and ZIP remain untouched.

The site has a single route. Stories are short features on the homepage, with no invented article pages, testimonials, contact details, or donation flows. There is no prayer timetable or visit-information section. The skills completion figure retains its September 2026 date.

## Design references

The design draws on the immersive hero and clear visual hierarchy of the supplied [Dribbble reference](https://cdn.dribbble.com/userupload/17201680/file/original-56a437132cc9969e64a546912ef08514.png), the strong green accents and photographic sections of the [Masjida reference](https://www.gomahamaya.com/wp-content/uploads/2021/10/Masjida-Islam-Mosque-WordPress-Theme-Example.jpg), and the section structure of [My-Masjid](https://my-masjid.com/). Reference artwork is not used as site photography.

## Browser checks

With a production preview running on port 4173, run `npm run check:ui`. The check uses an installed Chrome/Edge browser on Windows, or a Playwright Chromium installation elsewhere. Set `BROWSER_PATH` to select an executable and `PREVIEW_URL` to use a different preview URL.

Checks cover the manual hero carousel, all 43 images, program switching, keyboard navigation, gallery wrapping and focus restoration, mobile navigation, layout overflow, and browser errors. Screenshots are written to `.preview/`.
