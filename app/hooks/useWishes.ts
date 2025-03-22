// hooks/useWishes.ts
import { useState, useEffect } from "react"

export interface Wish {
  id: string
  name: string
  message: string
  timestamp: number
}

export function useWishes() {
  const [wishes, setWishes] = useState<Wish[]>([])

  useEffect(() => {
    // Load wishes from localStorage on component mount
    const savedWishes = localStorage.getItem("birthdayWishes")
    if (savedWishes) {
      setWishes(JSON.parse(savedWishes))
    }
  }, [])

  const addWish = (wish: Omit<Wish, "id" | "timestamp">) => {
    const newWish: Wish = {
      ...wish,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
    }

    // Update state and localStorage
    const updatedWishes = [...wishes, newWish]
    setWishes(updatedWishes)
    localStorage.setItem("birthdayWishes", JSON.stringify(updatedWishes))

    // Dispatch custom event for real-time updates
    window.dispatchEvent(new CustomEvent("wishesUpdated", { detail: updatedWishes }))
  }

  return { wishes, addWish }
}