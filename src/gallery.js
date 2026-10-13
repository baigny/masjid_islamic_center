import galleryData from "./gallery.json";

const galleryPhotos = galleryData.map((photo) => ({
  ...photo,
  src: `${import.meta.env.BASE_URL}${photo.src.slice(1)}`,
}));

export default galleryPhotos;
