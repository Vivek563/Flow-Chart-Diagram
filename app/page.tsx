"use client";

import AddMemberForm from "@/components/AddMemberForm/AddMemberForm";
import FamilyTree from "@/components/FamilyTree/FamilyTree";
import { NextPage } from "next";
import { useState } from "react";
import { Edge, Node } from "react-flow-renderer";

const Home: NextPage = () => {
	const [nodes, setNodes] = useState<Node[]>([]);
	const [edges, setEdges] = useState<Edge[]>([]);

	const handleAddNode = (node: Node) => {
		setNodes((nds) => [...nds, node]);
	};

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-[3rem] font-extrabold">Create Your Flow Chart Diagram</h1>
			<div className="">
				<AddMemberForm onAdd={handleAddNode} />
			</div>
			<div className="h-[80vh] w-full">
				<FamilyTree nodes={nodes} edges={edges} setNodes={setNodes} setEdges={setEdges} />
			</div>
		</div>
	);
};

export default Home;
