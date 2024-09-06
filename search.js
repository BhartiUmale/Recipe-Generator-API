const mainDiv=document.getElementById("results-container")
const param=new URLSearchParams(window.location.search)
let inData=param.get('inData')

function searchData(inData){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inData}`)

    .then (function(res){
        console.log(res)
        return res.json()


    })
    .then(function(data){
        console.log(data.meals)
        displaySearchData(data.meals)
    })

}


function displaySearchData(meals){
   
    meals.forEach(m => {
        
        const eData=document.createElement("div")
        eData.classList.add("col-sx-12","col-lg-4","mb-4")

        const cardDiv=document.createElement("div")
        cardDiv.classList.add("card","h-100")
        

        const cardBody=document.createElement("div")
        cardBody.classList.add("card-body")

        const title=document.createElement("h3")
        title.textContent=m.strMeal
        title.classList.add("title")

        const area=document.createElement("h3")
        area.textContent=m.strArea +" Food";
        area.classList.add("area")

        

        const instruction=document.createElement("p")
        instruction.textContent=m.strInstructions;
        instruction.classList.add("instruction")
         
        const Category=document.createElement("h4")
        Category.textContent= "Its a "+m.strCategory+" Type of Food"

        const img=document.createElement("img")
        img.src=m.strMealThumb

        const button1=document.createElement("button")
        button1.textContent="Explore Recipe"
        button1.classList.add("exploreRecipeBtn")
        button1.addEventListener("click", () => {
            window.location.href=`ReadMore.html?id=${m.idMeal}`
            
        })


        cardBody.append(title,area,Category,button1)
        cardDiv.append(img,cardBody)
         eData.append(cardDiv)
         mainDiv.appendChild(eData)

    });

}
searchData(inData)
