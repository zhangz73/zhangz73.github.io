/*global fetch*/
(function(){
  var curr = null;
  var categories = ["home", "publications", "teaching", "industry", "cv",
                    "contact"];
  function load(next){
    hide(curr);
    show(next);
  }
  function show(name){
    curr = name;
    var list = qsa("." + name);
    for(let i = 0; i < list.length; i++){
      list[i].classList.remove("hidden");
    }
  }
  function hide(name){
    var list = qsa("." + name);
    for(let i = 0; i < list.length; i++){
      list[i].classList.add("hidden");
    }
  }
  function $(id){
    return document.getElementById(id);
  }
  function qsa(selector){
    return document.querySelectorAll(selector);
  }
  window.onload = function(){
    curr = "home";
    for(var i = 0; i < categories.length; i++){
      hide(categories[i]);
    }
    show("home");
    for(var i = 0; i < categories.length; i++){
      var str = categories[i];
      $(str).onclick = function(){load(categories[i])};
    }
  };
})();