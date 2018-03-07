import Node from "./Node";
import React from "react";
import techTree from "../lib/techTree.json";

const buildTree = tree => (
    <Node name={tree.name}>
      { tree.children.map(node => buildTree(node)) }
    </Node>
  ),
  Tree = function Tree () { /* eslint-disable-line */
    return (
      <main className="col-md-8 offset-md-2">
        <h1>
          {"Tree!"}
        </h1>
        { buildTree(techTree) }
      </main>
    );
  };

export default Tree;
