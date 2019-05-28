function addli(){
    var parent =document.getElementById("ul1");
    var li=document.createElement("li");
    var text=document.getElementsByTagName("input")[0].value;
    var btton = document.createElement("input");
    btton.setAttribute("type","submit");
    btton.setAttribute("value","Delete")
    btton.setAttribute("onclick","removeli(this)")
    li.textContent= text;
    // li.setAttribute("id",text.)
    li.appendChild(btton);
    parent.appendChild(li);
}

function removeli(a){
    // var ul=document.getElementById("ul1");
    // var ul=document.getElementsByTagName("li");
    // console.log(ul.parentNode.childNodes.item(a));
    
    // ul.parentNode.removeChild(ul[a])
    //     var ul = document.querySelector('li');

//     var listLength = ul.children.length;

//   for (i = 0; i < listLength; i++) {
//     ul.removeChild(ul.children[i]);
//   }
  
    //  var ul=document.getElementById("ul1");
    // var index=[ul.parentElement.children].indexOf(ul);
    // console.log(index);
    // ul[index].parentNode.removeChild(index);
    // var g = document.getElementById('ul1');
    // for (var i = 0, len = g.children.length; i < len; i++)
    // {
    
    //     (function(index){
    //         g.children[i].onclick = function(){
    //               alert(index)  ;
    //         }    
    //     })(i);
    
    // }
    
}