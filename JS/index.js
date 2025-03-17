// display category button
const displayCategoryButton = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/peddy/categories")
    const data = await res.json();
    const categoryData = data.categories;
    categoryData.forEach(category => {
        const categoryContainer = document.getElementById('category-container')
        const div = document.createElement("div")
        div.innerHTML = `
        <button class=" w-4/5 mx-auto flex gap-3 items-center justify-center border rounded-xl hover:rounded-full border-gray-200  py-3 hover:bg-blue-100 hover:border-blue-400" onclick="displayByCategory('${category.category}')">
        <img src="${category.category_icon}"/>
        <p class="font-extrabold">${category.category}</p>
        </button>
        `
        categoryContainer.append(div)
    });
}
displayCategoryButton()

// display all category
const displayAllCategories = async () => {
    const cardContainer = document.getElementById('card-container')
    const res = await fetch("https://openapi.programming-hero.com/api/peddy/pets")
    const data = await res.json();
    const petsData = data.pets;
    petsData.forEach(petData => {
        const card = document.createElement("div")
        card.innerHTML = `
        <div class="card bg-base-100 shadow-sm p-3 space-y-3">
            <figure>
                <img class=" w-96 h-52 rounded-md object-cover "
                src=${petData.image}
                alt="Pet" />
            </figure>
                <h3 class="text-xl font-bold">${petData.pet_name}</h3>
                <div class="flex items-center primary-text gap-2 text-sm"><i class="fa-solid fa-anchor"></i><p>Breed :${petData.breed ? petData.breed : "not available"}<p></div>
                <div class="flex items-center primary-text gap-2 text-sm"><i class="fa-solid fa-calendar-days"></i><p>Birth :${petData.date_of_birth ? petData.date_of_birth : "not available"}<p></div>
                <div class="flex items-center primary-text gap-2 text-sm"><i class="fa-solid fa-venus"></i><p>Gender :${petData.gender ? petData.gender : "not available"}<p></div>
                <div class="flex items-center primary-text gap-2 text-sm"><i class="fa-solid fa-dollar-sign"></i><p>Price :${petData.price ? petData.price : "not available"}<p><i class="fa-solid fa-dollar-sign"></i></div>
                
                <div class="flex items-center justify-between">
                <btn class="btn" onclick="displayLiked('${petData.image}')"><i class="fa-solid fa-thumbs-up"></i></btn>
                <btn class="btn">Adopt</btn>
                <btn class="btn" onclick="displayDetails('${petData.petId}')">Details</btn>
                </div>
            
            </div>
        `
        cardContainer.append(card)

    });
}
displayAllCategories()

// display by category

const displayByCategory = async (categoryName) => {
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = "";
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
    const data = await res.json();
    const petsData = data.data;
    if (petsData.length === 0) {
        cardContainer.classList.remove("grid")
        const div = document.createElement("div")
        div.innerHTML = `
        <div class=" space-y-10">
            <img class="mx-auto" src="../images/error.webp"/>
            <h3 class="text-center font-bold text-2xl">No data available</h3>
            <p class="text-center ">There is no data here for birds.When birds will available we will add it.</p>
        </div>
        
        `
        cardContainer.append(div)

    }
    else {
        cardContainer.classList.add("grid")
        petsData.forEach(petData => {
            const card = document.createElement("div")
            card.innerHTML = `
            <div class="card bg-base-100 shadow-sm p-3 space-y-3">
                <figure>
                    <img class=" w-96 h-52 rounded-md object-cover "
                    src=${petData.image}
                    alt="Pet" />
                </figure>
                    <h3 class="text-xl font-bold">${petData.pet_name}</h3>
                    <div class="flex items-center primary-text gap-2 text-sm"><i class="fa-solid fa-anchor"></i><p>Breed :${petData.breed ? petData.breed : "not available"}<p></div>
                    <div class="flex items-center primary-text gap-2 text-sm"><i class="fa-solid fa-calendar-days"></i><p>Birth :${petData.date_of_birth ? petData.date_of_birth : "not available"}<p></div>
                    <div class="flex items-center primary-text gap-2 text-sm"><i class="fa-solid fa-venus"></i><p>Gender :${petData.gender ? petData.gender : "not available"}<p></div>
                    <div class="flex items-center primary-text gap-2 text-sm"><i class="fa-solid fa-dollar-sign"></i><p>Price :${petData.price ? petData.price : "not available"}<p><i class="fa-solid fa-dollar-sign"></i></div>
                    
                    <div class="flex items-center justify-between">
                    <btn class="btn" onclick="displayLiked('${petData.image}')"><i class="fa-solid fa-thumbs-up"></i></btn>
                    <btn class="btn">Adopt</btn>
                    <btn class="btn" onclick="displayDetails('${petData.petId}')">Details</btn>
                    </div>
                
                </div>
            `
            cardContainer.append(card)

        });
    }

}

// display by like button

const displayLiked = (thumbnail) => {
    const thumbnailContainer = document.getElementById("thumbnail-container")
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="p-2">
     <img class=" w-full  lg:w-60 lg:h-24 rounded-md" src=${thumbnail}/>
    </div>
    `
    thumbnailContainer.append(div)

}

// display details

const displayDetails = async (petId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    const data = await res.json();
    const petData = data.petData;
    const detailsContainer = document.getElementById("model-content")
    detailsContainer.innerHTML = `
            <figure>
                <img class="w-full h-48 rounded-md object-cover "
                src=${petData.image}
                alt="Pet" />
            </figure>
                <h3 class="text-xl font-bold">${petData.pet_name}</h3>
                <div class="grid grid-cols-2">
                    <div class="flex items-center primary-text gap-2 text-sm"><i class="fa-solid fa-anchor"></i><p>Breed :${petData.breed ? petData.breed : "not available"}<p></div>
               
                <div class="flex items-center primary-text gap-2 text-sm"><i class="fa-solid fa-venus"></i><p>Gender :${petData.gender ? petData.gender : "not available"}<p></div>
                <div class="flex items-center primary-text gap-2 text-sm"><i class="fa-solid fa-venus"></i><p>Vaccinated :${petData.vaccinated_status ? petData.vaccinated_status : "not available"}<p></div>
                 <div class="flex items-center primary-text gap-2 text-sm"><i class="fa-solid fa-calendar-days"></i><p>Birth :${petData.date_of_birth ? petData.date_of_birth : "not available"}<p></div>
                <div class="flex items-center primary-text gap-2 text-sm"><i class="fa-solid fa-dollar-sign"></i><p>Price :${petData.price ? petData.price : "not available"}<p><i class="fa-solid fa-dollar-sign"></i></div>
                </div>   
                <div><h3 class="font-bold">Detail Information :</h3><p class="primary-text text-justify text-sm">${petData.pet_details}</p>
                </div>
                
                
    `
    // document.getElementById("model-show").click();
    document.getElementById("myModal").showModal();

}