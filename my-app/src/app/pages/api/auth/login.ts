

import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const users = [
  { id: '1', email: 'user@example.com', password: '$2a$10$...' } 
]

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key'

export function authenticateToken(req: NextApiRequest, res: NextApiResponse) {
    const token = req.headers.authorization?.split(' ')[1]
  
    if (!token) {
      return res.status(401).json({ message: 'No token provided' })
    }
  
    try {
      const decoded = jwt.verify(token, SECRET_KEY)
      return decoded
    } catch (err) {
      return res.status(403).json({ message: 'Invalid token' })
    }
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    const user = users.find(user => user.email === email)

    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' })
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      SECRET_KEY,
      { expiresIn: '1h' }
    )

    return res.status(200).json({ token })
  }

  res.status(405).json({ message: 'Method not allowed' })
}
