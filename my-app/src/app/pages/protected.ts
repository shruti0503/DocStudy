

import { NextApiRequest, NextApiResponse } from 'next'
import { authenticateToken } from './api/auth/login'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const decoded = authenticateToken(req, res)

  if (!decoded) return

  res.status(200).json({ message: 'Protected content', user: decoded })
}
