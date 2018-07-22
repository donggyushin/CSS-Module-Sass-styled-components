import React, { Component } from "react";
import styles from "./App.scss";
import classNames from "classnames/bind";
import Button from "./components/Button";

const cx = classNames.bind(styles);

console.log(styles);

class App extends Component {
  render() {
    return (
      <div className={cx("App")}>
        <Button />
      </div>
    );
  }
}

export default App;
