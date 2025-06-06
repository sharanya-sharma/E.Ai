"use client"

import { useState, useEffect } from "react"

const words = ["Educate", "Elevate", "Empower"]

export function AnimatedTitle() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const currentWord = words[currentWordIndex]
  const restOfWord = currentWord.slice(1)

  return (
    <div className="relative">
      <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
        Master Soft Skills & AI Tools
        <br />
        <span className="block mt-2">
          for Career Success with{" "}
          <span className="relative inline-block">
            <span
              className={`inline-block transition-all duration-500 ${
                isAnimating ? "transform scale-110 rotate-12" : ""
              }`}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 font-black text-5xl lg:text-7xl">
                E
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {restOfWord}
              </span>
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transform scale-x-0 animate-pulse"></div>
          </span>
        </span>
      </h1>
      <div className="mt-4 text-lg text-gray-600">
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-xl">
          E: {currentWord}
        </span>
      </div>
    </div>
  )
}
