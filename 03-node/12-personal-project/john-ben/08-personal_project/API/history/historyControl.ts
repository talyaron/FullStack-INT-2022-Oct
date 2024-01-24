import HistoryModel from "./historyModel";

export const getHistories = async (req: any, res: any) => {
	try {
		const { userId } = req.user;

		const histories = await HistoryModel.find({ userId });

		res.status(200).send({ histories });
	} catch (error: any) {
		console.error(error);
		res.status(500).send({ error: error.message });
	}
};
