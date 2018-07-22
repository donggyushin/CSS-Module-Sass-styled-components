import React, { Component } from "react";
import styles from "./App.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

console.log(styles);

class App extends Component {
  render() {
    const isBlue = true;
    return <div className={cx("box", { blue: isBlue })}>App</div>;
  }
}

export default App;
