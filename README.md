# Islamic Centre, Tolichowki

A React and Vite website for the Islamic Centre in Tolichowki, Hyderabad.

## Run locally

```sh
npm install
npm run dev
```

Use `npm run build` for a production build and `npm run preview` to view it locally.

## Structure

- `src/App.jsx` defines the routes; `src/main.jsx` mounts the app and router.
- `src/components/` contains the page sections, shared layout, and photo viewer.
- `src/gallery.js` loads the gallery images with the GitHub Pages base path.
- `src/gallery.json` and `public/images/` contain the gallery content.
- `vite.config.js` prepares direct page URLs for GitHub Pages.

Pushing to `main` automatically publishes the site at [baigny.github.io/masjid_islamic_center](https://baigny.github.io/masjid_islamic_center/).
