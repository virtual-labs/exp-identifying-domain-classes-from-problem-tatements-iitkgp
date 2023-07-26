/*Redeveloped
Lab: Software Engineering
Exp:Identifying Domain Classes from the Problem Statements
File Name: main.js
Author: Prakriti Dhang*/

/* Exercise number choice */
var ex = document.getElementById("selectex");
function subex() {
  if (ex.options[ex.selectedIndex].value == 1) {
    document.getElementById("exercise1").style.display = "block";
    document.getElementById("ex1").style.display = "block";
    document.getElementById("para1").style.display = "block";
    document.getElementById("dispres").style.display = "none";
    document.getElementById("show_result").style.display = "none";
    document.getElementById("dispviewbtn").disabled = false;
    document.getElementById("viewsol").disabled = true;

  }

  if (ex.options[ex.selectedIndex].value == 0) {
    document.getElementById("exercise1").style.display = "none";
    document.getElementById("ex1").style.display = "none";
    document.getElementById("para1").style.display = "none";
    document.getElementById("dispres").style.display = "none";
    document.getElementById("show_result").style.display = "none";
    document.getElementById("dispviewbtn").disabled = true;
    document.getElementById("viewsol").disabled = true;

  }
}
/* Submit button to directly view the solution*/

function viewsolutionb() { //submit button
  document.getElementById("dispres").style.display = "block";
  document.getElementById("show_result").style.display = "none";
  document.getElementById("viewsol").disabled = false;
  document.getElementById("dispviewbtn").disabled = true;
  window.scrollBy(0, 3500);
}

function solview() {  //view solution button
  document.getElementById("show_result").style.display = "block";
  document.getElementById("viewsol").disabled = true;
}

/********************************************* Table 1 ****************************************/
let newCheckBoxID, inpt1, newLi, newdiv;
/*let newCheckLabel = document.createElement('LABEL');
newCheckLabel.setAttribute('for', newCheckBoxID);
let labelTextNode = document.createTextNode(inpt1);
newCheckLabel.appendChild(labelTextNode);
newLi.appendChild(newCheckLabel);*/
var newulID;
function addbtnt1() {
  inpt1 = document.getElementById("inp1").value;
  var inpt1LowerCase = inpt1.toLowerCase().replace(/\./g, '');
  var inpt1UpperCase = inpt1.toUpperCase().replace(/\./g, '');
  // var inpt1LUCase1= inpt1.trim().toLowerCase().replace(/\./g, '');
  //var inpt1LUCase1 = inpt1.match(/[.a-zA-Z]/g, '');


  newLi = document.createElement("li");
  newLi.setAttribute("data-value", inpt1);
  newdiv = document.createElement("div");
  newdiv.setAttribute("class", "form-check");
  newCheckBoxID = 'checkbox_' + inpt1;
  newLi.appendChild(newdiv);

  let newCheckBox = document.createElement("INPUT");
  newCheckBox.setAttribute("type", "checkbox");
  newCheckBox.setAttribute("id", newCheckBoxID);
  newCheckBox.setAttribute("class", "form-check-input");
  newCheckBox.setAttribute("name", "categoryselect");
  newCheckBox.setAttribute("value", inpt1);
  newdiv.appendChild(newCheckBox);

  let newCheckLabel = document.createElement('LABEL');
  newCheckLabel.setAttribute('for', newCheckBoxID);
  newCheckLabel.setAttribute("class", "form-check-label");
  let labelTextNode = document.createTextNode(inpt1);
  newCheckLabel.appendChild(labelTextNode);
  newdiv.appendChild(newCheckLabel);

  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src", "./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowobj(this)");
  newIconbtn.setAttribute("style", "cursor:pointer;");
  newdiv.appendChild(newIconbtn);
  if (inpt1 == "") {
    alert("Please Enter Noun/Noun Phrase Before Click Add Button");
  }

  /*if (!inpt1.match(/^[a-zA-Z]+$/) )

    {
        alert("Give alphabates and whitespace only");
    }*/
  else {
    /*((inpt1 == "Mr. Bose")||(inpt1 == "Mr. Roy"))
    ||(inpt1 == "Cabs")||(inpt1 == "cabs")||(inpt1 == "cab")||(inpt1 == "boss")||(inpt1 == "agency")||(inpt1 == "drivers")||(inpt1 == "AC")||(inpt1 == "services")||(inpt1 == "Kolkata")||(inpt1 == "passenger")
    ||(inpt1 == "booking receipt")||(inpt1 == "home")||(inpt1 == "office")||(inpt1 == "place")||(inpt1 == "landmark")||(inpt1 == "Payments")||(inpt1 == "cheque")||(inpt1 == "branch")||(inpt1 == "At Your Rish Bank")||(inpt1 == "finances")
    ||(inpt1 == "business")||(inpt1 == "bank")||(inpt1 == "morning")||(inpt1 == "everyday")||(inpt1 == "son")||(inpt1 == "school")||(inpt1 == "persons")||(inpt1 == "locality")||(inpt1 == "plan")
    ||(inpt1 == "Drop to school")||(inpt1 == "neighbour")) */


    let isInserted = false;
    const myListn = document.getElementById("potobjlist");
    const listItemsn = myListn.getElementsByTagName("li");
    //const existingIndex = Array.from(myListn.children).findIndex(item => item.textContent.trim().toLowerCase() === inpt1);
    for (let i = 0; i < listItemsn.length; i++) {
      if ((listItemsn[i].textContent == inpt1) || (listItemsn[i].textContent == inpt1LowerCase) || (listItemsn[i].textContent == inpt1UpperCase) || (listItemsn[i].textContent.trim().toLowerCase().replace(/\./g, '') == inpt1.trim().toLowerCase().replace(/\./g, ''))) {
        isInserted = true;
        break;
      }
      /*  else if(regExp.test(inpt1)){
         isInserted = true;
         break;
       } */
    }
    if (isInserted) {
      alert("You have already entered a noun by the same name.");
      document.getElementById("inp1").value = "";
    } else {

      document.getElementById('potobjlist').appendChild(newLi);
      document.getElementById("inp1").value = "";

      /*********************** Adding input value in table 4 *************************/

      let newOptionID;
      newOptionID = 'newOption_' + inpt1;

      let newOption = document.createElement('option');
      let optionText = document.createTextNode(inpt1);
      // set option text
      newOption.appendChild(optionText);
      // and option value

      newOption.setAttribute("id", newOptionID);
      newOption.setAttribute('value', inpt1);
      let select = document.getElementById('selectobj');
      select.appendChild(newOption);
    }


  }

  //alert("Read the problem statement carefully and then insert noun or noun phrase 'exactly same' as in the problem statement");
  //}

}

/************************************ Function for Table 2 ********************************************/
function addbtnt2() {

  var category = document.getElementById("selectcat");
  var checkedvalue = document.querySelector('input[type=checkbox][name=categoryselect]:checked').value;
  //alert(checkedvalue);

  /*********************************************** Category-People*************************************************/
  if (((checkedvalue.toLowerCase().replace(/\./g, '') == "Mr. Roy".toLowerCase().replace(/\./g, '')) || (checkedvalue.toLowerCase() == "boss") || (checkedvalue.toLowerCase() == "son") || (checkedvalue.toLowerCase().replace(/\./g, '') == "Mr. Bose".toLowerCase().replace(/\./g, '')) || (checkedvalue.toLowerCase() == "drivers") || (checkedvalue.toLowerCase() == "passenger") || (checkedvalue.toLowerCase() == "persons") || (checkedvalue.toLowerCase() == "neighbour")) && (category.options[category.selectedIndex].value == 3)) {
    let pnewLi = document.createElement("li");
    let liTextNodep = document.createTextNode(checkedvalue);
    pnewLi.appendChild(liTextNodep);
    // this just makes sure a user cant enter in a blank value
    var newIconbtn = document.createElement("img");
    newIconbtn.setAttribute("src", "./images/remove.png");
    newIconbtn.setAttribute("onclick", "removerowobj(this)");
    newIconbtn.setAttribute("style", "cursor:pointer;");
    pnewLi.appendChild(newIconbtn);
    document.getElementById('peoplet3').appendChild(pnewLi);

    document.getElementById('ftbl2').reset();
    //document.getElementById('newCheckBoxID').disabled=false;


  }



  /*********************************************** Category-Place*************************************************/

  else if (((checkedvalue.toLowerCase() == "kolkata") || (checkedvalue.toLowerCase() == "home") || (checkedvalue.toLowerCase() == "office") || (checkedvalue.toLowerCase() == "place") || (checkedvalue.toLowerCase() == "landmark") || (checkedvalue.toLowerCase() == "branch") || (checkedvalue.toLowerCase() == "locality")) && (category.options[category.selectedIndex].value == 4)) {
    let plnewLi = document.createElement("li");
    let plliTextNode = document.createTextNode(checkedvalue);
    plnewLi.appendChild(plliTextNode);
    // this just makes sure a user cant enter in a blank value
    var newIconbtn = document.createElement("img");
    newIconbtn.setAttribute("src", "./images/remove.png");
    newIconbtn.setAttribute("onclick", "removerowobj(this)");
    newIconbtn.setAttribute("style", "cursor:pointer;");
    plnewLi.appendChild(newIconbtn);
    document.getElementById('placet3').appendChild(plnewLi);

    document.getElementById('ftbl2').reset();


  }

  /*********************************************** Category-Things*************************************************/
  else if (((checkedvalue.toLowerCase() == "cabs") || (checkedvalue.toLowerCase() == "AC".toLowerCase()) || (checkedvalue.toLowerCase() == "booking receipt") || (checkedvalue.toLowerCase() == "cheque")) && (category.options[category.selectedIndex].value == 6)) {
    let tnewLi = document.createElement("li");
    let tliTextNode = document.createTextNode(checkedvalue);
    tnewLi.appendChild(tliTextNode);
    // this just makes sure a user cant enter in a blank value
    var newIconbtn = document.createElement("img");
    newIconbtn.setAttribute("src", "./images/remove.png");
    newIconbtn.setAttribute("onclick", "removerowobj(this)");
    newIconbtn.setAttribute("style", "cursor:pointer;");
    tnewLi.appendChild(newIconbtn);
    document.getElementById('thingst3').appendChild(tnewLi);


    document.getElementById('ftbl2').reset();

  }

  /*********************************************** Category-Organization*************************************************/
  else if (((checkedvalue.toLowerCase() == "agency") || (checkedvalue.toLowerCase() == "At Your Risk Bank".toLowerCase()) || (checkedvalue.toLowerCase() == "bank") || (checkedvalue.toLowerCase() == "school")) && (category.options[category.selectedIndex].value == 2)) {
    let onewLi = document.createElement("li");
    let oliTextNode = document.createTextNode(checkedvalue);
    onewLi.appendChild(oliTextNode);
    // this just makes sure a user cant enter in a blank value
    var newIconbtn = document.createElement("img");
    newIconbtn.setAttribute("src", "./images/remove.png");
    newIconbtn.setAttribute("onclick", "removerowobj(this)");
    newIconbtn.setAttribute("style", "cursor:pointer;");
    onewLi.appendChild(newIconbtn);
    document.getElementById('orgt3').appendChild(onewLi);

    document.getElementById('ftbl2').reset();


  }


  /*********************************************** Category-Concept*************************************************/
  else if (((checkedvalue.toLowerCase() == "service") || (checkedvalue.toLowerCase() == "payments") || (checkedvalue.toLowerCase() == "finances") || (checkedvalue.toLowerCase() == "business") || (checkedvalue.toLowerCase() == "plan")) && (category.options[category.selectedIndex].value == 0)) {
    let cnewLi = document.createElement("li");
    let cliTextNode = document.createTextNode(checkedvalue);
    cnewLi.appendChild(cliTextNode);
    // this just makes sure a user cant enter in a blank value
    var newIconbtn = document.createElement("img");
    newIconbtn.setAttribute("src", "./images/remove.png");
    newIconbtn.setAttribute("onclick", "removerowobj(this)");
    newIconbtn.setAttribute("style", "cursor:pointer;");
    cnewLi.appendChild(newIconbtn);
    document.getElementById('conceptt3').appendChild(cnewLi);

    document.getElementById('ftbl2').reset();


  }


  /*********************************************** Category-Event*************************************************/
  else if (((checkedvalue.toLowerCase() == "morning") || (checkedvalue.toLowerCase() == "everyday") || (checkedvalue.toLowerCase() == "Drop to school".toLowerCase())) && (category.options[category.selectedIndex].value == 1)) {
    let enewLi = document.createElement("li");
    let eliTextNode = document.createTextNode(checkedvalue);
    enewLi.appendChild(eliTextNode);
    // this just makes sure a user cant enter in a blank value
    var newIconbtn = document.createElement("img");
    newIconbtn.setAttribute("src", "./images/remove.png");
    newIconbtn.setAttribute("onclick", "removerowobj(this)");
    newIconbtn.setAttribute("style", "cursor:pointer;");
    enewLi.appendChild(newIconbtn);
    document.getElementById('eventt3').appendChild(enewLi);

    document.getElementById('ftbl2').reset();

  }
  else {
    alert("Wrong Category! Please select correct category for " + checkedvalue);
  }

  /*********************************************** Category-Redundant*************************************************/


}



/********************************************************** Function for Table 4 *****************************************************************/
var arrobj = [];
var dobj;
function addbtnt4() {
  var arrayt4 = [];
  var objsel = document.getElementById("selectobj");
  dobj = objsel.options[objsel.selectedIndex].value;
  // alert(dobj);
  var checkedvaluet4 = document.querySelectorAll('input[type=checkbox][name=attriselect]:checked');
  //alert(checkedvaluet4);
  // var checkboxt4;
  for (var i = 0; i < checkedvaluet4.length; i++) {
    arrayt4.push(checkedvaluet4[i].value)
  }

  arrobj.push(dobj);
  /********************* Adding to table 6**********************/

  if (checkedvaluet4.length === 0) {

    alert("You have to select at least one attribute from the list.");
  }
  else {

    var t6obj = "t6obj6" + dobj;
    var t6attr = "t6attr" + dobj;
    var ntr = document.createElement("tr");
    ntr.setAttribute("id", dobj);
    document.getElementById('tbodytbt6').appendChild(ntr);

    var td1 = document.createElement("td");
    td1.setAttribute("id", t6obj);
    var td2 = document.createElement("td");
    td2.setAttribute("id", t6attr);
    var td1val = document.createTextNode(dobj);
    //var td2val=document.createTextNode(checkedvaluet4);

   


    ntr.appendChild(td1);
    ntr.appendChild(td2);
    td1.appendChild(td1val);
    newulID = "attri_" + dobj;
    var ult6 = document.createElement("ul");
    ult6.setAttribute("id", newulID);
    //var lit8= document.createElement("li");
    var lit6;
    td2.appendChild(ult6);
    //ult8.appendChild(lit8);
    //document.getElementById('tbodytbt6').appendChild(ntr);
    arrayt4.forEach((item) => {
      var newIconbtn = document.createElement("img");
      newIconbtn.setAttribute("src", "./images/remove.png");
      newIconbtn.setAttribute("onclick", "removerowobj(this)");
      newIconbtn.setAttribute("style", "cursor:pointer;");
       lit6= document.createElement("li");
      lit6.innerText = item;
      lit6.appendChild(newIconbtn);
      ult6.appendChild(lit6);
    })

    document.getElementById("t6attr" + dobj).appendChild(ult6);
    //document.getElementById("t6obj" + dobj).appendChild(td1);
    document.getElementById('tbodytbt6').appendChild(ntr);
    
    /******************* Merge ******************/
    const lists = document.querySelectorAll('ul#'+"attri_"+ dobj);
    const firstList = lists[0];

    lists.forEach((list, index) => {
      if (index !== 0) {
        const listItems = list.getElementsByTagName('li');
        for (let item of listItems) {
          firstList.appendChild(item.cloneNode(true));
        }
        list.parentNode.removeChild(list); 
      }
    });
   
/**************************************** Removes duplicate class and rows *********************************************/
 function removeDuplicateCellValuesAndRows6() {
  var table = document.getElementById('tbl6');
  var rows = table.rows;
  var uniqueValues = new Set();
  var duplicateRows = [];

  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    var cells = row.cells;
    var duplicateRow = true;

    for (var j = 0; j < cells.length; j++) {
      var cell = cells[j];
      var value = cell.textContent;

      if (uniqueValues.has(value)) {
        duplicateRow = true;
        break;
      } else {
        duplicateRow = false;
        uniqueValues.add(value);
      }
    }

    if (duplicateRow) {
      duplicateRows.push(row);
    }
  }

  for (var i = 0; i < duplicateRows.length; i++) {
    var row = duplicateRows[i];
    table.deleteRow(row.rowIndex);
  }
}

removeDuplicateCellValuesAndRows6();
 

    document.getElementById("ftbl4").reset();
  }
}




/********************************************************** Function for Table 5 *****************************************************************/




function addbtnt5() {
  let t4newCheckBoxID, inpt2, t4newLi, t4newdiv;
  let t7newCheckBoxID, t7newLi, t7newdiv;
  /*let attrinewCheckLabel = document.createElement('LABEL');
  attrinewCheckLabel.setAttribute('for', newCheckBoxID);
  let attrilabelTextNode = document.createTextNode(inpt2);
  attrinewCheckLabel.appendChild(attrilabelTextNode);*/
  // newLi.appendChild(attrinewCheckLabel);

  inpt2 = document.getElementById("inp2").value;

  t4newLi = document.createElement("li");
  t4newdiv = document.createElement("div");
  t4newdiv.setAttribute("class", "form-check");
  t4newCheckBoxID = 'checkbox_' + inpt2;
  t4newLi.appendChild(t4newdiv);
  let t4newCheckBox = document.createElement("INPUT");
  t4newCheckBox.setAttribute("type", "checkbox");
  t4newCheckBox.setAttribute("id", t4newCheckBoxID);
  t4newCheckBox.setAttribute("class", "form-check-input");
  t4newCheckBox.setAttribute("name", "attriselect");
  t4newCheckBox.setAttribute("value", inpt2);
  t4newdiv.appendChild(t4newCheckBox);



  let t4newCheckLabel = document.createElement('LABEL');
  t4newCheckLabel.setAttribute('for', t4newCheckBoxID);
  t4newCheckLabel.setAttribute("class", "form-check-label");
  let t4labelTextNode = document.createTextNode(inpt2);
  t4newCheckLabel.appendChild(t4labelTextNode);
  t4newdiv.appendChild(t4newCheckLabel);

  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src", "./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowobj(this)");
  newIconbtn.setAttribute("style", "cursor:pointer;");
  t4newdiv.appendChild(newIconbtn);

  /**** Print  attributes in table 7*****/

  t7newLi = document.createElement("li");
  t7newdiv = document.createElement("div");
  t7newdiv.setAttribute("class", "form-check");
  t7newCheckBoxID = 'checkbox_' + inpt2;
  t7newLi.appendChild(t7newdiv);
  let t7newCheckBox = document.createElement("INPUT");
  t7newCheckBox.setAttribute("type", "checkbox");
  t7newCheckBox.setAttribute("id", t7newCheckBoxID);
  t7newCheckBox.setAttribute("class", "form-check-input");
  t7newCheckBox.setAttribute("name", "attricheck");
  t7newCheckBox.setAttribute("value", inpt2);
  t7newdiv.appendChild(t7newCheckBox);

  let t7newCheckLabel = document.createElement('LABEL');
  t7newCheckLabel.setAttribute('for', t7newCheckBoxID);
  t7newCheckLabel.setAttribute("class", "form-check-label");
  let t7labelTextNode = document.createTextNode(inpt2);
  t7newCheckLabel.appendChild(t7labelTextNode);
  t7newdiv.appendChild(t7newCheckLabel);

  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src", "./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowobj(this)");
  newIconbtn.setAttribute("style", "cursor:pointer;");
  t7newdiv.appendChild(newIconbtn);

  if (inpt2 == "") {
    alert("Please enter possibile attribute before clicking Add button");
  } else {

    document.getElementById('addattrit4').appendChild(t4newLi);
    document.getElementById('t7attri').appendChild(t7newLi);

    document.getElementById("inp2").value = "";
  }
}

/********************************************************** Function for Table 7*****************************************************************/

var inpt3;
var arrclass = [];
function addbtnt7() {
  inpt3 = document.getElementById("inp3").value;



  var array = [];
  //var myString = array.toString().replaceAll(",", "<br>");
  var checkedvaluet7 = document.querySelectorAll('input[type="checkbox"]:checked');
  for (var i = 0; i < checkedvaluet7.length; i++) {
    array.push(checkedvaluet7[i].value)
  }
  arrclass.push(inpt3);
  //alert(array);

  // alert(checkt7value);

 




  if (inpt3 == "") {
    alert("Input field cannot be blank. Give a valid classname.")
  }
  else if (checkedvaluet7.length === 0) {

    alert("You have to select at least one attribute from the list.");
  }

  else {
    var t8attid = "t8att8" + inpt3;
    var t8class = "t8class" + inpt3;
    var t8tr = document.createElement('tr');
    t8tr.setAttribute("id", "t8class1");
    document.getElementById('tbodytbl8').appendChild(t8tr);
    var td1t8 = document.createElement('td');
    td1t8.setAttribute("id", t8class);
    var td2t8 = document.createElement("td");
    td2t8.setAttribute("id", t8attid);
    var tdval1 = document.createTextNode(inpt3);

    t8tr.appendChild(td1t8);
    t8tr.appendChild(td2t8);

    td1t8.appendChild(tdval1);


    var ult8 = document.createElement("ul");
    var ulid = "t8att" + inpt3;
    ult8.setAttribute("id", ulid);
    var lit8;
    td2t8.appendChild(ult8);

    array.forEach((item) => {
      var newIconbtn = document.createElement("img");
      newIconbtn.setAttribute("src", "./images/remove.png");
      newIconbtn.setAttribute("onclick", "removerowobj(this)");
      newIconbtn.setAttribute("style", "cursor:pointer;");
      lit8 = document.createElement("li");
      lit8.innerText = item;
      lit8.appendChild(newIconbtn);
      ult8.appendChild(lit8);
    })
    document.getElementById("t8att8" + inpt3).appendChild(ult8);
    //document.getElementById("t8class"+inpt3).appendChild(tdval1);
    document.getElementById('tbodytbl8').appendChild(t8tr);

    /******************* Merge ******************/
    const lists = document.querySelectorAll('ul#'+"t8att" + inpt3);
    const firstList = lists[0];

    lists.forEach((list, index) => {
      if (index !== 0) {
        const listItems = list.getElementsByTagName('li');
        for (let item of listItems) {
          firstList.appendChild(item.cloneNode(true));
        }
        list.parentNode.removeChild(list); 
      }
    });
    /**************************************** Removes duplicate class and rows *********************************************/
    function removeDuplicateCellValuesAndRows() {
      var table = document.getElementById('tbl8');
      var rows = table.rows;
      var uniqueValues = new Set();
      var duplicateRows = [];

      for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var cells = row.cells;
        var duplicateRow = true;

        for (var j = 0; j < cells.length; j++) {
          var cell = cells[j];
          var value = cell.textContent;

          if (uniqueValues.has(value)) {
            duplicateRow = true;
            break;
          } else {
            duplicateRow = false;
            uniqueValues.add(value);
          }
        }

        if (duplicateRow) {
          duplicateRows.push(row);
        }
      }

      for (var i = 0; i < duplicateRows.length; i++) {
        var row = duplicateRows[i];
        table.deleteRow(row.rowIndex);
      }
    }

    removeDuplicateCellValuesAndRows();




    document.getElementById("ftbl7").reset();


    /******* Adding Classes************/
    var t10tr = document.createElement('tr');

    var td1t10 = document.createElement('td');

    var tdval10 = document.createTextNode(inpt3);

    t10tr.appendChild(td1t10);
    td1t10.appendChild(tdval10);
    document.getElementById('tbody10class').appendChild(t10tr);


    //}

  }




}














function removerowobj(btndel) {
  if (typeof (btndel) == "object") {

    var listItemValue = $(btndel).closest("li").data("value");
    //console.log(listItemValue);
    $(btndel).closest("li").remove();
    $("#selectobj").find('option[value="' + listItemValue + '"]').remove();



    var index = arrobj.indexOf(listItemValue);
    if (index !== -1) {
      arrobj.splice(index, 1);
    }
    console.log(arrobj);

  } else {
    return false;
  }
}



/************************************************ Function for Table 9 **************************************************************/
function addbtnt9() {

  var inpt4 = document.getElementById("inp4").value;

  var t9newLi = document.createElement("li");
  var t9newdiv = document.createElement("div");
  t9newdiv.setAttribute("class", "form-check");
  var t9newCheckBoxID = 'checkbox_' + inpt4;
  t9newLi.appendChild(t9newdiv);
  let t9newCheckBox = document.createElement("INPUT");
  t9newCheckBox.setAttribute("type", "checkbox");
  t9newCheckBox.setAttribute("id", t9newCheckBoxID);
  t9newCheckBox.setAttribute("class", "form-check-input");
  t9newCheckBox.setAttribute("name", "attriselect");
  t9newCheckBox.setAttribute("value", inpt4);
  t9newdiv.appendChild(t9newCheckBox);



  let t9newCheckLabel = document.createElement('LABEL');
  t9newCheckLabel.setAttribute('for', t9newCheckBoxID);
  t9newCheckLabel.setAttribute("class", "form-check-label");
  let t9labelTextNode = document.createTextNode(inpt4);
  t9newCheckLabel.appendChild(t9labelTextNode);
  t9newdiv.appendChild(t9newCheckLabel);

  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src", "./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowobj(this)");
  newIconbtn.setAttribute("style", "cursor:pointer;");
  t9newdiv.appendChild(newIconbtn);

  if (inpt4 == "") {
    alert("Please Enter Relevant Class Before Clicking Add Button");
  } else {
    var tr8 = document.createElement('tr');
    tr8.setAttribute("id", "t8class8");
    document.getElementById('tbodytbl8').appendChild(tr8);
    var td81 = document.createElement('td');
    td81.appendChild(t9newLi);
    tr8.appendChild(td81);
    //document.getElementById('addattrit4').appendChild(t9newLi);
    document.getElementById('t8class8').appendChild(tr8);

    document.getElementById("inp4").value = "";
  }

}

/********************************************************** Function for Top Level Classes*****************************************************************/
var tabrowindex = 0;
var rows, x;
var arr = [];
var dclass, dobjects, dobjsel;
function btntlc() {
  document.getElementById("table10").style.display = "block";
  document.getElementById("ftbl10").style.display = "block";

  
}
