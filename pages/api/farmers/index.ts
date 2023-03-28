import { ax } from '../../../lib/axios.lib';
import type { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET': {
        const data = await ax.farmers.find;
        res.status(200).json(data.documents);
        break;
      }
      case 'POST': {
        const data = await ax.farmers.insertOne(req);
        res.status(200).json(data);
        break;
      }
      case 'PUT': {
        const data = await ax.farmers.updateOne(req);
        res.status(200).json(data);
        break;
      }
      case 'DELETE': {
        const data = await ax.farmers.deleteOne(req);
        res.status(200).json(data);
        break;
      }
      default: {
        res.status(405).end();
        break;
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}
