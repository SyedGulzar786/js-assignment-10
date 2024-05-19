    var del = document.getElementById("del").value
    var mod = document.getElementById("mod").value
    var svn = document.getElementById("svn").value
    var eit = document.getElementById("eit").value
    var nin = document.getElementById("nin").value
    var ash = document.getElementById("ash").value
    var fur = document.getElementById("fur").value
    var fiv = document.getElementById("fiv").value
    var six = document.getElementById("six").value
    var mul = document.getElementById("mul").value
    var one = document.getElementById("one").value
    var two = document.getElementById("two").value
    var tre = document.getElementById("tre").value
    var nus = document.getElementById("nus").value
    var ero = document.getElementById("ero").value
    var eql = document.getElementById("eql").value
    var pls = document.getElementById("pls").value
    var numeric = "";
    var num = "1234567890";
    var operation = "";
    var extra = "";
    var match = false;
    function eval(express) {
        extra += express
        for(var i = 0; i < extra.length; i++){
            for(var j = 0; j < num.length; j++){
                if(extra[i] == num[j]){
                    numeric += extra[i]
                    match = true
                }
            }
        }
        extra = ""
        console.log(numeric)
        // else{
            //     operation += express
            //     numeric += "!"
            // }
    }