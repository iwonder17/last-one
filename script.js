{
    function closeallshit() {
    
  document.getElementById('about').style.display= 'none'; 
    
 document.getElementById('motherlist').style.display= 'none';   
}

function clear() {
       hi('');
       hi2('');
       hi3('');
       hi4('');
       hi5('');
       hi6('');
       hi7('');
       hi8('');
       hi9('');
       hi10('');
       hi11('');
}
function hidemotherlist() {
  
      closeallshit();
    //document.getElementById('motherlist').style.height= '0px';  
   clear();none();document.getElementById('motherlist').style.display= 'block';   
     //document.getElementById('motherlist').style.height= '85px';  
}// button
{    
    function hh1() {document.getElementById('fff1').style.textAlign= 'center';
    }
     function hh2() {document.getElementById('fff2').style.textAlign= 'center';
    }
     function hh3() {document.getElementById('fff3').style.textAlign= 'center';
    }
     function hh4() {document.getElementById('fff4').style.textAlign= 'center';
    }
     function hh5() {document.getElementById('fff5').style.textAlign= 'center';
    }
     function hh6() {document.getElementById('fff6').style.textAlign= 'center';
    }
     function hh7() {document.getElementById('fff7').style.textAlign= 'center';
    }
     function hh8() {document.getElementById('fff8').style.textAlign= 'center';
    }
     function hh9() {document.getElementById('fff9').style.textAlign= 'center';
    }
     function hh10() {document.getElementById('fff10').style.textAlign= 'center';
    }
     function hh11() {document.getElementById('fff11').style.textAlign= 'center';
    }
}// center thing
    
   {    
    function hh11() {document.getElementById('fff1').style.textAlign= 'left';
    }
     function hh21() {document.getElementById('fff2').style.textAlign= 'left';
    }
     function hh31() {document.getElementById('fff3').style.textAlign= 'left';
    }
     function hh41() {document.getElementById('fff4').style.textAlign= 'left';
    }
     function hh51() {document.getElementById('fff5').style.textAlign= 'left';
    }
     function hh61() {document.getElementById('fff6').style.textAlign= 'left';
    }
     function hh71() {document.getElementById('fff7').style.textAlign= 'left';
    }
     function hh81() {document.getElementById('fff8').style.textAlign= 'left';
    }
     function hh91() {document.getElementById('fff9').style.textAlign= 'left';
    }
     function hh101() {document.getElementById('fff10').style.textAlign= 'left';
    }
     function hh111() {document.getElementById('fff11').style.textAlign= 'left';
    }}
}//none center
function none() {
    hh11();
     hh21();
     hh31();
     hh41();
     hh51();
     hh61();
     hh71();
     hh81();
     hh91();
     hh101();
     hh111();
    
}
// background thing

{// Assuming your date of birth is in the format dd/mm/yyyy
var dob = "17/2/2006";

// Split the date into day, month and year
var dobArray = dob.split("/");

// Get the current date
var today = new Date();

// Get the current day, month and year
var currentDay = today.getDate();
var currentMonth = today.getMonth() + 1; // Months are zero-based
var currentYear = today.getFullYear();

// Calculate the age in years
var age = currentYear - dobArray[2];

// Adjust the age if the current month is before or equal to the birth month
if (currentMonth <= dobArray[1]) {
  // If the current month is equal to the birth month, check the day
  if (currentMonth == dobArray[1]) {
    // If the current day is before the birth day, subtract one year from the age
    if (currentDay < dobArray[0]) {
      age--;
    }
  } else {
    // If the current month is before the birth month, subtract one year from the age
    age--;
  }
}

// Display the age
    var ageString = age.toString();
}

function aboutcontent() {
closeallshit();
   
document.getElementById('about').style.display= 'block'; 
    
    hi('Name: Nguyen Phan Quoc Huy');
    hi2('Age: '+ageString+' 🐕');
    hi3('sex: Man 😈');
    hi4('Ability: Unknow 🕸');
    hi5('Location: Unknow 👽');
    hi6('Status: Single 👤');
}//about

function contactcontent() {
closeallshit(); 
    
document.getElementById('about').style.display= 'block'; 
    hi('i am loading at 2');
    hi2('i am loading at 2');
    hi3('i am loading at 2');
    hi4('i am loading at 2');
    hi5('i am loading at 2');
    hi6('i am loading at 2');
    
}//contact

function servicescontent() {
closeallshit(); 
   
document.getElementById('about').style.display= 'block'; 
    hi('i am loading at 3i am loading at 3i am loaam loading at 3i am loading at 3i am loading at 3i am loading at 3i am loading at 3');
    hi2('i am loading at 3');
    hi3('i am loading at 3');
    hi4('i am loading at 3');
    hi5('i am loading at 3');
    hi6('i am loading at 3');
}//services

function homecontent() {
closeallshit(); 
    hh1();
      hh4();
      hh7();
document.getElementById('about').style.display= 'block'; 
    hi('Wellcome to Vitamin_T introduction page 😘');
   
    hi4('To open the menu, click the edge (☞ﾟヮﾟ)☞');
    hi7(' Error: Unexpected"(". a trong anh instead saw function =>  fff1.innerHTML = "";for (var i = 0; i < sentences.length; i++) { var words = sentences[i].split("");or (var j = 0; j < words.length; j0; i < sentences.length; i++) { var words = sentences[i].split("");or (var j = 0; j < words.ln(word) { fff1.innerHTML +=rd;}, (1 * j+(30 * i)) , words[j]);}} ...');
    
    hh1();
      hh4();
      hh7();
    
}//contact
 


// không tìm thấy id 

{
function hi(sentences) {
  fff1.innerHTML = "";
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].split("");
    for (var j = 0; j < words.length; j++) {
      setTimeout(function(word) {
        fff1.innerHTML += word;
      }, (1 * j+(30 * i)) , words[j]);
    }
  }
};
////////////////////////////////////////////
function hi2(sentences) {
  fff2.innerHTML = "";
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].split("");
    for (var j = 0; j < words.length; j++) {
      setTimeout(function(word) {
        fff2.innerHTML += word;
      }, (1 * j+(30 * i)) , words[j]);
    }
  }
};
////////////////////////////////////////////
function hi3(sentences) {
  fff3.innerHTML = "";
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].split("");
    for (var j = 0; j < words.length; j++) {
      setTimeout(function(word) {
        fff3.innerHTML += word;
      }, (1 * j+(30 * i)) , words[j]);
    }
  }
};
////////////////////////////////////////////
function hi4(sentences) {
  fff4.innerHTML = "";
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].split("");
    for (var j = 0; j < words.length; j++) {
      setTimeout(function(word) {
        fff4.innerHTML += word;
      }, (1 * j+(30 * i)) , words[j]);
    }
  }
};
////////////////////////////////////////////
function hi5(sentences) {
  fff5.innerHTML = "";
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].split("");
    for (var j = 0; j < words.length; j++) {
      setTimeout(function(word) {
        fff5.innerHTML += word;
      }, (1 * j+(30 * i)) , words[j]);
    }
  }
};
////////////////////////////////////////////
function hi6(sentences) {
  fff6.innerHTML = "";
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].split("");
    for (var j = 0; j < words.length; j++) {
      setTimeout(function(word) {
        fff6.innerHTML += word;
      }, (1 * j+(30 * i)) , words[j]);
    }
  }
};
////////////////////////////////////////////
function hi7(sentences) {
  fff7.innerHTML = "";
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].split("");
    for (var j = 0; j < words.length; j++) {
      setTimeout(function(word) {
        fff7.innerHTML += word;
      }, (1 * j+(5 * i)) , words[j]);
    }
  }
};
////////////////////////////////////////////
function hi8(sentences) {
  fff8.innerHTML = "";
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].split("");
    for (var j = 0; j < words.length; j++) {
      setTimeout(function(word) {
        fff8.innerHTML += word;
      }, (1 * j+(30 * i)) , words[j]);
    }
  }
};
////////////////////////////////////////////
function hi9(sentences) {
  fff9.innerHTML = "";
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].split("");
    for (var j = 0; j < words.length; j++) {
      setTimeout(function(word) {
        fff9.innerHTML += word;
      }, (1 * j+(30 * i)) , words[j]);
    }
  }
};
////////////////////////////////////////////
function hi10(sentences) {
  fff10.innerHTML = "";
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].split("");
    for (var j = 0; j < words.length; j++) {
      setTimeout(function(word) {
        fff10.innerHTML += word;
      }, (1 * j+(30 * i)) , words[j]);
    }
  }
};
////////////////////////////////////////////
function hi11(sentences) {
  fff11.innerHTML = "";
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].split("");
    for (var j = 0; j < words.length; j++) {
      setTimeout(function(word) {
        fff11.innerHTML += word;
      }, (1 * j+(30 * i)) , words[j]);
    }
  }
};
////////////////////////////////////////////


}// buch of shit for loading text






