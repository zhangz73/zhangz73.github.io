/*global fetch*/
(function(){
  let curr = null;
  let categories = ["home", "publications", "teaching", "industry", "leadership", "cv", "contact"];
  function load(next){
    hide(curr);
    show(next);
    updateCVList("contract");
  }
  function show(name, updatePtr = true){
    if(updatePtr){
      curr = name;
    }
    let list = qsa("." + name);
    for(let i = 0; i < list.length; i++){
      list[i].classList.remove("hidden");
    }
  }
  function hide(name){
    let list = qsa("." + name);
    for(let i = 0; i < list.length; i++){
      list[i].classList.add("hidden");
    }
  }
  function $(id){
    return document.getElementById(id);
  }
  function c(cls){
    return document.getElementsByClassName(cls)[0];
  }
  function qsa(selector){
    return document.querySelectorAll(selector);
  }
  function swapCV(symb){
    if(symb == "short"){
      $("cv-view").classList.add("hidden");
      $("resume-view").classList.remove("hidden");
    } else{
      $("resume-view").classList.add("hidden");
      $("cv-view").classList.remove("hidden");
    }
  }
  function updateCVList(symb){
    if(symb == "expand"){
      show("dropdown-content-cv", false);
    } else{
      hide("dropdown-content-cv");
    }
  }
  window.onload = function(){
    curr = "sec-home";
    for(let i = 0; i < categories.length; i++){
      hide("sec-" + categories[i]);
    }
    show("sec-home");
    for(let i = 0; i < categories.length; i++){
      if(categories[i] != "cv"){
        let str = "menu-" + categories[i];
        let target = "sec-" + categories[i];
        c(str).getElementsByTagName("a")[0].onclick = function(){load(target)};
      }
    }
    $("menu-item-cv").onclick = function(){load("sec-cv")};
    updateCVList("contract");
//    $("menu-item-cv").onmouseover = function(){updateCVList("expand")};
//    $("cv-long-link").onclick = function(){load("sec-cv"); swapCV("long")};
//    $("cv-short-link").onclick = function(){load("sec-cv"); swapCV("short")};
  };
})();
