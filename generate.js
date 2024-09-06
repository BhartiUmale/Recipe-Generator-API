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
    
    const card=document.createElement("div")
    card.classList.add("card")

    const cardbody=document.createElement("div")
    cardbody.classList.add("cardBody","h-100","p-5")

    sDiv.classList.add("col-lg-6","col-md-12","mb-4")
        const RImg=document.createElement("img")
        RImg.src=ele.strMealThumb;

        const Title=document.createElement("h1")
        Title.textContent=ele.strMeal
        Title.classList.add("title")

        const area1=document.createElement("h3")
        area1.textContent=ele.strArea+" Food" || "not "
        area1.classList.add("area")

        const headInstru=document.createElement("h3")
        headInstru.textContent="Lets get Cooking"
        headInstru.classList.add("headIntru")
        const instru=document.createElement("p")
        instru.textContent=ele.strInstructions || "not"
        instru.classList.add("instruction")

        const head=document.createElement("h4")
        head.textContent="Ingredients You Will Need"
        head.classList.add("headIng")

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
       
        cardbody.append(Title,area1,head,ingredientcontainer,headInstru,instru)
        card.append(RImg,cardbody)
        sDiv.appendChild(card)
        maindiv.appendChild(sDiv)
        
        


        

    }