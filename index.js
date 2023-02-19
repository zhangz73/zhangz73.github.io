/*global fetch*/
(function(){
  let curr = null;
  let categories = ["home", "publications", "teaching", "industry", "cv",
                    "contact"];
  function load(next){
    console.log(next);
    hide(curr);
    show(next);
  }
  function show(name){
    curr = name;
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
  window.onload = function(){
    curr = "sec-home";
    for(let i = 0; i < categories.length; i++){
      hide("sec-" + categories[i]);
    }
    show("sec-home");
    for(let i = 0; i < categories.length; i++){
      let str = "menu-" + categories[i];
      //c(str).onclick = function(){load("sec-" + categories[i])};
      let target = "sec-" + categories[i];
      //c(str).getElementsByTagName("a")[0].onlick = "(function(){console.log(target); load(\"" + target + "\")})();";
      c(str).getElementsByTagName("a")[0].onclick = function(){load("sec-" + categories[i])};
    }
  };
})();
