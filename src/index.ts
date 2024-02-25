import "./counter.js";
import styles from "./index.module.css";

// <script src="./src/index.js"></script> 执行失败
// <script type="module" src="./src/index.js></script> 执行成功

const h2 = document.querySelector("h2") as HTMLHeadingElement;
h2.textContent = "hello vite";
h2.className = styles.title;
