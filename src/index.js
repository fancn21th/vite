import "./counter.js";
import styles from "./index.module.css";
import salmon from "./salmon.jpg?w=400&h=300&format=webp";
import sourceCode from "./counter.js?raw";

// <script src="./src/index.js"></script> 执行失败
// <script type="module" src="./src/index.js></script> 执行成功
const h2 = document.querySelector("h2");
h2.textContent = "hello vite";
h2.className = styles.title;

const image = document.createElement("img");
image.src = salmon;
image.className = styles.hero;

const pre = document.createElement("pre");
pre.textContent = sourceCode;

h2.parentElement.appendChild(image);
h2.parentElement.appendChild(pre);
