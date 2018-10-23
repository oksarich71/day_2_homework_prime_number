const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (){

};
ResultView.prototype.displayResult = function(result) {
  const resultElement = document.querySelector("#result");
  var message;
    if(result = true) {
      message = "Yes it is prime"
    }
    else {
  message = "No its not"
return message;
}
resultElement.textContent = `${message}`;
};

ResultView.prototype.bindEvents = function () {
PubSub.subscribe('PrimeNumber:result-defined', (event) => {
  const message = event.detail;
  this.displayResult(message);
  console.log("result calculated callback:");
});
};

module.exports = ResultView;
