// Map inputs to display elements
const fields = [
    { input: 'playerName', display: 'displayPlayerName' },
    { input: 'playerLastName', display: 'displayPlayerLastName' },
    { input: 'teamName', display: 'displayTeamName' },
    { input: 'category', display: 'displayCategory' },
    { input: 'documentId', display: 'displayDocumentId' },
    { input: 'bloodType', display: 'displayBloodType' },
    { input: 'emergencyContact', display: 'displayEmergencyContact' },
    { input: 'eps', display: 'displayEps' }
];

// Add event listeners for text inputs
fields.forEach(field => {
    const inputEl = document.getElementById(field.input);
    const displayEl = document.getElementById(field.display);

    if (inputEl && displayEl) {
        inputEl.addEventListener('input', (e) => {
            // Default text if empty
            if (e.target.value.trim() === '') {
                displayEl.textContent = '';
            } else {
                displayEl.textContent = e.target.value;
            }
        });
    }
});

// Photo upload handling
const photoInput = document.getElementById('photoUpload');
const cardPhoto = document.getElementById('cardPhoto');

photoInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            cardPhoto.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

// ID Photo upload handling
const idPhotoInput = document.getElementById('idPhotoUpload');
const cardIdPhoto = document.getElementById('cardIdPhoto');

idPhotoInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            cardIdPhoto.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});



// Download functionality
document.getElementById('downloadBtn').addEventListener('click', () => {
    const cardElement = document.getElementById('idCard');

    html2canvas(cardElement, {
        scale: 2, // Higher resolution
        backgroundColor: null, // Transparent background if rounded
        useCORS: true // Try to handle cross-origin images if any
    }).then(canvas => {
        // Create a temporary link to download
        const link = document.createElement('a');
        link.download = `carnet-${document.getElementById('playerName').value || 'jugador'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});
