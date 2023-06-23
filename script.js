function closeallshit() {
    
  document.getElementById('about').style.display= 'none'; document.getElementById('contact').style.display= 'none'; document.getElementById('services').style.display= 'none';   
    
    document.getElementById('motherlist').style.display= 'none';   
}


function hidemotherlist() {
  
    closeallshit();document.getElementById('motherlist').style.display= 'block';    
}// button



function aboutcontent() {
closeallshit(); 
document.getElementById('about').style.display= 'block'; 
}
function contactcontent() {
closeallshit(); 
document.getElementById('contact').style.display= 'block'; 
}
function servicescontent() {
closeallshit(); 
document.getElementById('services').style.display= 'block'; 
}


