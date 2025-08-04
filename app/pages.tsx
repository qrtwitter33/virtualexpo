'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Users, Calendar, Award, ArrowRight } from 'lucide-react'

export default function Home() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeExpos: 0,
    upcomingEvents: 0
  })

  useEffect(() => {
    // Simulate fetching stats
    setStats({
      totalStudents: 1247,
      activeExpos: 12,
      upcomingEvents: 5
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Virtual Expo Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our interactive virtual exhibitions, showcase your projects, 
            and connect with fellow students from around the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/register" className="btn-primary text-lg px-8 py-3">
              Register Now <ArrowRight className="ml-2 w-5 h-5 inline" />
            </Link>
            <Link href="/login" className="btn-secondary text-lg px-8 py-3">
              Login to Continue
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="expo-card text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">{stats.totalStudents}</h3>
              <p className="text-gray-600">Registered Students</p>
            </div>
            <div className="expo-card text-center">
              <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">{stats.activeExpos}</h3>
              <p className="text-gray-600">Active Exhibitions</p>
            </div>
            <div className="expo-card text-center">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">{stats.upcomingEvents}</h3>
              <p className="text-gray-600">Upcoming Events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Join Our Virtual Expo?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Community</h3>
              <p className="text-gray-600">Connect with students from universities worldwide</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Events</h3>
              <p className="text-gray-600">Participate in live presentations and Q&A sessions</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Showcase Projects</h3>
              <p className="text-gray-600">Display your work to industry professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students already participating in our virtual exhibitions
          </p>
          <Link href="/register" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Create Your Account Today
          </Link>
        </div>
      </section>
    </div>
  )
}
