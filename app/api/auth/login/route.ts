import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { connectDB } from '@/lib/mongodb'
import User from '@/lib/models/User'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Connect to database
    await connectDB()

    // Demo user check
    if (email === 'demo@student.com' && password === 'demo123') {
      const token = jwt.sign(
        { userId: 'demo', email: 'demo@student.com' },
        process.env.JWT_SECRET || 'fallback-secret',
        { expiresIn: '7d' }
      )

      return NextResponse.json({
        token,
        user: {
          id: 'demo',
          firstName: 'Demo',
          lastName: 'Student',
          email: 'demo@student.com',
          university: 'Demo University',
          major: 'Computer Science',
          year: 'senior',
        },
      })
    }

    // Find user
    const user = await User.findOne({ email })
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '7d' }
    )

    return NextResponse.json({
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        university: user.university,
        major: user.major,
        year: user.year,
      },
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
