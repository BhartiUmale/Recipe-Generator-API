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

        const RImg=document.createElement("img")
        RImg.src=s.strMealThumb;

        const Title=document.createElement("h1")
        Title.textContent=s.strMeal

        const area1=document.createElement("h3")
        area1.textContent=s.strArea

        const instru=document.createElement("p")
        instru.textContent=s.strInstructions

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

        rDiv.append(Title,RImg,area1,ingredientcontainer,instru)
        mDiv.appendChild(rDiv)
        
        
    });

    document.body.appendChild(mDiv)
} fetchData(id)