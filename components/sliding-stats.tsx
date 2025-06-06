"use client"

import { useState, useEffect } from "react"
import { Users, Building2, TrendingUp, BookOpen, Globe, Award } from "lucide-react"

const stats = [
  {
    id: 1,
    icon: Users,
    value: "50K+",
    label: "Active Users",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
  },
  {
    id: 2,
    icon: Building2,
    value: "500+",
    label: "Partner Companies",
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100",
  },
  {
    id: 3,
    icon: TrendingUp,
    value: "95%",
    label: "Success Rate",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
  },
  {
    id: 4,
    icon: BookOpen,
    value: "1M+",
    label: "Daily Learning Sessions",
    gradient: "from-orange-500 to-orange-600",
    bgGradient: "from-orange-50 to-orange-100",
  },
  {
    id: 5,
    icon: Globe,
    value: "25+",
    label: "Countries Served",
    gradient: "from-pink-500 to-pink-600",
    bgGradient: "from-pink-50 to-pink-100",
  },
  {
    id: 6,
    icon: Award,
    value: "10K+",
    label: "Certifications Issued",
    gradient: "from-indigo-500 to-indigo-600",
    bgGradient: "from-indigo-50 to-indigo-100",
  },
]

export function SlidingStats() {
  const [currentStatIndex, setCurrentStatIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % stats.length)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])

  // Show 3 stats at a time
  const visibleStats = [
    stats[currentStatIndex],
    stats[(currentStatIndex + 1) % stats.length],
    stats[(currentStatIndex + 2) % stats.length],
  ]

  return (
    <div className="relative mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent mb-2">
          Trusted by Professionals Worldwide
        </h2>
        <p className="text-gray-600">Join our growing community of learners and industry leaders</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleStats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <div key={`${stat.id}-${currentStatIndex}`} className="relative group">
              {/* Background glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
              ></div>

              {/* Main card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r ${stat.gradient} rounded-full`}
                ></div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`relative w-20 h-20 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                    {/* Floating particles effect */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Stats */}
                <div className="text-center">
                  <div
                    className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <p className="text-gray-700 font-semibold text-lg">{stat.label}</p>
                </div>

                {/* Bottom decoration */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  <div className={`w-2 h-2 bg-gradient-to-r ${stat.gradient} rounded-full opacity-60`}></div>
                  <div className={`w-2 h-2 bg-gradient-to-r ${stat.gradient} rounded-full opacity-40`}></div>
                  <div className={`w-2 h-2 bg-gradient-to-r ${stat.gradient} rounded-full opacity-20`}></div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {stats.map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-300 rounded-full ${
              Math.floor(index / 3) === Math.floor(currentStatIndex / 3)
                ? "w-8 h-3 bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg"
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
