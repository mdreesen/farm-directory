import axios from 'axios';
import { NextApiRequest } from 'next';
import { cfg } from 'settings/cfg.settings';

export const ax = {
  farmers: {
    find: axios
      .post(
        cfg.api.find,
        {
          ...cfg.api.settings.body,
          sort: { postedAt: -1 },
        },
        {
          headers: cfg.api.settings.headers,
        }
      )
      .then((res) => res.data),
    insertOne: (req: NextApiRequest) =>
      axios
        .post(
          cfg.api.insertOne,
          {
            ...cfg.api.settings.body,
            document: req.body,
          },
          {
            headers: cfg.api.settings.headers,
          }
        )
        .then((res) => res.data),
    updateOne: (req: NextApiRequest) =>
      axios
        .post(
          cfg.api.updateOne,
          {
            ...cfg.api.settings.body,
            filter: { _id: { $oid: req.body._id } },
            update: {
              $set: {
                body: req.body.body,
              },
            },
          },
          {
            headers: cfg.api.settings.headers,
          }
        )
        .then((res) => res.data),
    deleteOne: (req: NextApiRequest) =>
      axios.post(
        cfg.api.deleteOne,
        {
          ...cfg.api.settings.body,
          filter: { _id: { $oid: req.body._id } },
        },
        {
          headers: cfg.api.settings.headers,
        }
      ),
  },
};
