const myInp =document.getElementById("input");

const myBtn = document.getElementById("btn");

const getData = async (myReqValue)=>{
    
    let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/<word>`)

    let  jasonDat = await data.json();

}
 myBtn.addEventListener("click" , ()=>{
    let myReqValue = myInp.value;
    if(myReqValue == ""){
        alert("Pleaser Enter The Valid Value")
    }

 })