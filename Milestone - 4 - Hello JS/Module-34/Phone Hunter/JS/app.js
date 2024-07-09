const loadData = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()

    const object = data.data
    // console.log(object);
    displayPhones(object)
}

const createCard = (elements, container) => {
    elements.forEach(element => {
        // console.log(element);
        const card = document.createElement('div');
        card.classList = `card bg-base-100 w-full shadow-xl`;

        card.innerHTML = `
            <figure>
                <img class="pt-10" src="${element.image}" alt="phone" />
            </figure>
            <div class="card-body">
                <p>Brand ${element.brand}</p>
                <h2 class="card-title">${element.phone_name}</h2>
                <div class="card-actions">
                    <button class="btn btn-primary w-full">Buy Now</button>
                </div>
            </div>
        `
        container.appendChild(card);
    });
}

const displayPhones = (phones) => {
    const phoneContainer = document.getElementById('phone_container');
    phoneContainer.textContent = '';

    const length = phones.length;
    const showAllButtonSection = document.getElementById('showAllButtonSection');
    
    const showAllButton = document.getElementById('showAllButton');
    if (length > 6) {
        phones = phones.slice(0, 6)
        showAllButtonSection.classList.remove('hidden');
        showAllButton.innerText = `Show All (${length})`;
    }
    else {
        showAllButtonSection.classList.add('hidden');
    }

    createCard(phones, phoneContainer);
}

const searchPhone = () => {
    const phoneSearchField = document.getElementById('phoneInputField');
    phoneSearchValue = phoneSearchField.value;

    if (phoneSearchValue === '') {
        alert('Please type your phone name');
    }
    else {
        loadData(phoneSearchValue);

        // phoneSearchField.value = '';
    }
}

// for by default ui
loadData('iphone')