var bAppended = false, backtop = document.createElement("div");
backtop.id = "arrowUp";
backtop.className = "backtop"
backtop.innerHTML = "<a href=\"#\" title=\"Voltar para o topo.\">&uarr;<\/a>";
 
onscroll = function() {
  var nVScroll = document.documentElement.scrollTop || document.body.scrollTop;
  bAppended = nVScroll > 900 ?
    bAppended || (document.body.appendChild(backtop), true)
    : bAppended && (document.body.removeChild(backtop), false);
};