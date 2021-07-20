<div id="header">
    <div id="header-title">
        <button id="mobile-menu-button" onclick="menuActive(); mobileButtonActive()">Menu</button>
        <a class="header-title" href="/index.html">Yves-Valentin</a>
    </div>
    <div id="block-align-header-links">
        <a class="dividers"></a>
    <a class="header-link-buttons" href="/index.html">Home</a>
        <a class="dividers"></a>
    <a class="header-link-buttons" href="/gallery.html">Gallery</a>
        <a class="dividers"></a>
    <a class="header-link-buttons" href="/about.html">About</a>
        <a class="dividers"></a>
    <a class="header-link-buttons" href="/contact.html">Contact</a>
        <a class="dividers"></a>
    <a class="header-link-buttons" href="/portfolio.html">Portfolio</a>
        <a class="dividers"></a>
        <!--<a class="dividers"></a>
    <a class="header-link-buttons" href="var(--fifth-menu-link)">
        Link 5
    </a>-->
    </div>
</div>

<script>//menu button code
    function menuActive() {
      showMenu();
      changeButton();  //code
    }
    function showMenu() {
  var x = document.getElementById("block-align-header-links");
  if (x.style.marginTop === "var(--web-header-height)") {
    x.style.marginTop = "0px";
  } else {
    x.style.marginTop = "var(--web-header-height)";
  }
}
    function changeButton() {
  var x = document.getElementById("mobile-menu-button");
  if (x.style.backgroundColor === "var(--header-background-color)") {
    x.style.backgroundColor = "var(--secondary-color)";
    x.style.borderColor = "var(--accent-color-2)";
  } else {
    x.style.backgroundColor = "var(--header-background-color)";
    x.style.borderColor = "black";
  }
}
</script>

<script> //menu dissapears on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (window.pageYOffset < 200) {
    document.getElementById("header").style.top = "0";
  }
  else if (prevScrollpos < currentScrollPos) {
    document.getElementById("header").style.top = "-150px";
    document.getElementById("block-align-header-links").style.marginTop = "0px";
  } else {
  document.getElementById("header").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
}
</script>

<div id="footer">
<div class="block-align-center">
    <a class="footer-links" href="mailto:y.mervin.leroy@gmail.com">E-Mail</a>
    <a class="footer-links" href="https://www.instagram.com/yvesmervin/">Instagram</a>
    <a class="footer-links" href="tel:+16464672596">Phone</a>
</div>
</div>

<div class="header-spacer"></div>