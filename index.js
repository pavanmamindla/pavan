const adsData = {
    wall: [],
    auto: [],
    helmet: []
};

function showAds(category) {
    const adsList = document.getElementById('ads-list');
    adsList.innerHTML = '';

    const ads = adsData[category];
    ads.forEach(ad => {
        const adCard = document.createElement('div');
        adCard.classList.add('ad-card');
        adCard.innerHTML = `
            <h3>${ad.title}</h3>
            <p>${ad.description}</p>
            <p><strong>Price:</strong> $${ad.price}</p>
            <button>Book Now</button>
        `;
        adsList.appendChild(adCard);
    });
}

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const category = document.getElementById('ad-category').value;
    const title = document.getElementById('ad-title').value;
    const description = document.getElementById('ad-description').value;
    const price = document.getElementById('ad-price').value;

    const newAd = { title, description, price: parseInt(price) };
    adsData[category].push(newAd);

    alert("Ad space registered successfully!");

    event.target.reset();
    showAds(category);
});
