import "./Lightbox.css";

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  setCurrentIndex,
}) {
  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>

      <button className="nav-btn prev" onClick={goToPrevious}>
        &larr;
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex].src}
          alt={`Project ${currentIndex + 1}`}
          className="lightbox-image"
        />
      </div>

      <button className="nav-btn next" onClick={goToNext}>
        &rarr;
      </button>
    </div>
  );
}
