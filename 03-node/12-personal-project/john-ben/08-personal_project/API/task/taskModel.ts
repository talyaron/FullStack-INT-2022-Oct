import mongoose, { Schema, Types } from "mongoose";
//schema

export interface ITask {
	// public uid: string = uuid();
	name: string;
	status: `in progress` | `finished`;
	userId: Types.ObjectId;
}

export const TaskSchema = new Schema<ITask>(
	{
		name: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			enum: [`in progress`, `finished`],
			default: "in progress",
		},
		userId: {
			type: Schema.Types.ObjectId,
			ref: "users",
			required: true,
		},
	},
	{ timestamps: true }
);

const TaskModel = mongoose.model("tasks", TaskSchema);

export default TaskModel;
