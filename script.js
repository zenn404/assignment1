function adoptPet() {
    alert("Thank you for your interest! Please contact us at info@petstore.com to proceed with the adoption.");
}

const allPets = [
    { id: 1, name: 'Buddy', type: 'Dog', age: 3, img: 'animals/petshop-img/dog.jpg' },
    { id: 2, name: 'Charlie', type: 'Dog', age: 4, img: 'animals/petshop-img/dogs/dog01.jpg' },
    { id: 3, name: 'Max', type: 'Dog', age: 2, img: 'animals/petshop-img/dogs/dog02.jpg' },
    { id: 4, name: 'Gizmo', type: 'Dog', age: 1, img: 'animals/petshop-img/dogs/dog03.jpg' },
    { id: 5, name: 'Whiskers', type: 'Cat', age: 2, img: 'animals/petshop-img/cats/cat01.jpg' },
    { id: 6, name: 'Mittens', type: 'Cat', age: 1, img: 'animals/petshop-img/cats/cat02.jpg' },
    { id: 7, name: 'Smokey', type: 'Cat', age: 3, img: 'animals/petshop-img/cats/cat03.jpg' },
    { id: 8, name: 'Daisy', type: 'Cat', age: 2, img: 'animals/petshop-img/cat.webp' },
    { id: 9, name: 'Patches', type: 'Capybara', age: 5, img: 'animals/petshop-img/capybaras/capybara01.jpg' },
    { id: 10, name: 'Willow', type: 'Capybara', age: 4, img: 'animals/petshop-img/capybaras/capybara02.jpg' },
    { id: 11, name: 'Pip', type: 'Bird', age: 1, img: 'animals/petshop-img/birds/bird01.jpg' },
    { id: 12, name: 'Sky', type: 'Bird', age: 1, img: 'animals/petshop-img/birds/bird02.jpg' },
];

function displayPets(petsToDisplay) {
    const petList = document.getElementById('pet-list');
    petList.innerHTML = '';

    if (petsToDisplay.length === 0) {
        petList.innerHTML = '<p class="no-pets-message">No pets match your current filters.</p>';
        return;
    }

    petsToDisplay.forEach(pet => {
        const petItem = document.createElement('div');
        petItem.classList.add('pet');

        petItem.innerHTML = `
            <img src="${pet.img}" alt="${pet.name}">
            <p>${pet.name} - ${pet.type}</p>
            <p>Age: ${pet.age} years</p>
            <button onclick="adoptPet()">Adopt Now</button>
        `;

        petList.appendChild(petItem);
    });
}

function filterPets() {
    const checkboxes = document.querySelectorAll('.filter-checkbox:checked');
    const selectedTypes = Array.from(checkboxes).map(checkbox => checkbox.value);
    let filteredPets = [];

    if (selectedTypes.length === 0) {
        filteredPets = allPets;
    } else {
        filteredPets = allPets.filter(pet => selectedTypes.includes(pet.type));
    }

    console.log("Filtered Pets:", filteredPets);
    displayPets(filteredPets);
}

document.addEventListener('DOMContentLoaded', () => {
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');

    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterPets);
    });

    filterPets();
});