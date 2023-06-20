import FeedBackModel from "./feedbackModel";

export async function addFeedBack(req: any, res: any) {
    try {
      const { name, email, message } = req.body;
  
      const feedbackDB = await FeedBackModel.create({ name, email, message });
      res.send({ ok: true, feedbackDB });
    } catch (error: any) {
      console.error("Unable to add feedback:", error);
      res.status(500).send({ ok: false, error });
    }
  }
  
  export async function getFeedBacks(req: any, res: any) {
    try {
      const feedbackDB = await FeedBackModel.find({});
      res.send(feedbackDB);
    } catch (error: any) {
      console.error("Unable to get feedbacks:", error);
      res.status(500).send({ ok: false, error });
    }
  }