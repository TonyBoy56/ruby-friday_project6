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
      getElements(response, convertTo);
    })();

    function getElements(response, convertTo) {
      if (!response && convertTo === null) {
        console.log("this ain't working, holmes")
        $("#output").text("There was an error in handling your request. Your currency type may not exist.");
      } else if (response && convertTo === "AED") {
        $("#output").text(`${convertTo}`+ " = "+`${response.conversion_rates.AED}`*userInput);
      } else if (response && convertTo === "BSD") {
        $("#output").text(`${convertTo}`+ " = "+`${response.conversion_rates.BSD}`*userInput);
      } else if (response && convertTo === "CAD") {
        $("#output").text(`${convertTo}`+ " = "+`${response.conversion_rates.CAD}`*userInput);
      } else if (response && convertTo === "CLP") {
        $("#output").text(`${convertTo}`+ " = "+`${response.conversion_rates.CLP}`*userInput);
      } else if (response && convertTo === "COP") {
        $("#output").text(`${convertTo}`+ " = "+`${response.conversion_rates.COP}`*userInput);
      }
    }
  }); 
});