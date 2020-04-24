import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
// eslint-disable-next-line
import { CurrencyExchange } from "./scripts.js" ;

$(document).ready(function () {
  $("#exchange").submit(function (event) {
    event.preventDefault();

    (async () => {
      console.log("made it in the function");
      let userExchange = new CurrencyExchange();
      let response = await userExchange.getLatest();
      console.log(response);
    })();
  });
});