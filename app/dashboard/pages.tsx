'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Calendar, Users, Trophy, BookOpen, Video, MessageCircle } from 'lucide-react'

interface User {
  firstName: string
  lastName: string
  email: string
  university: string
  major: string
  year: string
}

interface ExpoEvent {
  id: string
  title: string
  description: string
  date: string
  time: string
  category: string
  participants: number
  status: 'upcoming' | 'live' | 'completed'
}

export default function Dashboard() {
  const router = useRouter()
  const [user, set
