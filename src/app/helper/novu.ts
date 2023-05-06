import { ITriggerPayloadOptions, Novu } from "@novu/node";
import { DB } from "../helper/db.interface";

const novu = new Novu("13f7f515e7ca99bb93a77906302f601e");

export const registerAndCreateANewTweet = async (body: DB) => {
  await novu.topics.create({
    key: `tweet-${body.id}`,
    name: "Tweet",
  });

  await addToTopic(body);
};

export const addToTopic = async (body: DB) => {
  await novu.topics.addSubscribers(`tweet-${body.id}`, {
    subscribers: [body.username],
  });
};

export const sendNotification = async (body: DB) => {
  await novu.trigger("send-notification-on-a-new-comment", {
    to: [{ type: "Topic", topicKey: `tweet-${body.id}` }],
    payload: {
      name: body.username,
    },
    actor: { subscriberId: body.username },
  } as ITriggerPayloadOptions);
};