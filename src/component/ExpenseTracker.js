import './App.css';
//import Mobile from "./component/Mobile";
var b="choose";
var trans=[];
var d=[];
var a;
var attempt=0;
var button = document.createElement('button');
function add()
{
    const time=new Date();
    var initialamount=document.getElementById("initial amount").innerHTML;
    var amount=document.getElementById("amount").value;
   
    var notes=document.getElementById("notes").value;
    var value=document.getElementById("select").value;
    var credit=parseInt(initialamount)+parseInt(amount);
    var debit=parseInt(initialamount)-parseInt(amount);
    var type = (value==='credit') ? "credit" : "debit";
    let balance = (value==='credit')? credit:debit;
    document.getElementById("initial amount").innerHTML=balance;
    console.log(balance); 
    var id = Number(document.getElementById("p_id").value);

    transactionsdetail={}
    transactionsdetail.amount=amount;
    transactionsdetail.notes=notes;
    transactionsdetail.type=type;
    transactionsdetail.balance=balance;
    transactionsdetail.time=time.toLocaleTimeString();
    console.log(transactionsdetail.id);
    document.getElementById("p_id").value = id + 1
    trans.push(transactionsdetail);
    console.log(trans);
    // empty
    //document.getElementById("select").value=" ";

    //document.getElementById("choose").innerHTML=b;

    var amount=document.getElementById("amount").value=" ";
    var amount=document.getElementById("notes").value=" ";
    var nodes=document.getElementById("notes").value=" ";
    document.getElementById("select").value=document.getElementById("choose").value;
    attempt+=1;
    document.getElementById("attempt").innerHTML="You have completed "+attempt+" transactions";
    console.log(attempt);  
    
  return (<div className="add"></div>) 
 }
//  function generate() {
//     console.log(b);
//     document.getElementById("content").innerHTML = "";
//     var table = document.getElementById("content");
//     var type =  document.getElementById("last_click").value;
//     for(i=0;i<trans.length;i++){
//         console.log(trans[i]);
//         if(trans[i].type=='amount credited'){
//             d.push(trans[i])
//         }
//         else if((type=='debit')){
//             console.log("hai");
//         }
//         var btn = document.createElement("INPUT")
//         btn.innerHTML="delete"
//         btn.value= "Delete"
//         btn.type="button"
//         btn.className ="dlt-cls"
        
//         var row = table.insertRow();
//         var cell1 = row.insertCell(0);
//         var cell2 = row.insertCell(1);
//         var cell3 = row.insertCell(2);
//         var cell4 = row.insertCell(3);
//         var cell5 = row.insertCell(4);
//         var cell6 = row.insertCell(5).appendChild(btn);
//         btn.setAttribute("id","btn-"+i)
//         btn.addEventListener("click",deleteRow);
//         cell1.innerHTML = trans[i].type;
//         cell2.innerHTML = trans[i].amount;
//         cell3.innerHTML = trans[i].balance;
//         cell4.innerHTML = trans[i].notes;
//         cell5.innerHTML = trans[i].time;
//         cell6.innerHTML = btn.innerHTML="delete"   
      
//     }
// //delete
//     function deleteRow(event){
//         var indexToDelete = event.target.id.split("-")[1];
//         console.log("before",trans)
//         trans.splice(indexToDelete,1);
//         console.log("after",trans)
//         generate()
//     }
//     }

export default add;

