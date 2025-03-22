"use client"

import { motion } from "framer-motion"
import { Dancing_Script } from "next/font/google"

const dancingScript = Dancing_Script({ subsets: ["latin"] })

export default function PoemSection() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-pink-50 via-pink-100 to-purple-100 rounded-2xl p-8 shadow-xl"
      >
        <h2 className="text-4xl font-cursive text-center text-pink-700 mb-8">
          A Silver Jubilee Poem for my Beloved
        </h2>
        
        <div className={`space-y-6 text-2xl leading-relaxed ${dancingScript.className} bg-gradient-to-br from-purple-800 to-pink-700 text-transparent bg-clip-text`}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center italic"
          >
            To my dearest sister, on this special day,
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            Twenty-five years of laughter, love, and grace,<br />
            Your journey through life, a beautiful embrace.<br />
            From childhood memories to moments we share,<br />
            Your presence in my life, beyond compare.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            Like the silver moon that lights the night,<br />
            Your spirit shines with gentle might.<br />
            Your kindness flows like a gentle stream,<br />
            Making life's moments feel like a dream.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            Through every season, through every year,<br />
            Your love and support, always near.<br />
            A sister's bond, unbreakable and true,<br />
            My heart's forever grateful for you.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center italic mt-8"
          >
            Happy Silver Jubilee, dear sister mine,<br />
            May your day be as precious as you are divine.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-center"
        >
          <p className={`text-pink-600 italic ${dancingScript.className} text-2xl`}>
            With all my love,<br />
            iMaks ✨👑✨
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
} 