import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  render() {
    const characters = [
      {
        name: "Chinmay",
        job: "Project Manager"
      },
      {
        name: "Adham",
        job: "Project Manager"
      },
      {
        name: "Afzal",
        job: "Mentor"
      },
      {
        name: "Mayank",
        job: "Full-Stack Devloper"
      },
      {
        name: "Nakul",
        job: "Full-Stack Developer"
      },
      {
        name: "Shahid",
        job: "Front-end Developer"
      }
    ];

    return (
      <div className="container">
        <Table characterData={characters} />
      </div>
    );
  }
}

export default App;
