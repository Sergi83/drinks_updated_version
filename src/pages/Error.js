import React from "react";
import { Link } from "react-router-dom";


export default function Error() {
  return (
    <section>
      <div>
        <h1>No such page</h1>
        <Link to="/">
          Back to Home page
        </Link>
      </div>
    </section>
  );
}
