class User{
     static Users=[];

constructor(Fn,Ln,num){
    this.firstName=Fn;
    this.lastName=Ln;
    this.number=num;
    User.Users.push(this);
}


}





function Submit(){
    let FName= document.getElementById("FName").value;
    let LName= document.getElementById("LName").value;
    let Num= document.getElementById("Number").value;
 if(FName==""||LName==""||Num==""||document.getElementById("err").textContent!=""||document.getElementById("err2").textContent!=""||document.getElementById("err3").textContent!="")
 {
alert("Error");
 }
else{
    
    let u1= new User(FName,LName,Num);
    alert("Hello "+u1.firstName+" "+u1.lastName+" Your Number is "+u1.number)
console.log(User.Users);
}
    
}
let flag,flag2;
function CheckName(id,s){
    let val=document.getElementById(id).value;
    
     flag=1;

    for(let i=0;i<val.length;i++){
        if(!isNaN(val[i]))
        flag=0;
    }
    
    if(flag==0)
       {
        
        let err=" Name Must be A String";
         let msg=document.getElementById(s);
         msg.textContent=err;
         msg.style.color="red";

       }

       else{
        let msg=document.getElementById(s);
        msg.textContent="";
       }

}


function CheckNumber(id,s){
    let val=document.getElementById(id).value;
    flag2=1;

   
   
   if(isNaN(val)||val.length!=11)
      {
       flag2=0;
       let err=" Phone Number Must be A Number with 11 #";
        let msg=document.getElementById(s);
        msg.textContent=err;
        msg.style.color="red";

      }

      else{
       let msg=document.getElementById(s);
       msg.textContent="";
      }
}

function checkPalindrome(arr){
    
    console.log(CheckArr);

}

let arr=[1,2,34,5];
let arr2=[...String(arr[2])].map(Number)
console.log(arr2);