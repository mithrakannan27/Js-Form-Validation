document.getElementById("incorrect").style.display='none';
    function get()
    {
    var a=document.getElementById("user").value;
    var b=document.getElementById("pass").value;
    if(a==""){
        document.getElementById("incorrect").style.display='block';
    }
    else if(b==""){
        document.getElementById("incorrect").style.display='block';
    }

    }