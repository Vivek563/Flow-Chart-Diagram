import React, { useState } from "react";
import { Node } from "react-flow-renderer";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const AddMemberForm = ({ onAdd }: { onAdd: (node: Node) => void }) => {
	const [name, setName] = useState("");
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!name.trim()) {
			toast.error("Please Enter Family Member Name");
			return;
		}
		const newNode: Node = {
			id: `${Date.now()}`,
			data: { label: name },
			position,
		};
		onAdd(newNode);
		setName("");
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-row items-center">
			<Input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Name"
				className="border p-2 m-2"
			/>
			<Button type="submit" className=" text-white p-2 w-[8rem] rounded">
				Add
			</Button>
		</form>
	);
};

export default AddMemberForm;
