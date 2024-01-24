import TaskModel from "./taskModel";
import HistoryModel from "../history/historyModel";

export const addTask = async (req: any, res: any) => {
	try {
		const { name } = req.body;
		const { userId } = req.user;

		const newTask = await TaskModel.create({ name, userId });

		await HistoryModel.create({
			type: "add",
			task: newTask,
			userId,
		});

		res.status(201).send({ task: newTask });
	} catch (error: any) {
		console.error(error);
		res.status(500).send({ error: error.message });
	}
};

export const getTask = async (req: any, res: any) => {
	try {
		const { taskId } = req.params;
		const { userId } = req.user;

		const task = await TaskModel.findById({ _id: taskId });

		if (task?.userId?.toString() !== userId) {
			return res.status(404).send(`Task not found for userId: ${userId}`);
		}

		res.status(200).send({ task });
	} catch (error: any) {
		console.error(error);
		res.status(500).send({ error: error.message });
	}
};

export const getTasks = async (req: any, res: any) => {
	try {
		const { userId } = req.user;

		const tasks = await TaskModel.find({ userId });

		res.status(200).send({ tasks });
	} catch (error: any) {
		console.error(error);
		res.status(500).send({ error: error.message });
	}
};

export const updateTask = async (req: any, res: any) => {
	try {
		const { taskId } = req.params;
		const { userId } = req.user;

		const prevTask = await TaskModel.findById({ _id: taskId });

		if (prevTask?.userId?.toString() !== userId) {
			return res.status(404).send(`Task not found for userId: ${userId}`);
		}

		await TaskModel.findOneAndUpdate(
			{ _id: taskId },
			{
				name: req.body?.name || prevTask?.name,
				status: req.body?.status || prevTask?.status,
			}
		);

		const newTask = await TaskModel.findById({ _id: taskId });

		await HistoryModel.create({
			type: "update",
			task: newTask,
			userId,
		});

		res.status(200).send({ task: newTask, message: "updated" });
	} catch (error: any) {
		console.error(error);
		res.status(500).send({ error: error.message });
	}
};

export const deleteTask = async (req: any, res: any) => {
	try {
		const { taskId } = req.params;
		const { userId } = req.user;

		const task = await TaskModel.findById({ _id: taskId });

		if (task?.userId?.toString() !== userId) {
			return res.status(404).send(`Task not found for userId: ${userId}`);
		}

		await TaskModel.deleteOne({ _id: taskId });

		await HistoryModel.create({
			type: "delete",
			task: task,
			userId,
		});

		res.status(201).send({ message: "deleted" });
	} catch (error: any) {
		console.error(error);
		res.status(500).send({ error: error.message });
	}
};
