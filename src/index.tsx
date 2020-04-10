import { h, Component, render } from "preact";

import Hello from './components/Hello'

import { Socket } from 'socket.io-client'

render(<Hello/>, document.getElementById("app"));

console.log("test")


console.log(Socket)