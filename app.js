var one = document.getElementById("one").value;
var two = document.getElementById("two").value;
var tre = document.getElementById("tre").value;
var fur = document.getElementById("fur").value;
var fiv = document.getElementById("fiv").value;
var six = document.getElementById("six").value;
var svn = document.getElementById("svn").value;
var eit = document.getElementById("eit").value;
var nin = document.getElementById("nin").value;
var ero = document.getElementById("ero").value;
var pls = document.getElementById("pls").value;
var nus = document.getElementById("nus").value;
var mul = document.getElementById("mul").value;
var ash = document.getElementById("ash").value;
var mod = document.getElementById("mod").value;
var inp = "";
var ip1 = "";
var ip2 = "";
function clean(){
   document.getElementById("ips").value = "";
   inp = "";
}
function del(){
   document.getElementById("ips").value = document.getElementById("ips").value.slice(0,-1);
   inp = inp.slice(0,-1);
};
function vOne(express){
   document.getElementById("ips").value += express
   inp = document.getElementById("ips").value
   console.log(inp)
};
    function opera(){

        for(var i = 0; inp.length; i++){
              if(inp[i] == "+"){
                 ip1 += inp.slice(0,i)
                 ip2 += inp.slice(i+1)
                 var opPlus = Number(ip1) + Number(ip2)
                 document.getElementById("ips").value = ""
                 ip1 = ""
                 ip2 = ""
                 break;
               }
               else if(inp[i] == "-"){
               ip1 += inp.slice(0,i)
               ip2 += inp.slice(i+1)
               var opPlus = Number(ip1) - Number(ip2)
               document.getElementById("ips").value = ""
               ip1 = ""
               ip2 = ""
               break;
            }
            else if(inp[i] == "X"){
               ip1 += inp.slice(0,i)
               ip2 += inp.slice(i+1)
               var opPlus = Number(ip1) * Number(ip2)
               document.getElementById("ips").value = ""
               ip1 = ""
               ip2 = ""
               break;
            }
            else if(inp[i] == "/"){
               ip1 += inp.slice(0,i)
               ip2 += inp.slice(i+1)
               var opPlus = Number(ip1) / Number(ip2)
               document.getElementById("ips").value = ""
               ip1 = ""
               ip2 = ""
               break;
            }
            else if(inp[i] == "%"){
               ip1 += inp.slice(0,i)
               ip2 += inp.slice(i+1)
               var opPlus = Number(ip1) % Number(ip2)
               document.getElementById("ips").value = ""
               ip1 = ""
               ip2 = ""
               break;
            }
         }

          document.getElementById("ips").value = opPlus;       
}
