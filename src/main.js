import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
// eslint-disable-next-line
import { CurrencyExchange } from "./scripts.js" ;

$(document).ready(function () {
  $("#exchange").submit(function (event) {
    event.preventDefault();
    let userInput = parseInt($("#currentDollar").val());
    let convertTo = $("#convert").val();

    (async () => {
      let userExchange = new CurrencyExchange();
      let response = await userExchange.getLatest();
      console.log(response);
      getElements();
    })();

    function getElements(response, convertTo) {
      if (response === false && convertTo === null) {
        $("#output").text("There was an error in handling your request. Your currency type may not exist.");
      } 
    }
  }); 
});