const myInp =document.getElementById("input");

const myBtn = document.getElementById("btn");

const getData = async (myReqValue)=>{
    
    let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${myReqValue}`);

    let  jasonDat = await data.json();

    document.querySelector(".text").innerHTML = "";

     let div = document.createElement("div");

     div.classList.add("detail");
     
    div.innerHTML = `
             <h2>Word : <span>${jasonDat[0].word == undefined ? "Not Fond" : jasonDat[0].word }</span></h2> 
             <p> Meaning : <span> ${jasonDat[0].meanings[0].definitions[0].definition == undefined ? "Not Fond" : jasonDat[0].meanings[0].definitions[0].definition } </span>
              <p> Example : <span> ${jasonDat[0].meanings[0].definitions[0].example == undefined ? "Not Fond" : jasonDat[0].meanings[0].definitions[0].example  } </span> 
             <p>${jasonDat[0].meanings[0].partOfSpeech}</p>
            <p>Synonyms :<span>${jasonDat[0].meanings[0].synonyms  == undefined ? "Not Fond": jasonDat[0].meanings[0].synonyms }</span></p>         
            <audio controls>
            <source src="${jasonDat[0].phonetics[0].audio == undefined ? "Not Fond":jasonDat[0].phonetics[0].audio }" type="audio/ogg">
              Your browser does not support the audio tag.
          </audio>


            
            <a href="${jasonDat[0].sourceUrls[0]}" target="_blank">Read More </a>`



           

    document.querySelector(".text").appendChild(div)
    console.log(jasonDat);
    console.log(jasonDat[0].meanings)

}
 myBtn.addEventListener("click" , ()=>{
    let myReqValue = myInp.value;
    if(myReqValue == ""){
        alert("Pleaser Enter The Valid Value")
    }else{
        getData(myReqValue)
    }

 })