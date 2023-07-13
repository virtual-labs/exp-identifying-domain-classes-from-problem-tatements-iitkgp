function playsimulation(){
    document.getElementById("playbtn").disabled=true;
    document.getElementById("p1").style.display="block";

    setTimeout(list1, 1500);
    function list1(){
        document.getElementById("l1").style.display="block";
        setTimeout(list2, 1500);
       
    }
    
    function list2(){
        document.getElementById("l2").style.display="block";
        setTimeout(list3, 1500);
       
    }
    
    function list3(){
        document.getElementById("l3").style.display="block";
        setTimeout(list4, 1500);
       
    }
    
    function list4(){
        document.getElementById("l4").style.display="block";
        document.getElementById("nextbtn1").disabled=false;
      
    }
    
}

function gonextp2(){
    document.getElementById("step1").style.display="block";
    document.getElementById("head1").innerHTML="1. Identify the nouns and noum phrases";
    document.getElementById("p2").style.display="block";
    document.getElementById("p1").style.display="none";
   // document.getElementById("backbtn2").disabled=true;
    document.getElementById("nextbtn2").disabled=true;
    const highlightxt = document.getElementById('m1');
    highlightxt.style.webkitAnimationPlayState = "running";
    setTimeout(mark2, 3000);

    function mark2(){

        const highlightxt = document.getElementById('m2');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark3, 3000);
    }
    function mark3(){

        const highlightxt = document.getElementById('m3');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark4, 3000);
    }
    function mark4(){

        const highlightxt = document.getElementById('m4');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark5, 3000);
    }
    function mark5(){

        const highlightxt = document.getElementById('m5');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark6, 3000);
    }
    function mark6(){

        const highlightxt = document.getElementById('m6');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark7, 3000);
    }

    function mark7(){

        const highlightxt = document.getElementById('m7');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark8, 3000);
    }

    function mark8(){

        const highlightxt = document.getElementById('m8');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark9, 3000);
    }

    function mark9(){

        const highlightxt = document.getElementById('m9');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark10, 3000);
    }

    function mark10(){

        const highlightxt = document.getElementById('m10');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark11, 3000);
    }

    function mark11(){

        const highlightxt = document.getElementById('m11');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark12, 3000);
    }

    function mark12(){

        const highlightxt = document.getElementById('m12');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark13, 3000);
    }

    function mark13(){

        const highlightxt = document.getElementById('m13');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(mark14, 3000);
    }

    function mark14(){

        const highlightxt = document.getElementById('m14');
        highlightxt.style.webkitAnimationPlayState = "running";
        setTimeout(nextp3, 3000);
    }

    

    function nextp3(){
        //document.getElementById("backbtn2").disabled=false;
        document.getElementById("nextbtn2").disabled=false;
    }
    
}



function gonextp3(){
    document.getElementById("p2").style.display="none";
    document.getElementById("step2").style.display="block";
    document.getElementById("p3").style.display="block";
    document.getElementById("p31").style.display="block";
    document.getElementById("head1").innerHTML="2. Categorize the above identified objects";
    //document.getElementById("backbtn3").disabled=true;
    document.getElementById("nextbtn3").disabled=true;
   // document.getElementById("backbtn3").style.display="none";
    document.getElementById("nextbtn3").style.display="none";
    document.getElementById("nextbtn32").disabled=true;
    setTimeout(shwli1, 1000);

    function shwli1(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li1").style.display="block";
       
        setTimeout(shwli2, 1000);
    }

    function shwli2(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li2").style.display="block";
       
        setTimeout(shwli3, 1000);
    }
    function shwli3(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li3").style.display="block";
       
        setTimeout(shwli4, 1000);
    }

    function shwli4(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li4").style.display="block";
       
        setTimeout(shwli5, 1000);
    }

    function shwli5(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li5").style.display="block";
       
        setTimeout(shwli6, 1000);
    }

    function shwli6(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li6").style.display="block";
       
        setTimeout(shwli7, 1000);
    }


    function shwli7(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li7").style.display="block";
       
        setTimeout(shwli8, 1000);
    }

    function shwli8(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li8").style.display="block";
       
        setTimeout(shwli9, 1000);
    }


    function shwli9(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li9").style.display="block";
       
        setTimeout(shwli10, 1000);
    }



    function shwli10(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li10").style.display="block";
       
        setTimeout(shwli11, 1000);
    }



    function shwli11(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li11").style.display="block";
       
        setTimeout(shwli12, 1000);
    }


    function shwli12(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li12").style.display="block";
       
        setTimeout(shwli13, 1000);
    }
    function shwli13(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li13").style.display="block";
        document.getElementById("nextbtn32").disabled=false;
        
       
        
    }


}

function gonextp32(){
   // document.getElementById("backbtn3").style.display="block";
    document.getElementById("nextbtn3").style.display="block";
   // document.getElementById("backbtn3").disabled=true;
    document.getElementById("nextbtn3").disabled=true;
    document.getElementById("nextbtn32").disabled=true;
    document.getElementById("nextbtn32").style.display="none";
   
    setTimeout(shwpeople, 100);

    function shwpeople(){
        document.getElementById("p31").style.display="none";
        document.getElementById("p32").style.display="block";
        document.getElementById("people").style.display="block";
        setTimeout(shwthngs, 2000);
    }

    function shwthngs(){
        document.getElementById("things").style.display="block";
        setTimeout(shworg, 2000);
    }
    function shworg(){
        document.getElementById("org").style.display="block";
        setTimeout(shwevnt, 2000);
    }

    function shwevnt(){
        document.getElementById("evnt").style.display="block";
        setTimeout(shwconcpt, 2000);
    }
    function shwconcpt(){
        document.getElementById("concpt").style.display="block";
        setTimeout(shwobj, 500);
        
    }

    function shwobj(){
        document.getElementById("identdobj").style.display="block";
      //  document.getElementById("backbtn3").disabled=false;
        document.getElementById("nextbtn3").disabled=false;
    }


}

function gonextp4(){
    document.getElementById("step3").style.display="block";
    document.getElementById("head1").innerHTML="3. Grouping of objects based on common attributes";
    document.getElementById("p4").style.display="block";
    document.getElementById("p41").style.display="block";
    document.getElementById("p3").style.display="none";
    document.getElementById("p31").style.display="none";
    document.getElementById("p32").style.display="none";
    //document.getElementById("backbtn4").disabled=true;
    document.getElementById("nextbtn4").disabled=true;
}
    
    function gonextp42(){
        document.getElementById("p41").style.display="none";
        document.getElementById("p42").style.display="block";
    
    }

    function gonextp43(){
        document.getElementById("p42").style.display="none";
        document.getElementById("p43").style.display="block";
    
    }
    function gonextp44(){
        document.getElementById("p43").style.display="none";
        document.getElementById("p44").style.display="block";
   
    }
    function gonextp45(){
        document.getElementById("p44").style.display="none";
        document.getElementById("p45").style.display="block";
    setTimeout(shwdisblbtn, 1000);
    

    function shwdisblbtn(){
   // document.getElementById("backbtn4").disabled=false;
    document.getElementById("nextbtn4").disabled=false;
    }
    }




$('.show').click(function() {
    $('ol').toggleClass('show');
  })


  function gonextp5(){
    document.getElementById("head1").innerHTML="4. Generating classes from the groups";
    document.getElementById("step4").style.display="block";
    document.getElementById("p4").style.display="none";
    document.getElementById("p45").style.display="none";
    document.getElementById("p5").style.display="block";
    setTimeout(shwtplvl, 4500);


    function shwtplvl(){
    document.getElementById("toplevel").style.display="block";
    setTimeout(shwnote, 2000);
    }
    function shwnote(){
    document.getElementById("note").style.display="block";
    document.getElementById("replaybtn").style.display="block";
    document.getElementById("replaybtn").disabled=false
    }
  }


 /* function gobackp1(){
    document.getElementById("p1").style.display="block";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("head1").innerHTML="Identifying Domain Classes from the Problem Statements";
  }

  function gobackp2(){
    document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.display="block";
    document.getElementById("backbtn2").disabled=false;
    document.getElementById("nextbtn2").disabled=false;
    document.getElementById("p3").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("head1").innerHTML="Identify the nouns and noum phrases";
  }

  function gobackp3(){
    document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="block";
    document.getElementById("p31").style.display="block";
    document.getElementById("li2").style.display="none";
    document.getElementById("li3").style.display="none";
    document.getElementById("li4").style.display="none";
    document.getElementById("li5").style.display="none";
    document.getElementById("li6").style.display="none";
    document.getElementById("li7").style.display="none";
    document.getElementById("li8").style.display="none";
    document.getElementById("li9").style.display="none";
    document.getElementById("li10").style.display="none";
    document.getElementById("li11").style.display="none";
    document.getElementById("li12").style.display="none";
    document.getElementById("li13").style.display="none";
    document.getElementById("nextbtn32").disabled=true;
    setTimeout(shwli1, 1000);

    function shwli1(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li1").style.display="block";
       
        setTimeout(shwli2, 1000);
    }

    function shwli2(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li2").style.display="block";
       
        setTimeout(shwli3, 1000);
    }
    function shwli3(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li3").style.display="block";
       
        setTimeout(shwli4, 1000);
    }

    function shwli4(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li4").style.display="block";
       
        setTimeout(shwli5, 1000);
    }

    function shwli5(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li5").style.display="block";
       
        setTimeout(shwli6, 1000);
    }

    function shwli6(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li6").style.display="block";
       
        setTimeout(shwli7, 1000);
    }


    function shwli7(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li7").style.display="block";
       
        setTimeout(shwli8, 1000);
    }

    function shwli8(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li8").style.display="block";
       
        setTimeout(shwli9, 1000);
    }


    function shwli9(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li9").style.display="block";
       
        setTimeout(shwli10, 1000);
    }



    function shwli10(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li10").style.display="block";
       
        setTimeout(shwli11, 1000);
    }



    function shwli11(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li11").style.display="block";
       
        setTimeout(shwli12, 1000);
    }


    function shwli12(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li12").style.display="block";
       
        setTimeout(shwli13, 1000);
    }
    function shwli13(){
        document.getElementById("p31").style.display="block";
        document.getElementById("li13").style.display="block";
        document.getElementById("nextbtn32").disabled=false;
        
       
        
    }
    document.getElementById("p32").style.display="none";
    document.getElementById("people").style.display="none";
    document.getElementById("things").style.display="none";
    document.getElementById("org").style.display="none";
    document.getElementById("evnt").style.display="none";
    document.getElementById("concpt").style.display="none";
    document.getElementById("identdobj").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("head1").innerHTML="Categorize the above identified objects";
  }

  function gobackp4(){
    document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p4").style.display="block";
    document.getElementById("p4").style.display="block";
    document.getElementById("p41").style.display="block";
    document.getElementById("p42").style.display="none";
    document.getElementById("p43").style.display="none";
    document.getElementById("p44").style.display="none";
    document.getElementById("p45").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("head1").innerHTML="Grouping of objects based on common attributes";
  }*/


  function replaybtn(){
    document.getElementById("head1").innerHTML="Identifying Domain Classes from the Problem Statements";
    document.getElementById("playbtn").disabled=false;
    document.getElementById("replaybtn").disabled=true;
    location.reload();
   /* document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p31").style.display="none";
    document.getElementById("li1").style.display="none";
    document.getElementById("li2").style.display="none";
    document.getElementById("li3").style.display="none";
    document.getElementById("li4").style.display="none";
    document.getElementById("li5").style.display="none";
    document.getElementById("li6").style.display="none";
    document.getElementById("li7").style.display="none";
    document.getElementById("li8").style.display="none";
    document.getElementById("li9").style.display="none";
    document.getElementById("li10").style.display="none";
    document.getElementById("li11").style.display="none";
    document.getElementById("li12").style.display="none";
    document.getElementById("li13").style.display="none";
    document.getElementById("p32").style.display="none";
    document.getElementById("people").style.display="none";
    document.getElementById("things").style.display="none";
    document.getElementById("org").style.display="none";
    document.getElementById("evnt").style.display="none";
    document.getElementById("concpt").style.display="none";
    document.getElementById("identdobj").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p41").style.display="none";
    document.getElementById("p42").style.display="none";
    document.getElementById("p43").style.display="none";
    document.getElementById("p44").style.display="none";
    document.getElementById("p45").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("step0").style.display="block";
    document.getElementById("step1").style.display="none";
    document.getElementById("step2").style.display="none";
    document.getElementById("step3").style.display="none";
    document.getElementById("step4").style.display="none";
   
 */
  }