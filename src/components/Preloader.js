import React, { Component } from "react";

export class Preloader extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="my-6" src="/assets/Spinner-2.gif" alt="Loading..." />
      </div>
    );
  }
}

export default Preloader;
