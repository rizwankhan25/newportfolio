"use client"
import React, { useState } from "react";
import Image from "next/image";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/gallery/IMG_7825.JPG",
      alt: "Gallery Image 1",
    },
    {
      src: "/gallery/WhatsApp Image 2024-09-13 at 19.21.34_44254dc1.jpg",
      alt: "Gallery Image 2",
    },
    {
      src: "/gallery/WhatsApp Image 2024-09-13 at 18.08.38_4662036e.jpg",
      alt: "Gallery Image 3",
    },
    {
      src: "/gallery/WhatsApp Image 2024-07-21 at 11.04.16 AM.jpeg",
      alt: "Gallery Image 4",
    },
    {
      src: "/gallery/IMG-20230111-WA0010 - Copy.jpg",
      alt: "Gallery Image 5",
    },
    {
      src: "/gallery/IMG-20230123-WA0006.jpg",
      alt: "Gallery Image 6",
    },
    {
      src: "/gallery/WhatsApp Image 2022-10-20 at 11.12.01 PM.jpeg",
      alt: "Gallery Image 7",
    },
    {
      src: "/gallery/WhatsApp Image 2022-12-02 at 5.20.54 PM.jpeg",
      alt: "Gallery Image 8",
    },
    {
      src: "/gallery/IMG_20220907_102221.jpg",
      alt: "Gallery Image 9",
    },
    {
      src: "/gallery/IMG-20220614-WA0043.jpg",
      alt: "Gallery Image 10",
    },
    {
      src: "/gallery/image2.jpg",
      alt: "Gallery Image 11",
    },
    {
      src: "/gallery/IMG-20220312-WA0010.jpg",
      alt: "Gallery Image 12",
    },
    {
      src: "/gallery/IMG-20220302-WA0002 - Copy (2) - Copy - Copy.jpg",
      alt: "Gallery Image 13",
    },
    {
      src: "/gallery/WhatsApp Image 2021-09-26 at 7.44.16 PM (1).jpeg",
      alt: "Gallery Image 14",
    },
    {
      src: "/gallery/WhatsApp Image 2021-09-26 at 7.42.41 PM.jpeg",
      alt: "Gallery Image 15",
    },
    {
      src: "/gallery/WIN_20220203_20_43_50_Pro.jpg",
      alt: "Gallery Image 16",
    },
    {
      src: "/gallery/1640458639248.jpg",
      alt: "Gallery Image 17",
    },
    {
      src: "/gallery/1640458639253.jpg",
      alt: "Gallery Image 18",
    },
    {
      src: "/gallery/1640458639259.jpg",
      alt: "Gallery Image 19",
    },
    {
      src: "/gallery/1640458639277.jpg",
      alt: "Gallery Image 20",
    },
    {
      src: "/gallery/Snapchat-242104373.jpg",
      alt: "Gallery Image 21",
    },
    {
      src: "/gallery/WhatsApp Image 2024-11-09 at 19.12.45_b28c681f.jpg",
      alt: "Gallery Image 21",
    },
    {
      src: "/gallery/65826990_2082901738486293_7706961767745716224_n (2).jpg",
      alt: "Gallery Image 21",
    },
    {
      src: "/gallery/IMG_4333.jpg",
      alt: "Gallery Image 21",
    },
  ];

  // Calculate how many images to show initially (2 rows * 4 columns = 8 images)
  const initialImageCount = 8;
  const displayedImages = showAll ? images : images.slice(0, initialImageCount);

  const handlePrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className=" pb-12">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-14">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-[350px] h-[250px] mx-auto cursor-pointer"
              onClick={() => handleImageClick(image, index)}
            >
              <div className="image-container relative w-full h-full mx-auto">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {!showAll && images.length > initialImageCount && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              See More Images
            </button>
          </div>
        )}

        {/* Image Modal with Slider */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full h-[90vh] flex items-center">
              {/* Previous Button */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
                onClick={handlePrevious}
              >
                ‹
              </button>

              {/* Image Container */}
              <div className="relative w-full h-full">
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 90vw, 80vw"
                  priority
                />
              </div>

              {/* Next Button */}
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
                onClick={handleNext}
              >
                ›
              </button>

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
