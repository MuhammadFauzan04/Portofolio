// Project screenshots in /public are full-resolution exports (several MB each).
// The site only ever shows them at card / modal size, so lightweight WebP
// copies live in /public/thumbs with the same base name.
export function thumb(src) {
  if (!src || !/^\/[^/]+\.(png|jpe?g)$/i.test(src)) return src;
  return src.replace(/^\/(.+)\.(png|jpe?g)$/i, "/thumbs/$1.webp");
}
