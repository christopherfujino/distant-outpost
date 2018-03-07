import React from "react";

const Hud = ({gameInterface}) => {
  const obj = gameInterface.game(),
    rows = [];
  for (const i in obj) {
    if (!obj[i].visible) continue; // eslint-disable-line
    rows.push((
      <tr key={obj[i].name}>
        <td>
          {obj[i].name}
        </td>
        <td>
          {obj[i].value}
        </td>
      </tr>
    ));
  }
  return (
    <div className="col-md-4">
      <table className="table table-dark">
        <thead>
          <tr>
            <th>
              {"YOLO"}
            </th>
            <th>
              {"DAWG"}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default Hud;
