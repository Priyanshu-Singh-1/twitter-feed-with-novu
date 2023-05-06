import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../helper/db";
import {
  addToTopic,
  registerAndCreateANewTweet,
  sendNotification,
} from "../helper/novu";

type Data = {
  send: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  db.push(req.body);
  await addToTopic({ ...req.body, id: req.body.parentId });
  await sendNotification({ ...req.body, id: req.body.parentId });

  res.send({ send: true });
}