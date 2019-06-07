
function addli(){
    var text=document.getElementById("text-1").value;
    if(text.length==0)
    {
        alert("please enter a value")
    }

    else{
        // for dynamically adding css style to div2
        document.getElementById("div2").setAttribute("class","div2")
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
    submit.setAttribute("onclick","updateli(this)");
    input.setAttribute("type","text")
    input.setAttribute("size","35")
    getli.replaceChild(input,getli.childNodes[0])
    getli.insertBefore(submit,getli.childNodes[1]);
    input.value=litext;
}

function updateli(a) {
    var parent=a.parentNode;
    var inputtext=a.parentNode.childNodes[0].value;
    console.log(inputtext);
    var newli=document.createTextNode(inputtext);
    parent.replaceChild(newli,parent.childNodes[0]);
    parent.removeChild(parent.childNodes[1]);
    

}