// /pages/api/saveProject.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const project = req.body;
    // Save project logic (e.g., save to MongoDB)
    res.status(200).json({ message: 'Project saved successfully!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
