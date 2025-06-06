"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MonitorIcon as Mirror,
  Users,
  Target,
  TrendingUp,
  Brain,
  ChevronLeft,
  ChevronRight,
  Play,
  Clock,
  Star,
  Crown,
  GraduationCap,
} from "lucide-react"
import { UserAvatar } from "../../components/user-avatar"
import { SlidingStats } from "../../components/sliding-stats"

interface DashboardProps {
  onLogout: () => void
}

const modules = [
  {
    id: 1,
    title: "Mirror Me Mode",
    description:
      "Practice conversations with AI personas like rude boss, shy teammate with real-time feedback on tone, pacing, and assertiveness",
    icon: Mirror,
    gradient: "from-blue-500 via-blue-600 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    features: ["Real-time feedback", "AI personas", "Tone analysis", "Confidence building"],
    duration: "15-30 min sessions",
    badge: "Popular",
  },
  {
    id: 2,
    title: "Soft Skills Lab",
    description:
      "Scenario-based simulations including salary negotiation, feedback sessions with post-session scoring and improvement tips",
    icon: Users,
    gradient: "from-purple-500 via-purple-600 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
    features: ["Scenario simulations", "Negotiation practice", "Feedback sessions", "Scoring system"],
    duration: "20-45 min sessions",
    badge: "Featured",
  },
  {
    id: 3,
    title: "Daily Personality Booster Quests",
    description: "3-minute streak-based tasks to build consistency. Examples: elevator pitch, team conflict response",
    icon: Target,
    gradient: "from-green-500 via-emerald-600 to-teal-600",
    bgGradient: "from-green-50 to-teal-50",
    features: ["Daily challenges", "Streak tracking", "Quick tasks", "Habit building"],
    duration: "3 min daily",
    badge: "Daily",
  },
  {
    id: 4,
    title: "Confidence Circle (Peer Pods)",
    description: "AI-moderated micro communities of 5 users with weekly discussions and challenges",
    icon: Users,
    gradient: "from-orange-500 via-red-500 to-pink-600",
    bgGradient: "from-orange-50 to-pink-50",
    features: ["Peer groups", "AI moderation", "Weekly challenges", "Community support"],
    duration: "Weekly sessions",
    badge: "Community",
  },
  {
    id: 5,
    title: "Growth Sprints",
    description: "Thematic 30-day streak-based growth plans like Public Speaking Sprint, Master ChatGPT in 30 Days",
    icon: TrendingUp,
    gradient: "from-red-500 via-rose-600 to-pink-600",
    bgGradient: "from-red-50 to-pink-50",
    features: ["30-day programs", "Themed learning", "Progress tracking", "Skill mastery"],
    duration: "30-day programs",
    badge: "Intensive",
  },
  {
    id: 6,
    title: "AI Tools Tutorial Section",
    description:
      "Tool-by-tool learning paths for ChatGPT, Midjourney, Notion AI, Excel Copilot with hands-on labs and mini challenges",
    icon: Brain,
    gradient: "from-indigo-500 via-purple-600 to-blue-600",
    bgGradient: "from-indigo-50 to-blue-50",
    features: ["Tool walkthroughs", "Hands-on labs", "Professional use cases", "Mini challenges"],
    duration: "Varies by tool",
    badge: "AI Focus",
  },
]

export default function Dashboard({ onLogout }: DashboardProps) {
  const [currentModule, setCurrentModule] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentModule((prev) => (prev + 1) % modules.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextModule = () => {
    setCurrentModule((prev) => (prev + 1) % modules.length)
  }

  const prevModule = () => {
    setCurrentModule((prev) => (prev - 1 + modules.length) % modules.length)
  }

  const currentModuleData = modules[currentModule]
  const IconComponent = currentModuleData.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header with Background */}
      <header className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 shadow-lg sticky top-0 z-50">
        {/* Top Bar with Join Premium */}
        <div className="bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="text-white/80 text-sm">🎯 Unlock advanced features and personalized coaching</div>
              <Button
                size="sm"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xs px-4 py-1 rounded-full"
              >
                <Crown className="w-3 h-3 mr-1" />
                Join Premium
              </Button>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <div className="relative">
                      <GraduationCap className="w-7 h-7 text-purple-600" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-black text-xs">E</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-3xl font-black text-white drop-shadow-lg">E.Ai</span>
                  <p className="text-white/80 text-xs -mt-1">A product of SwitchiT</p>
                </div>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-white/90 hover:text-white font-medium transition-colors">
                  My Dashboard
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right mr-4">
                <p className="text-lg font-bold text-white drop-shadow">E.Ai</p>
                <p className="text-xs text-white/80 font-medium">E: Educate. Elevate. Empower.</p>
              </div>
              <UserAvatar onLogout={onLogout} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent mb-4">
            Welcome to Your Learning Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive modules designed to enhance your soft skills and AI tool proficiency with{" "}
            <span className="font-semibold text-purple-600">personalized AI feedback</span>.
          </p>
        </div>

        {/* Enhanced Sliding Module Showcase */}
        <div className="relative mb-12 group">
          <Card
            className={`bg-gradient-to-br ${currentModuleData.bgGradient} border-0 shadow-2xl overflow-hidden rounded-3xl`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
            <CardContent className="p-8 lg:p-12 relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${currentModuleData.gradient} rounded-3xl flex items-center justify-center shadow-xl`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">{currentModuleData.title}</h2>
                        <div className="flex items-center space-x-2 mt-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600 font-medium">{currentModuleData.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`px-3 py-1 bg-gradient-to-r ${currentModuleData.gradient} text-white text-xs font-bold rounded-full shadow-lg`}
                    >
                      {currentModuleData.badge}
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">{currentModuleData.description}</p>

                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 text-lg">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {currentModuleData.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div
                            className={`w-3 h-3 bg-gradient-to-r ${currentModuleData.gradient} rounded-full shadow-sm`}
                          ></div>
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      className={`bg-gradient-to-r ${currentModuleData.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all px-8 py-3 rounded-xl`}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Start Learning
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-gray-300 hover:border-gray-400 px-6 py-3 rounded-xl"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center">
                  <div className="relative">
                    <div
                      className={`w-80 h-80 bg-gradient-to-r ${currentModuleData.gradient} rounded-[3rem] flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500`}
                    >
                      <IconComponent className="w-40 h-40 text-white opacity-90" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Navigation Controls - Completely invisible until hover */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out transform -translate-x-2 group-hover:translate-x-0">
            <Button
              variant="outline"
              size="icon"
              onClick={prevModule}
              className="bg-white/95 backdrop-blur-sm hover:bg-white border-2 border-gray-200 hover:border-purple-400 hover:shadow-xl shadow-lg w-14 h-14 rounded-2xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 hover:text-purple-600" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out transform translate-x-2 group-hover:translate-x-0">
            <Button
              variant="outline"
              size="icon"
              onClick={nextModule}
              className="bg-white/95 backdrop-blur-sm hover:bg-white border-2 border-gray-200 hover:border-purple-400 hover:shadow-xl shadow-lg w-14 h-14 rounded-2xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 hover:text-purple-600" />
            </Button>
          </div>

          {/* Enhanced Module Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {modules.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentModule(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentModule
                    ? "w-8 h-4 bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg"
                    : "w-4 h-4 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Sliding Stats */}
        <SlidingStats />
      </main>

      {/* Footer with Background */}
      <footer className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">E.Ai</span>
            </div>
            <p className="text-gray-300">© 2025 E.Ai - A product of SwitchiT. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
