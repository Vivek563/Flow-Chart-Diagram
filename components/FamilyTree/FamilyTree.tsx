import React, { useCallback } from "react";
import ReactFlow, {
	addEdge,
	applyEdgeChanges,
	applyNodeChanges,
	Background,
	Connection,
	Controls,
	Edge,
	EdgeChange,
	MiniMap,
	Node,
	NodeChange,
} from "react-flow-renderer";

interface FamilyTreeProps {
	nodes: Node[];
	edges: Edge[];
	setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
	setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
}

const FamilyTree: React.FC<FamilyTreeProps> = ({ nodes, edges, setNodes, setEdges }) => {
	const onNodesChange = useCallback(
		(changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
		[setNodes]
	);
	const onEdgesChange = useCallback(
		(changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
		[setEdges]
	);
	const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

	return (
		<div className="h-full w-full">
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				fitView
			>
				<MiniMap />
				<Controls />
				<Background />
			</ReactFlow>
		</div>
	);
};

export default FamilyTree;
