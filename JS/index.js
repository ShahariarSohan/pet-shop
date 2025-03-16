// display category button
const displayCategoryButton = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/peddy/categories")
    const data = await res.json();
    const categoryData = data.categories;
    categoryData.forEach(category => {
        const categoryContainer = document.getElementById('category-container')
        const div = document.createElement("div")
        div.innerHTML = `
        <button class=" w-4/5 mx-auto flex gap-3 items-center justify-center border rounded-xl hover:rounded-full border-gray-200  py-3 hover:bg-blue-100 hover:border-blue-400">
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
                <div class="flex items-center primary-text gap-2 text-sm"><i class="fa-solid fa-calendar-days"></i><p>Date :${petData.date_of_birth ? petData.date_of_birth : "not available"}<p></div>
                <div class="flex items-center primary-text gap-2 text-sm"><i class="fa-solid fa-venus"></i><p>Gender :${petData.gender ? petData.gender : "not available"}<p></div>
                <div class="flex items-center primary-text gap-2 text-sm"><i class="fa-solid fa-dollar-sign"></i><p>Price :${petData.price ? petData.price : "not available"}<p><i class="fa-solid fa-dollar-sign"></i></div>
                
                <div class="flex items-center justify-between">
                <btn class="btn"><i class="fa-solid fa-thumbs-up"></i></btn>
                <btn class="btn">Adopt</btn>
                <btn class="btn">Details</btn>
                </div>
            
            </div>
        `
        cardContainer.append(card)

    });
}
displayAllCategories()
