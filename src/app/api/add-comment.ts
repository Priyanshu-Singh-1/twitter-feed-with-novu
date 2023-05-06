import type { NextApiRequest, NextApiResponse } from 'next'
import {db} from "../helper/db";
import {registerAndCreateANewTweet} from "../helper/novu";

type Data = {
  send: boolean;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  db.push(req.body);
  registerAndCreateANewTweet(req.body);

  res.send({send: true});
}