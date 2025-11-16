const alertsData = [
    {
        id: 1,
        category: 'traffic',
        title: 'Heavy Traffic on Main Street',
        description: 'Due to ongoing construction work, expect delays of 15-20 minutes on Main Street between 8 AM - 6 PM.',
        date: '2025-11-16',
        priority: 'high'
    },
    {
        id: 2,
        category: 'health',
        title: 'Free Health Checkup Camp',
        description: 'City Hospital is organizing a free health checkup camp this weekend. Registration is mandatory.',
        date: '2025-11-15',
        priority: 'medium'
    },
    {
        id: 3,
        category: 'weather',
        title: 'Rainfall Expected Tomorrow',
        description: 'Meteorological department predicts moderate to heavy rainfall tomorrow. Carry umbrellas and drive safely.',
        date: '2025-11-16',
        priority: 'medium'
    },
    {
        id: 4,
        category: 'public',
        title: 'Public Library Reopening',
        description: 'After renovations, the Central Public Library will reopen on November 20th with extended hours.',
        date: '2025-11-14',
        priority: 'low'
    },
    {
        id: 5,
        category: 'traffic',
        title: 'Road Closure - Park Avenue',
        description: 'Park Avenue will be closed for annual marathon event on Sunday from 6 AM to 12 PM.',
        date: '2025-11-13',
        priority: 'high'
    },
    {
        id: 6,
        category: 'health',
        title: 'Vaccination Drive',
        description: 'Annual flu vaccination drive starts next week at all primary health centers. Free for senior citizens.',
        date: '2025-11-15',
        priority: 'medium'
    },
    {
        id: 7,
        category: 'weather',
        title: 'Heat Wave Warning',
        description: 'Temperature expected to rise above 38°C. Stay hydrated and avoid direct sunlight during peak hours.',
        date: '2025-11-14',
        priority: 'high'
    },
    {
        id: 8,
        category: 'public',
        title: 'New Recycling Program',
        description: 'City launches new recycling program. Separate bins for plastic, paper, and organic waste will be provided.',
        date: '2025-11-12',
        priority: 'low'
    }
];

let filteredAlerts = [...alertsData];

function renderAlerts(alerts) {
    const alertsGrid = document.getElementById('alerts-grid');
    alertsGrid.innerHTML = '';
    
    alerts.forEach(alert => {
        const alertCard = document.createElement('div');
        alertCard.className = `alert-card ${alert.category}`;
        alertCard.innerHTML = `
            <div class="alert-header">
                <span class="alert-category ${alert.category}">${alert.category}</span>
                <span class="alert-priority ${alert.priority}">${alert.priority}</span>
            </div>
            <h3 class="alert-title">${alert.title}</h3>
            <p class="alert-description">${alert.description}</p>
            <p class="alert-date">📅 ${new Date(alert.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        `;
        alertsGrid.appendChild(alertCard);
    });
}

function filterAlerts(category) {
    if (category === 'all') {
        filteredAlerts = [...alertsData];
    } else {
        filteredAlerts = alertsData.filter(alert => alert.category === category);
    }
    renderAlerts(filteredAlerts);
}

function sortAlerts(sortBy) {
    let sorted = [...filteredAlerts];
    
    switch(sortBy) {
        case 'date-desc':
            sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'date-asc':
            sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'priority':
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            sorted.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
            break;
    }
    
    renderAlerts(sorted);
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterAlerts(this.dataset.category);
    });
});

document.getElementById('sort-select').addEventListener('change', function() {
    sortAlerts(this.value);
});

renderAlerts(alertsData);