import { configure, addDecorator, addParameters } from "@storybook/react";
// import { withInfo } from '@storybook/addon-info'
import React from "react";
// import "../src/styles/index.scss";
const wrapperStyle = {
  padding: "20px 40px",
};

const storyWrapper = (stroyFn) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
);
addDecorator(storyWrapper);
// addDecorator(withInfo)
addParameters({ info: { inline: true, header: false } });
const loaderFn = () => {
  const allExports = [require("../src/welcome.stories.js")];
  const req = require.context("../src/components", true, /\.stories\.js$/);
  req.keys().forEach((fname) => allExports.push(req(fname)));
  return allExports;
};

// automatically import all files ending in *.stories.js
configure(loaderFn, module);
