// Fetching All pet categories and making a button

const categories = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/peddy/categories')
        const data = await res.json()
        displayCategories(data.categories)

    } catch (error) {
        console.log(error);
    }
}



const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('category-container')
    categories.forEach((category) => {
        // console.log(category.category);
        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick="fetchingPetsByCategory('${category.category}')" class="flex items-center font-bold border-2 px-8 py-3"><img src=${category.category_icon}/> <div class="ml-3">${category.category}</div></button>
        
        `
        categoryContainer.append(div)
    })
}

// Fetching All Pet

const allPets = async () => {
    const spinner = document.getElementById('spinner')
    const container = document.getElementById('all-pets-container')
    container.innerHTML = "";
    spinner.classList.remove('hidden');
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets')
    const data = await res.json();
    spinner.classList.add('hidden')
    displayAllPets(data.pets)

};


// Displaying all pets in the ui
const displayAllPets = (pets) => {
    console.log(pets);
    const allPetsContainer = document.getElementById('all-pets-container')
    allPetsContainer.innerHTML = '';

    if (pets.length === 0) {
        allPetsContainer.innerHTML = 'Nothing in the bird category'
    }

    pets.forEach((pet) => {
        // console.log(pet);
        const div = document.createElement('div')
        div.classList = 'border-2 p-4'
        div.innerHTML = `
        <div class="md:h-[210px] md:w-[320px]">
        <img class="h-full w-full object-cover" src=${pet.image}/>
        </div>
        <div class="space-y-1">
        <p class="font-bold">${pet?.pet_name}</p>
        <p class="text-sm">${pet?.breed}</p>
        <p class="text-sm">${pet?.date_of_birth}</p>
        <p class="text-sm">${pet?.gender}</p>
        <p class="text-sm">${pet?.price}</p>
        
        </div>
         <div class="divider"></div>
         <div class="flex justify-between">
         <button class="border-2 py-2 px-4 text-sm">
         <i class="fa-solid fa-thumbs-up"></i>
         
         </button>
         <button class="border-2 py-2 px-4 text-sm">Adopt</button>
         <button class="border-2 py-2 px-4 text-sm">Details</button>
         </div>
        
        `

        allPetsContainer.append(div)
    })

};



// Fetch pets by category

const fetchingPetsByCategory = async (category) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    const data = await res.json();
    displayAllPets(data.data)
    console.log(data.data);
}


allPets()
categories();