
    var bady = document.querySelector('body');
   bady.innerHTML +='<div id="snackbar"></div>';
    
  /*  var bb= document.querySelector('#exit');
   bb.setAttribute("style","color:yellow;right:20px;position:absolute;");*/

function getSelectedText() {
        var text = "";
        if (typeof window.getSelection != "undefined") {
            text = window.getSelection().toString();
            
            
        } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
            text = document.selection.createRange().text;
            
            
        }
        return text;
    }
    
    function doSomethingWithSelectedText() {
        var selectedText = getSelectedText();
        if (selectedText) {
           chrome.runtime.sendMessage(selectedText, function(response) {
  
               // alert(response);
               document.querySelector('#snackbar').innerHTML=response;
               document.querySelector('#snackbar').setAttribute("style","visibility:visible;");
             
                setTimeout(function()
                { 
                    document.querySelector('#snackbar').setAttribute("style","visibility:hidden");  
                    //alert("yo mama");
                }, 7500);
               
             
});
        }
    }
    
    document.onmouseup = doSomethingWithSelectedText;
    document.onkeyup = doSomethingWithSelectedText;

     bb.onclick=function()
    {
         document.querySelector('#snackbar').style.visibility = "hidden";
    }
