const loadData = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()

    const object = data.data
    // console.log(object);
    displayPhones(object, isShowAll)
}

const displayPhones = (phones, isShowAll) => {
    const phoneContainer = document.getElementById('phone_container');
    phoneContainer.textContent = '';

    const showAllButtonSection = document.getElementById('showAllButtonSection');

    if (isShowAll) {
        createCard(phones, phoneContainer);
        showAllButtonSection.classList.add('hidden');
    }
    else {
        const length = phones.length;

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
                    <button onclick="showDetails('${element.slug}')" class="btn btn-primary w-full">Details</button>
                </div>
            </div>
        `
        container.appendChild(card);
        spinnerForCards(false);
    });
}

const getModal = (data, container) => {
    const dialog = document.getElementById(container);

    const sensorsList = data.mainFeatures.sensors.map(sensor => `<li class="text-xl">${sensor}</li>`).join('');

    const div = document.createElement('div');
    div.classList = `modal-box`;
    div.innerHTML = `
        <h3 class="text-3xl font-bold mb-6 text-center">${data.name}</h3>

        <p class="text-xl mb-4">
            <span class="font-semibold">Storage: </span>
            ${data.mainFeatures.storage}
        </p>

        <p class="text-xl mb-4">
            <span class="font-semibold">Display Size: </span>
            ${data.mainFeatures.displaySize}
        </p>

        <p class="text-xl mb-4">
            <span class="font-semibold">Chipset: </span>
            ${data.mainFeatures.chipSet}
        </p>

        <p class="text-xl mb-4">
            <span class="font-semibold">Memory: </span>
            ${data.mainFeatures.memory}
        </p>

        <p class="text-xl mb-4">
            <span class="font-semibold">Slug: </span>
            ${data.slug}
        </p>

        <p class="text-xl mb-4">
            <span class="font-semibold">Release data: </span>
            ${data.releaseDate}
        </p>

        <p class="text-xl mb-4">
            <span class="font-semibold">Brand: </span>
            ${data.brand}
        </p>

        <p class="text-xl mb-4">
            <span class="font-semibold">Sensors: </span>
            <ol class="list-decimal list-inside">${sensorsList}</ol>
        </p>

        <div class="modal-action">
            <form method="dialog">
                <button class="btn">Close</button>
            </form>
        </div>
    `

    dialog.appendChild(div);
}

const showDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = (await res.json()).data;

    modalForPhoneDetails.showModal()

    getModal(data, 'modalForPhoneDetails');

    // phone details
    console.log(data);
}

const searchPhone = (isShowAll) => {
    const phoneSearchField = document.getElementById('phoneInputField');
    phoneSearchValue = phoneSearchField.value;

    if (phoneSearchValue === '') {
        alert('Please type your phone name');
    }
    else {
        spinnerForCards(true);
        loadData(phoneSearchValue, isShowAll);
        // phoneSearchField.value = '';
    }
}

const spinnerForCards = (isLoading) => {
    const spinnerForCards = document.getElementById('spinnerForCards');
    if (isLoading) {
        spinnerForCards.classList.remove('hidden');
    }
    else {
        spinnerForCards.classList.add('hidden');
    }
}

const showAll = () => {
    let isShowAll = true;
    searchPhone(isShowAll)
}

// for by default ui
spinnerForCards(true);
loadData('iphone')