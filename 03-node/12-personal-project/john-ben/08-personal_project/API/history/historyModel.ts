import mongoose, { Schema, Types } from "mongoose";
import { ITask, TaskSchema } from "../task/taskModel";

interface IHistory {
	type: "add" | "update" | "delete";
	task: ITask;
	userId: Types.ObjectId;
}

const HistorySchema = new Schema<IHistory>(
	{
		type: {
			type: String,
			enum: ["add", "update", "delete"],
			required: true,
		},
		task: TaskSchema,
		userId: {
			type: Schema.Types.ObjectId,
			ref: "users",
			required: true,
		},
	},
	{ timestamps: true }
);

const HistoryModel = mongoose.model("history", HistorySchema);

export default HistoryModel;
