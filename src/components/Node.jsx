import React from "react";

const Node = props => {
  const {name, children} = props;
  return (
    <div>
      <div>
        { name }
      </div>
      {
        (children.length > 0) && (
          <div className="list-group">
            { children.map(node => (
              <button
                className="list-group-item list-group-item-action"
                key={node.name}
                type="button"
              >
                {node}
              </button>
            )) }
          </div>
        )
      }
    </div>
  );
};

export default Node;
