import React, { Component } from "react";
import Navigation from "./Navigation";

const divStyle = {
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",
  backgroundImage: "url(/eng.png)",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};
class HomePageEngineer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: sessionStorage.getItem("id")
    };
  }

  render() {
    return (
      <>
        <Navigation />
        <div style={divStyle}></div>
      </>
    );
  }
}

export default HomePageEngineer;
