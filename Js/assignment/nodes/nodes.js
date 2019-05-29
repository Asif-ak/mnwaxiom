function addli(){
    var parent =document.getElementById("ul1");
    var li=document.createElement("li");
    
    var text=document.getElementsByTagName("input")[0].value;
    var btton = document.createElement("input");
    btton.setAttribute("type","submit");
    btton.setAttribute("value","Delete")
    btton.setAttribute("onclick","removeli();")
    // btton.onclick=function() {
    //    console.log(btton.parentNode.removeChild(this)); 
    // }
    li.textContent= text;
    // li.setAttribute("id",text.)
    li.appendChild(btton);
    parent.appendChild(li);
}

function removeli(){
    var items = document.getElementsByTagName("li");
    for (var index = 0; index < items.length; index++) {
        // console.log(items[index].childNodes[1]);
        items[index].onclick=function() {
            // console.log(items[index].childNodes);
            this.parentNode.removeChild(this);
        }
    }

    
}