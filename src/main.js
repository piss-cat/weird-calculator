function display(value) {
  document.getElementById("result").value += value;
}

function finalize() {
  const appropriation = document.getElementById("result").value;
  const evaluation = eval(appropriation);
  document.getElementById("result").value = evaluation;
}

function clearResult() {
  document.getElementById("result").value = "";
}
