import "./counter.js";
import styles from "./index.module.css";
import salmon from "./salmon.jpg";

// <script src="./src/index.js"></script> 执行失败
// <script type="module" src="./src/index.js></script> 执行成功
const h2 = document.querySelector("h2");
h2.textContent = "hello vite";
h2.className = styles.title;

const image = document.createElement("img");
image.src = salmon;
image.className = styles.hero;

h2.parentElement.appendChild(image);
