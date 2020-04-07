import * as React from "/web_modules/react.js";
export const Hello = (props) => React.createElement("h1", null,
    "Hello from ",
    props.compiler,
    " and ",
    props.framework,
    "!");
