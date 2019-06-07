
function addli(){
    var text=document.getElementById("text-1").value;
    if(text.length==0)
    {
        alert("please enter a value")
    }

    else{
        var parent =document.getElementById("ul1");
        var li = document.createElement("li");
        li.textContent = text;
        var delbtton = document.createElement("input");
        delbtton.setAttribute("type", "submit");
        delbtton.setAttribute("value", "Delete")
        delbtton.setAttribute("onclick", "removeli(this)")
        var editbtton=document.createElement("input");
        editbtton.setAttribute("type","submit");
        editbtton.setAttribute("value","Edit");
        editbtton.setAttribute("onclick","editli(this)");
        li.appendChild(editbtton);
        li.appendChild(delbtton);
        parent.appendChild(li);
        document.getElementById("text-1").value = "";
    }
}

function removeli(a){
    var pn = a.parentNode.parentNode;
    var ntd= a.parentNode;
    pn.removeChild(ntd);
    
}

function editli(a)
{
    var litext=a.parentNode.innerText;
    var getli=a.parentNode;
    var input=document.createElement("input");
    var submit=document.createElement("input");
    submit.setAttribute("type","submit")
    submit.setAttribute("onclick","update(this)");
    input.setAttribute("type","text")
    getli.replaceChild(input,getli.childNodes[0])
    getli.insertBefore(submit,getli.childNodes[1]);
    input.value=litext;
}

function update(a) {
    
}