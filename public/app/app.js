import { handleStatus } from "./utils/promise-helper.js";

// ainda estamos usando o endereço errado
document.querySelector("#myButton").addEventListener("click", () => {
  fetch("http://localhost:3000/notas")
    .then(handleStatus)
    .then((data) => console.log(data))
    .catch(console.log);
});
