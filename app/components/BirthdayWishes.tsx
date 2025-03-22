"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dancing_Script } from "next/font/google"
import { useWishes } from "../hooks/useWishes"

const dancingScript = Dancing_Script({ subsets: ["latin"] })

export default function BirthdayWishes() {
  const { wishes, addWish } = useWishes()
  const [localWishes, setLocalWishes] = useState(wishes)
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    setLocalWishes(wishes)
  }, [wishes])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    addWish({
      name: name.trim(),
      message: message.trim(),
    })

    // Clear form
    setName("")
    setMessage("")
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-slate-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-cursive text-pink-700 mb-6 text-center font-bold">Birthday Wishes</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 rounded border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-pink-700 placeholder-pink-400"
          required
        />
        <textarea
          placeholder="Your Birthday Wish"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 mb-4 rounded border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 h-32 text-pink-700 placeholder-pink-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-pink-700 text-white py-2 px-4 rounded hover:bg-pink-800 transition duration-300"
        >
          Send Wish
        </button>
      </form>

      <div className="space-y-4">
        <AnimatePresence>
          {localWishes
            .slice()
            .reverse()
            .map((wish) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="bg-white p-4 rounded-lg shadow"
              >
                <p className="font-bold text-pink-700">{wish.name}</p>
                <p className="text-pink-700 mt-2">{wish.message}</p>
                <p className="text-xs text-pink-500 mt-2">{new Date(wish.timestamp).toLocaleString()}</p>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

