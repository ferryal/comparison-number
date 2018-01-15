function comparison() {
  var numbA = parseFloat(document.getElementById('input-one').value);
  var numbB = parseFloat(document.getElementById('input-two').value);

  if (numbA < numbB) {
    document.getElementById('result').innerHTML = numbA + ' is smaller than ' + numbB;
  } else if (numbA > numbB) {
    document.getElementById('result').innerHTML = numbA + ' is bigger than ' + numbB;
  } else {
    document.getElementById('result').innerHTML = numbA + ' is equals ' + numbB;
  }
}


// NOTE: function calculator kadar Kolesterol
function caclkolesterol() {
  var total = parseFloat(document.getElementById('input-total').value);
  var ldl = parseFloat(document.getElementById('input-ldl').value);
  var hdl = parseFloat(document.getElementById('input-hdl').value);

  if ((total < 200) && (ldl < 130) && (hdl >= 60)) {
    document.getElementById('result-calc').innerHTML = "Kategori Baik";
  } else if ((total >= 240) && (ldl >= 160) && (hdl < 40)) {
    document.getElementById('result-calc').innerHTML = "Kategori Berbaya disarankan kunjugi dokter terdekat";
  } else if ((total >= 200 || total <= 239) && (ldl >= 130 || ldl <= 159) && (hdl >= 40 || hdl <= 59)) {
    document.getElementById('result-calc').innerHTML = "Kategori sedang kurangi makanan berminyak";
  }
}

function rand() {
  var random = parseFloat(document.getElementById('input-one').value);
  document.getElementById('result').innerHTML = Math.floor(Math.random() * Math.floor(random));
  // NOTE: random 0 - 1
  // document.getElementById('result').innerHTML = Math.random(random);
}

document.getElementById('result-one').addEventListener('click', comparison);
document.getElementById('result-calcK').addEventListener('click', caclkolesterol);
document.getElementById('result-two').addEventListener('click', rand);