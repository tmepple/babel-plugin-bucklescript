// Generated by BUCKLESCRIPT VERSION 1.8.1, PLEASE EDIT WITH CARE
"use strict";

var React = require("react");
var ReasonReact = require("reason-react/lib/js/src/reasonReact.js");

var component = ReasonReact.statelessComponent("Header");

function make(title, _) {
  var newrecord = component.slice();
  newrecord[/* render */ 9] = function() {
    return React.createElement("h1", undefined, title);
  };
  return newrecord;
}

exports.component = component;
exports.make = make;
/* component Not a pure module */