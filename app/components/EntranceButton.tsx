"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function EntranceButton() {
  const router = useRouter()

  const handleClick = () => {
    router.push("/main")
  }

  return (
    <motion.button
      onClick={handleClick}
      className="px-8 py-4 bg-pink-700 text-white rounded-full font-bold text-xl hover:bg-pink-800 transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Enter the Celebration 🎉
    </motion.button>
  )
}

