const map = L.map('map');
map.setView([4.533888, -75.681107], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

const parqueaderos = [
    { name: 'Parqueadero 1', lat: 4.532047, lng: -75.681577, info: 'Información sobre Parqueadero 1' },
    { name: 'Parqueadero 2', lat: 4.530976, lng: -75.683888, info: 'Información sobre Parqueadero 2' },
    // Agregar más parqueaderos si es necesario
];

for (const parqueadero of parqueaderos) {
    const marker = L.marker([parqueadero.lat, parqueadero.lng]).addTo(map);
    marker.bindPopup(parqueadero.name);

    marker.on('click', () => {
        openParqueaderoModal(parqueadero);
    });
}

function openParqueaderoModal(parqueadero) {
    const modalBody = document.getElementById('parqueaderoModalBody');
    modalBody.innerHTML = `
        <h3>${parqueadero.name}</h3>
        <p>${parqueadero.info}</p>
    `;

    const modal = new bootstrap.Modal(document.getElementById('parqueaderoModal'));
    modal.show();
}
