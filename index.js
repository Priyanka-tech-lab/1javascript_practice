/*1.basic*/ 
function btn1Click() {
    lbl1.innerHTML = txt1.value;
    
}

/*2.concat*/ 
function btn2Click() {

    lbl2.innerHTML = txt2.value + txt3.value;
    
}
/*3.sum*/ 
function btn3Click() {

    lbl3.innerHTML = parseInt(txt4.value) + parseInt(txt5.value);
    
}

/*4.gender*/ 
function btn4Click() {

        if (rdo1.checked == true) {
          lbl4.innerHTML = "You Have Selected Male.";
          document.getElementById("lbl4").style.color = "green";

        } else if (rdo2.checked == true) {
          lbl4.innerHTML = "You Have Selected Female.";
          document.getElementById("lbl4").style.color = "red";
          
        } else {
          lbl4.innerHTML = "Please Select Any Option";
          document.getElementById("lbl4").style.color = "orangered";
          
        }   
}

/*5.drop-down*/ 

function btn5Click() {
    lbl5.innerHTML = drop1.value;
  }


/*6.loop*/ 

function btn6Click() {
  lbl6.innerHTML = "";
  //   var i = 0;
  //   while (i <= 10) {
  //     lbl6.innerHTML += i + " , ";
  //     i++;
  //   }

  for (let i = 0; i < 10; i++) {
    lbl6.innerHTML += i + " , ";
  }
}
/*7.array*/ 
function btn7Click() {
    var a = [];
    // var a = new Array();
    a[0] = txt61.value;
    a[1] = txt62.value;
    a[2] = txt63.value;
    a[3] = txt64.value;
    a[4] = txt65.value;
  
    lbl7.innerHTML = "";
    for (let i = 0; i < a.length; i++) {
      lbl7.innerHTML += a[i] + ",";
    }
  }