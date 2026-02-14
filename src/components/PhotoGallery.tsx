import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/*
  GALERIE PHOTOS — Ajoutez autant de photos que vous voulez
  Placez vos images dans /public/images/gallery/ 
*/
const galleryPhotos = [
  "/images/gallery/WhatsApp%20Image%202026-02-14%20at%2012.57.41.jpeg",
  "/images/gallery/WhatsApp%20Image%202026-02-14%20at%2012.57.410.jpeg",
  "/images/gallery/WhatsApp%20Image%202026-02-14%20at%2012.57.411.jpeg",
  "/images/gallery/WhatsApp%20Image%202026-02-14%20at%2012.57.412.jpeg",
  "/images/gallery/WhatsApp%20Image%202026-02-14%20at%2012.57.413.jpeg",
  "/images/gallery/WhatsApp%20Image%202026-02-14%20at%2012.57.414.jpeg",
  "/images/gallery/WhatsApp%20Image%202026-02-14%20at%2012.57.415.jpeg",
  "/images/gallery/WhatsApp%20Image%202026-02-14%20at%2012.57.416.jpeg",
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
    if (selectedIndex !== null && selectedIndex < galleryPhotos.length - 1) {
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
            {galleryPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="aspect-square cursor-pointer group relative overflow-hidden rounded-lg"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={photo}
                  alt={`Souvenir ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              {selectedIndex < galleryPhotos.length - 1 && (
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

              {/* Image */}
              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={galleryPhotos[selectedIndex]}
                alt={`Photo ${selectedIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-body text-sm">
                {selectedIndex + 1} / {galleryPhotos.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default PhotoGallery;
