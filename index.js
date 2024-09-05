var typed=new Typed("#text",{
    strings:[' '," to our recipe generator!"],
    typeSpeed:100,
    loop:true
})

const inpEle=document.getElementById("sinp")
const btnEle=document.getElementById("sbtn")




btnEle.addEventListener("click",() => {
    const inputValue = inpEle.value;
   
    window.location.href = `search.html?inData=${inputValue}`;
    
})




