const mDiv=document.getElementById("readmore")
const params=new URLSearchParams(window.location.search)
let id=params.get("id")


function fetchData(id){
    
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

    .then(function(res){
        console.log(res)
        return res.json()
    })

    .then (function(data){
        console.log(data.meals)
        display(data.meals)
    })
    .catch(function(error) {
        console.error('Fetch error:', error);
    });
}
function display(meals){
    meals.forEach(s => {
        const rDiv=document.createElement("div")
        rDiv.classList.add("card","p-5")
      
        const RImg=document.createElement("img")
        RImg.src=s.strMealThumb;

        const Title=document.createElement("h1")
        Title.textContent=s.strMeal
        Title.classList.add("title")

        const area1=document.createElement("h3")
        area1.textContent=s.strArea+" Food"
        area1.classList.add("area")

        const headInstru=document.createElement("h3")
        headInstru.textContent="Lets get Cooking"
        headInstru.classList.add("headIntru")
        const instru=document.createElement("p")
        instru.textContent=s.strInstructions
        instru.classList.add("instruction")

        const head=document.createElement("h4")
        head.textContent="Ingredients You Will Need"
        head.classList.add("headIng")

        const ingredientcontainer=document.createElement('ul')
        ingredientcontainer.classList.add("list-unstyled")
        for(let i=1;i<=20;i++){
            const ing=s[`strIngredient${i}`];
            const measure=s[`strMeasure${i}`]
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

        rDiv.append(Title,RImg,area1,head,ingredientcontainer,headInstru,instru)
        mDiv.appendChild(rDiv)
        
        
    });

 
} fetchData(id)