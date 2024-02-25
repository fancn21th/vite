import { count } from "./addcount.module.css";

export const addCount = () => {
  document.querySelector("#counter").textContent =
    parseInt(document.querySelector("#counter").textContent) + 1;
  document.querySelector("#counter").className = count;
};
