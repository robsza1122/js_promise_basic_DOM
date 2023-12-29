var e=new Promise(function(e,n){document.getElementById("logo").addEventListener("click",function(){e(".logo")})}),n=new Promise(function(e,n){setTimeout(function(){n(Error("We need to fix problem!!"))},3e3)});e.then(function(){document.body.insertAdjacentHTML("beforeend",'\n  <div class="message error-message">\n  Promise was resolved!\n</div>')}),n.catch(function(){document.body.insertAdjacentHTML("beforeend",'\n  <div class="message error-message">\n  Promise was rejected!\n</div>')});//# sourceMappingURL=index.a55df09e.js.map

//# sourceMappingURL=index.a55df09e.js.map
