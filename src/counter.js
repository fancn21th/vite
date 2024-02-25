import styles from "./counter.module.css";

const counter = document.createElement("div");
counter.className = styles.counter;

const count = document.createElement("span");
count.id = "counter";
count.textContent = "0";
const increment = document.createElement("button");
increment.textContent = "+";
const decrement = document.createElement("button");
decrement.textContent = "-";

increment.addEventListener("click", () => {
  import("./addcount").then(({ addCount }) => {
    addCount();
  });
});

counter.appendChild(count);
counter.appendChild(increment);
counter.appendChild(decrement);
document.querySelector("body").appendChild(counter);
