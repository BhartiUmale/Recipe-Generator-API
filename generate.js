const generateinp=document.getElementById("inpG")
const sumitbtn=document.getElementById("submit")
const maindiv=document.getElementById("show")
sumitbtn.addEventListener("click",fetchdata)

function fetchdata(){
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${generateinp.value}`)

    .then(function(res){
        console.log(res)
       return res.json();
    })
    .then(function(data){
        maindiv.innerHTML='';
        if(!data.meals){
        maindiv.innerHTML='<p>data not found</p>'
        return
    }
    data.meals.forEach(function(ele){
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ele.idMeal}`)
        .then(function(res){
            return res.json()
        })
        .then(function(dettailData){
            showMealDetail(dettailData.meals[0])
        })
    })
    })
    generateinp.value="" 
}

function  showMealDetail(ele){
    const sDiv=document.createElement("div")
        const RImg=document.createElement("img")
        RImg.src=ele.strMealThumb;

        const Title=document.createElement("h1")
        Title.textContent=ele.strMeal

        const area1=document.createElement("h3")
        area1.textContent=ele.strArea || "not "
        const instru=document.createElement("p")
        instru.textContent=ele.strInstructions || "not"

        const ingredientcontainer=document.createElement('ul')
        ingredientcontainer.classList.add("list-unstyled")
        for(let i=1;i<=20;i++){
            const ing=ele[`strIngredient${i}`];
            const measure=ele[`strMeasure${i}`]
            if(ing && ing.trim() !== ''){
                const item=document.createElement('li')
                item.classList.add("text-decoration-none")
                item.textContent=`${measure} ${ing}`
                ingredientcontainer.appendChild(item)
            }
        }
    
        // const yVideo=document.createElement("iframe")
        // yVideo.src=s.strYoutube
        // yVideo.width = "560";
        // yVideo.height = "315";

        sDiv.append(Title,RImg,area1,ingredientcontainer,instru)
        maindiv.appendChild(sDiv)
        
        


        

    //document.body.appendChild(maindiv)
}