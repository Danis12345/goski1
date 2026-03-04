const DOCS_DATA = [
    { id: 'passport', title: 'Паспорт', icon: '🛡️', colorClass: 'card-0' },
    { id: 'family', title: 'Семья и дети', icon: '🏠', colorClass: 'card-1' },
    { id: 'auto', title: 'Авто', icon: '🚗', colorClass: 'card-2' }
];

function renderCards() {
    const container = document.getElementById('cards-container');
    container.innerHTML = DOCS_DATA.map((doc, index) => `
        <div class="doc-card ${doc.colorClass}" onclick="handleCardClick('${doc.id}')">
            <div class="doc-content">
                <span class="doc-icon">${doc.icon}</span>
                <span class="doc-label">${doc.title}</span>
            </div>
            <div class="doc-action">📲</div>
        </div>
    `).join('');
}

function handleCardClick(id) {
    if (id === 'passport') {
        document.getElementById('main-screen').classList.add('hidden');
        document.getElementById('passport-screen').classList.remove('hidden');
    } else {
        alert("Этот раздел находится в разработке (практика рефакторинга!)");
    }
}

function closePassport() {
    document.getElementById('passport-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
}

// Запуск при загрузке
renderCards();