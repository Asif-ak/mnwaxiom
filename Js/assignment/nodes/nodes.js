function addli(){
    var parent =document.getElementById("ul1");
    var li=document.createElement("li");
    
    var text=document.getElementById("text-1").value;
    var btton = document.createElement("input");
    btton.setAttribute("type","submit");
    btton.setAttribute("value","Delete")
    btton.setAttribute("onclick","removeli(this)")
    li.textContent= text;
    li.appendChild(btton);
    parent.appendChild(li);
    document.getElementById("text-1").value="";
}

function removeli(a){
    var pn = a.parentNode.parentNode;
    var ntd= a.parentNode;
    pn.removeChild(ntd);
    
}