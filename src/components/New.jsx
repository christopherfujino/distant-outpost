import {Link} from "react-router-dom";
import React from "react";

const New = () => (
  <main className="col-md-8 offset-md-2">
    <form>
      <div className="form-group">
        <label>
          {"new game suckahz!"}
        </label>
      </div>
      <Link
        className="btn btn-primary"
        to="/game"
      >
        {"start"}
      </Link>
    </form>
  </main>
);

export default New;
