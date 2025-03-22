"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Cake() {
  const [isLit, setIsLit] = useState(true)

  const handleSwipe = () => {
    setIsLit(false)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Cake base */}
        <div 
          className="w-full h-32 bg-gradient-to-br from-pink-200 to-pink-300 rounded-t-3xl rounded-b-lg shadow-lg relative"
          onTouchStart={handleSwipe}
          onMouseDown={handleSwipe}
        >
          {/* Cake layers */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-br from-pink-100 to-pink-200 rounded-t-3xl"></div>
          <div className="absolute bottom-6 left-0 right-0 h-16 bg-gradient-to-br from-pink-50 to-pink-100 rounded-t-3xl"></div>
          <div className="absolute bottom-12 left-0 right-0 h-12 bg-gradient-to-br from-pink-50 to-pink-100 rounded-t-3xl"></div>

          {/* Candles */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ y: 0 }}
                animate={{ y: isLit ? [0, -5, 0] : 0 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              >
                <div className="w-1 h-8 bg-pink-300 mx-auto"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full mx-auto mt-1"></div>
                {isLit && (
                  <motion.div
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: [0.8, 1, 0.8], opacity: [0.8, 1, 0.8] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  >
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive text */}
        <div className="mt-4 text-center space-y-2">
          <motion.p
            className="text-pink-700 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Swipe across the candles to blow them out!
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}

