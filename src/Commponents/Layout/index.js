import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaReact } from "react-icons/fa";

function index() {
  return (
    <div className="card">
      <Card style={{ width: "90vw", display: "flex", flexDirection: "row",justifyContent:"center"}}>
        <Card.Body
          style={{ display: "flex", flexDirection: "row", fontSize: "20px" }}
        >
          <Card.Title
            style={{
              flex: 5,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            {" "}
            <FaReact className="Icons-Css" style={{ fontSize: "50px" }} />
            Reactjs :
          </Card.Title>
          <Card.Text style={{ display: "flex", flexDirection: "row", flex: 8 }}>
            I have work static and dynamic website.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default index;
