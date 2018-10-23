const FormView = require("./views/form_view.js");
const PrimeChecker = require("./models/prime_number_checker.js");
const ResultView = require("./views/result_view.js");


document.addEventListener('DOMContentLoaded', () => {
  const formView = new FormView();
  formView.bindEvents();

  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
