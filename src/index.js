"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var Home_1 = require("./components/Home");
ReactDOM.render(React.createElement(Home_1.Home, {name: "Colin", age: 34}), document.getElementById("app"));
