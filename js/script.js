function myFunction() {
  var x = document.getElementById("myTopnav");  // adds event listeners to
  if (x.className === "topnav") {               // the navbar so that when the
    x.className += " responsive";               // screen width is small, it 
  } else {                                      // hides the other links 
    x.className = "topnav";                     // through CSS
  }
}
