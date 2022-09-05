import { ArrayAsQueue } from "./queue";
//this implements a weighted undirected graph
export class Graph {
    adjacencyList: Object;

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: string) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1: string, vertex2: string, weight: number) {
        //check if there is an edge already
        let adjacencyListOfSourceVertex = this.adjacencyList[vertex1];
        if (adjacencyListOfSourceVertex) {
            for (const edge of adjacencyListOfSourceVertex) {
                if (edge.node === vertex2) return;
            }
        }
        //now add edge ...
        this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
    }

    removeVertex(vertex: string) {
        let adjancencyListOfRemovedVertex = this.adjacencyList[vertex];
        if (adjancencyListOfRemovedVertex) {
            for (const edge of adjancencyListOfRemovedVertex) {
                if (this.adjacencyList[edge.node]) {
                    this.adjacencyList[edge.node] = this.adjacencyList[edge.node].filter((x: any) => {
                        if (x.node === vertex) return false;
                        return true;
                    });
                }
            }
        }
        delete this.adjacencyList[vertex];
    }

    removeEdge(vertex1: string, vertex2: string) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((edge: any) => {
                if (edge.node === vertex2) return false;
                return true;
            });
        }
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((edge: any) => {
                if (edge.node === vertex1) return false;
                return true;
            });
        }
    }

    dfs(startVertex: string) {
        let result: string[] = [];
        let visitedSet: Set<string> = new Set();
        this.dfsHelper(startVertex, result, visitedSet);
        return result;
    }

    dfsHelper(vertex: string, result: string[], visitedSet: Set<string>) {
        visitedSet.add(vertex);
        result.push(vertex);
        if (this.adjacencyList[vertex]) {
            for (const edge of this.adjacencyList[vertex]) {
                if (!visitedSet.has(edge.node)) {
                    this.dfsHelper(edge.node, result, visitedSet);
                }
            }
        }
    }

    bfs(startVertex: string) {
        let result: string[] = [];
        let visitedSet: Set<string> = new Set();
        let queue = new ArrayAsQueue();
        visitedSet.add(startVertex);
        queue.enqueue(startVertex);
        while (!queue.isEmpty()) {
            let vertex = queue.dequeue();
            result.push(vertex!);
            if (this.adjacencyList[vertex!]) {
                for (const edge of this.adjacencyList[vertex!]) {
                    if (!visitedSet.has(edge.node)) {
                        visitedSet.add(edge.node);
                        queue.enqueue(edge.node);
                    }
                }
            }
        }
        return result;
    }
}
