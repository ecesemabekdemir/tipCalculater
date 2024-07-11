let payCustom = document.querySelector(".payCustom");
let numOfPeople = document.querySelector(".numOfPeople");
let btns = document.querySelectorAll(".select-tip button");
let tipAmout = document.querySelector(".personTip");
let totalTip = document.querySelector(".totalTip");
let reset = document.querySelector(".reset-btn");
let customForm = document.querySelector(".customForm");
let tipCustom=document.querySelector(".customTip");
let alert = document.querySelector(".alert-frame");


let tip = 0;
let total = 0;
let personTip = 0;
let totalPayTip=0;
let totalpeopletip = 0;

function handleTipClick() {
  tip += this.innerText;
  total = (payCustom.value * tip) / 100;
  totalPayTip = Number(payCustom.value) + total;
  totalpeopletip = totalPayTip / numOfPeople.value;
  totalTip.innerText = "$" + totalpeopletip;
  personTip = total / numOfPeople.value;
  tipAmout.innerText = "$" + personTip;

  if(totalTip.value !== " "){
    reset.style.background = "rgba(38, 194, 174, 1)";
  }
  if(payCustom.value === " " ){
    uyari.innerText = "boş bırakılamaz";
    payCustom.style.border = "2px solid rgba(225, 116, 87, 1)";
  }else{
    alert.innerText = " ";
    payCustom.style.border = "2px solid rgba(225, 116, 87, 1)";
  }
  if(numOfPeople.value === ""){
    alert.innerText = "boş bırakılamaz";
    numOfPeople.style.border = "2px solid rgba(225, 116, 87, 1)";
  }else{
    alert.innerText = "";
    numOfPeople.style.border = "transparent";
  }

  return tip=0;
}


for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleTipClick);
}

let tipCustomtotal = 0;
let personCustomtip = 0;

function handleCustomClick(e) {
  e.preventDefault();
  tipCustomtotal = (payCustom.value * tipCustom.value) / 100;
  totalPayTip = Number(payCustom.value) + totaltip;
  totalTip.innerText = "$" + totalPayTip;
  personCustomtip = tipCustomtotal / numOfPeople.value;
  tipAmout.innerText = "$" + personCustomtip;

  if(totalTip.value != ""){
    reset.style.background = "rgba(38, 194, 174, 1)";
  }
  if(payCustom.value != "" ){
    alert.innerText = "boş bırakılamaz";
    payCustom.style.border = "2px solid rgba(225, 116, 87, 1)";
  }else{
    alert.innerText = "";
    payCustom.style.border = "transparent";
  }
  if(numberPeople.value === ""){
    alert.innerText = "boş bırakılamaz";
    numOfPeople.style.border = "2px solid rgba(225, 116, 87, 1)";
  }else{
    alert.innerText = "";
    numOfPeople.style.border = "transparent";
  }

  return tip=0;
}
customForm.addEventListener("keyup", handleCustomClick);


function handleResetClick() {
  payCustom.value="";
  tipCustom.value="";
  totalTip.innerText="$0.00";
  numOfPeople.value="";
  tipAmout.innerText="$0.00";
  if(totalTip.value !== ""){
    reset.style.background = "rgba(13, 104, 109, 1)";
  } 
  if(totalTip.value !== ""){
    reset.style.background = "rgba(13, 104, 109, 1)";
  }
}

reset.addEventListener("click", handleResetClick);