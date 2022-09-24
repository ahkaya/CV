function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");



    if( document.getElementById("toggle-button").innerHTML== "Switch to Dark Mode"){
         document.getElementById("toggle-button").innerHTML= "Switch to Light Mode"
         document.getElementById("toggle-button").style.transition="3s";
    }
    else {
        document.getElementById("toggle-button").innerHTML= "Switch to Dark Mode"
        document.getElementById("toggle-button").style.transition="3s";
   }
 }

 function pokeFunction() {
    var element = document.body;
    element.classList.toggle("pokemon-mode");

    if( document.getElementById("poke-button").innerHTML== "Activate Pokemon Mode"){
      document.getElementById("poke-button").innerHTML= "Deactivate Pokemon Mode"
      document.getElementById("poke-button").style.transition="3s";
      }
    else {
     document.getElementById("poke-button").innerHTML= "Activate Pokemon Mode"
     document.getElementById("poke-button").style.transition="3s";
      }

}
const letters = ["svg","svg1","svg2","svg3","svg4"];
function ppHover(){
for (const x of letters) {
  document.getElementById(x).style.transition="font-size .4s ease-in";
  document.getElementById(x).style.fontSize="300px";
}}
/*function ppHover(){
  document.getElementById("svg").style.transition="font-size .4s ease-in";
  document.getElementById("svg1").style.transition="font-size .4s ease-in";
  document.getElementById("svg2").style.transition="font-size .4s ease-in";
  document.getElementById("svg3").style.transition="font-size .4s ease-in";
  document.getElementById("svg4").style.transition="font-size .4s ease-in";

  document.getElementById("svg").style.fontSize="300px";
  document.getElementById("svg1").style.fontSize="300px";
  document.getElementById("svg2").style.fontSize="300px";
  document.getElementById("svg3").style.fontSize="300px";
  document.getElementById("svg4").style.fontSize="300px";
}  */

function ppOut(){
  for (const x of letters) {
    document.getElementById(x).style.fontSize="10px";
    document.getElementById(x).style.transition="font-size .4s ease-out";
    document.getElementById(x).style.fontWeight="900";
    document.getElementById(x).style.fontFamily="arial";
  }}



/*function ppOut() {
  document.getElementById("svg").style.fontSize="10px";
  document.getElementById("svg").style.transition="font-size .4s ease-out";
  document.getElementById("svg").style.fontWeight="900";
  document.getElementById("svg").style.fontFamily="arial";

  document.getElementById("svg1").style.fontSize="10px";
  document.getElementById("svg1").style.transition="font-size .4s ease-out";
  document.getElementById("svg1").style.fontWeight="900";
  document.getElementById("svg1").style.fontFamily="arial";

  document.getElementById("svg2").style.fontSize="10px";
  document.getElementById("svg2").style.transition="font-size .4s ease-out";
  document.getElementById("svg2").style.fontWeight="900";
  document.getElementById("svg2").style.fontFamily="arial";

  document.getElementById("svg3").style.fontSize="10px";
  document.getElementById("svg3").style.transition="font-size .4s ease-out";
  document.getElementById("svg3").style.fontWeight="900";
  document.getElementById("svg3").style.fontFamily="arial";

  document.getElementById("svg4").style.fontSize="10px";
  document.getElementById("svg4").style.transition="font-size .4s ease-out";
  document.getElementById("svg4").style.fontWeight="900";
  document.getElementById("svg4").style.fontFamily="arial";
}  */


 $(".meter > span").each(function () {
    $(this)
      .data("origWidth", $(this).width())
      .width(0)
      .animate(
        {
          width: $(this).data("origWidth")
        },
        1200
      );
  });
  
