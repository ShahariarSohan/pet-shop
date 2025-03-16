// display category button
const displayCategory = async () => {
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
displayCategory()