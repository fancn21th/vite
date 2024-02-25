import "./counter.js";
import styles from "./index.module.css";

// <script src="./src/index.js"></script> 执行失败
// <script type="module" src="./src/index.js></script> 执行成功
document.querySelector("h2").textContent = "hello vite";
document.querySelector("h2").className = styles.title;
