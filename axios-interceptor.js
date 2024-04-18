
function togglePanel() {
  var panel = document.getElementById("myPanel");
  var overlay = document.getElementById("overlay");
  
  panel.classList.toggle("open-panel");
  overlay.style.display = (panel.classList.contains("open-panel")) ? "block" : "none";
}

// Close the panel when clicking outside the panel
document.getElementById("overlay").addEventListener("click", function(){
  togglePanel();
});
