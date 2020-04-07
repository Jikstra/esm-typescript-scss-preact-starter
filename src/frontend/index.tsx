import * as React from "/web_modules/react.js";
import * as ReactDOM from "/web_modules/react-dom.js";

import { Hello } from "./components/Hello.js";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);