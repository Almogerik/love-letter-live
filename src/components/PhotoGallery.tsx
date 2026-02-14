import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/*
  GALERIE PHOTOS & VIDÉOS — Ajoutez autant de médias que vous voulez
  Placez vos fichiers dans /public/images/gallery/ 
*/
const galleryMedia = [
  { src: "/images/gallery/whatsapp-image-1.jpeg", type: "image" },
  { src: "/images/gallery/whatsapp-image-2.jpeg", type: "image" },
  { src: "/images/gallery/whatsapp-image-3.jpeg", type: "image" },
  { src: "/images/gallery/whatsapp-image-4.jpeg", type: "image" },
  { src: "/images/gallery/whatsapp-image-5.jpeg", type: "image" },
  { src: "/images/gallery/whatsapp-image-6.jpeg", type: "image" },
  { src: "/images/gallery/whatsapp-image-7.jpeg", type: "image" },
  { src: "/images/gallery/whatsapp-image-8.jpeg", type: "image" },
  { src: "/images/gallery/PHOTO-2025-03-01-20-02-33.jpg.jpeg", type: "image" },
  { src: "/images/gallery/PHOTO-2025-04-24-21-58-35.jpg.jpeg", type: "image" },
  { src: "/images/gallery/PHOTO-2025-04-24-21-58-38.jpg.jpeg", type: "image" },
  { src: "/images/gallery/image-2026-02-14-12.57.41.jpeg", type: "image" },
  { src: "/images/gallery/image-2026-02-14-12.57.410.jpeg", type: "image" },
  { src: "/images/gallery/image-2026-02-14-12.57.411.jpeg", type: "image" },
  { src: "/images/gallery/image-2026-02-14-12.57.412.jpeg", type: "image" },
  { src: "/images/gallery/image-2026-02-14-12.57.413.jpeg", type: "image" },
  { src: "/images/gallery/image-2026-02-14-12.57.414.jpeg", type: "image" },
  { src: "/images/gallery/image-2026-02-14-12.57.415.jpeg", type: "image" },
  { src: "/images/gallery/image-2026-02-14-18.01.23l.jpeg", type: "image" },
  { src: "/images/gallery/GIF-2025-03-01-11-28-40.gif", type: "image" },
  { src: "/images/gallery/1.mp4", type: "video" },
  { src: "/images/gallery/video-2026-02-14-18.01.23b.mp4", type: "video" },
  { src: "/images/gallery/video-2026-02-14-18.01.23e.mp4", type: "video" },
  { src: "/images/gallery/video-2026-02-14-18.01.23n.mp4", type: "video" },
  { src: "/images/gallery/video-2026-02-14-18.01.23nb.mp4", type: "video" },
  { src: "/images/gallery/video-2026-02-14-18.01.23t.mp4", type: "video" },
  { src: "/images/gallery/video-2026-02-14-18.01.23z.mp4", type: "video" },
  { src: "/images/gallery/video-2026-02-14-18.01.24.mp4", type: "video" },
  { src: "/images/gallery/video-2026-02-14-18.01.240.mp4", type: "video" },
  { src: "/images/gallery/video-2026-02-14-18.01.241.mp4", type: "video" },
  { src: "/images/gallery/video-2026-02-14-18.01.24a.mp4", type: "video" },
  { src: "/images/gallery/video-2026-02-14-18.01.24j.mp4", type: "video" },
  { src: "/images/gallery/VIDEO-2025-02-14-22-51-15.mov", type: "video" },
  { src: "/images/gallery/VIDEO-2025-02-14-22-51-154.mov", type: "video" },
  { src: "/images/gallery/VIDEO-2025-03-20-02-14-54.mov", type: "video" },
];

interface PhotoGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const PhotoGallery = ({ isOpen, onClose }: PhotoGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null && selectedIndex < galleryMedia.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-background/80 backdrop-blur-sm border-b border-primary/20">
          <h2 className="font-display text-2xl md:text-3xl text-primary">
            Nos plus beaux moments ❤️
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Fermer la galerie"
          >
            <X size={28} className="text-primary" />
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryMedia.map((media, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="aspect-square cursor-pointer group relative overflow-hidden rounded-lg"
                onClick={() => openLightbox(index)}
              >
                {media.type === "video" ? (
                  <video
                    src={media.src}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={media.src}
                    alt={`Souvenir ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {media.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent ml-1" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                aria-label="Fermer"
              >
                <X size={32} className="text-white" />
              </button>

              {/* Previous button */}
              {selectedIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                  aria-label="Photo précédente"
                >
                  <ChevronLeft size={32} className="text-white" />
                </button>
              )}

              {/* Next button */}
              {selectedIndex < galleryMedia.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                  aria-label="Photo suivante"
                >
                  <ChevronRight size={32} className="text-white" />
                </button>
              )}

              {/* Image or Video */}
              {galleryMedia[selectedIndex].type === "video" ? (
                <motion.video
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  src={galleryMedia[selectedIndex].src}
                  controls
                  autoPlay
                  className="max-w-full max-h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <motion.img
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  src={galleryMedia[selectedIndex].src}
                  alt={`Photo ${selectedIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              )}

              {/* Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-body text-sm">
                {selectedIndex + 1} / {galleryMedia.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default PhotoGallery;
