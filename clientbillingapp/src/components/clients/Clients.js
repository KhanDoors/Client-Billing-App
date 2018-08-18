import React, { Component } from "react";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "34534",
        firstName: "Jim",
        lastName: "Morrison",
        email: "jm@gmail.com",
        phone: "555-555-5555",
        balance: "450"
      }
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-users" />
                Clients
              </h2>
            </div>
            <div className="col-md-6" />
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Clients;
