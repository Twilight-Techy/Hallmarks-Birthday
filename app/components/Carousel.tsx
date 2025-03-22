"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/media/hallmark (1).jpg",
  "/media/hallmark (2).jpg",
  "/media/hallmark (3).jpg",
  "/media/hallmark (4).jpg",
  "/media/hallmark (5).jpg",
  "/media/hallmark (6).jpg",
  "/media/hallmark (7).jpg",
  "/media/hallmark (8).jpg",
  "/media/hallmark (9).jpg",
  "/media/hallmark (10).jpg",
  "/media/hallmark (11).jpg",
  "/media/hallmark (12).jpg",
  "/media/hallmark (13).jpg",
  "/media/hallmark (14).jpg",
  "/media/hallmark (15).jpg",
  "/media/hallmark (16).jpg",
  "/media/hallmark (17).jpg",
  "/media/hallmark (18).jpg",
  "/media/hallmark (19).jpg",
  "/media/hallmark (20).jpg",
  "/media/hallmark (21).jpg",
  "/media/hallmark (22).jpg",
  "/media/hallmark (23).jpg",
  "/media/hallmark (24).jpg"
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const resetAutoSlideTimer = () => {
    if (autoSlideTimerRef.current) {
      clearTimeout(autoSlideTimerRef.current)
    }
    autoSlideTimerRef.current = setTimeout(nextSlide, 5000)
  }

  useEffect(() => {
    resetAutoSlideTimer()
    return () => {
      if (autoSlideTimerRef.current) {
        clearTimeout(autoSlideTimerRef.current)
      }
    }
  }, [currentIndex])

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="relative aspect-[9/16] overflow-hidden rounded-3xl shadow-xl">
        <div className="absolute inset-0 border-[12px] border-gray-300 rounded-3xl z-10 pointer-events-none shadow-inner"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex]}
              alt={`Hallmark card ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity z-20"
          onClick={() => {
            prevSlide()
            resetAutoSlideTimer()
          }}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity z-20"
          onClick={() => {
            nextSlide()
            resetAutoSlideTimer()
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}
