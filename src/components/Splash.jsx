import {Link} from "react-router-dom";
import React from "react";

const Splash = () => (
  <main className="col-md-8 offset-md-2">
    <div className="jumbotron">
      <h1>
        {"the future begins today"}
      </h1>
      <p>
        <Link
          className="btn btn-primary"
          to="/new"
        >
          {"start a journey..."}
        </Link>
      </p>
    </div>
  </main>
);

export default Splash;
