"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Brain, Users, Zap, Mail, Lock, Eye, EyeOff, Crown, GraduationCap } from "lucide-react"
import { AnimatedTitle } from "../components/animated-title"
import Dashboard from "./dashboard/page"

export default function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isLoggedIn) {
    return <Dashboard onLogout={() => setIsLoggedIn(false)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header with Background */}
      <header className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 shadow-lg">
        {/* Top Bar with Join Premium */}
        <div className="bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="text-white/80 text-sm">Transform your career with AI-powered learning</div>
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
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                    <div className="relative">
                      <GraduationCap className="w-8 h-8 text-purple-600" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-black text-xs">E</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-4xl font-black text-white drop-shadow-lg">E.Ai</span>
                  <p className="text-white/80 text-sm -mt-1">A product of SwitchiT</p>
                </div>
              </div>
              <nav className="hidden md:flex items-center space-x-6 ml-8">
                <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
                  About
                </a>
                <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
                  Features
                </a>
                <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
                  Contact
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <AnimatedTitle />
              <p className="text-xl text-gray-600 leading-relaxed">
                Build confidence, improve communication, and develop leadership skills with{" "}
                <span className="font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  AI-powered feedback
                </span>
              </p>
            </div>

            {/* Enhanced Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">AI-Powered</h3>
                <p className="text-sm text-gray-600">Smart feedback & personalized learning paths</p>
              </div>

              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Interactive</h3>
                <p className="text-sm text-gray-600">Hands-on practice labs & real scenarios</p>
              </div>

              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Adaptive</h3>
                <p className="text-sm text-gray-600">Custom learning paths that evolve with you</p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Join Thousands of Professionals</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black mb-2">50K+</div>
                  <div className="text-sm opacity-90">Active Learners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black mb-2">95%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black mb-2">500+</div>
                  <div className="text-sm opacity-90">Partner Companies</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Login Form */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 p-6">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold">Welcome Back</h2>
                  <p className="opacity-90">Continue your learning journey</p>
                </div>
              </div>
              <CardContent className="p-8">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-12 h-12 border-2 border-gray-200 focus:border-purple-500 rounded-xl"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700 font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="pl-12 pr-12 h-12 border-2 border-gray-200 focus:border-purple-500 rounded-xl"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300 text-purple-600" />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-purple-600 hover:underline font-medium">
                      Forgot password?
                    </a>
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 hover:from-purple-700 hover:via-pink-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Sign In to E.Ai
                  </Button>
                </form>
                <Separator className="my-6" />
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <a href="#" className="text-purple-600 hover:underline font-semibold">
                      Sign up for free
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
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
