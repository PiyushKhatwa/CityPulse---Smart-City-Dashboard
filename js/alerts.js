const alertsData = [
    {
        id: 1,
        category: 'traffic',
        title: 'Heavy Traffic on Main Street',
        description: 'Due to ongoing construction work, expect delays of 15-20 minutes on Main Street between 8 AM - 6 PM.',
        date: '2025-11-16',
        priority: 'high',
        views: 1247
    },
    {
        id: 2,
        category: 'health',
        title: 'Free Health Checkup Camp',
        description: 'City Hospital is organizing a free health checkup camp this weekend. Registration is mandatory.',
        date: '2025-11-15',
        priority: 'medium',
        views: 856
    },
    {
        id: 3,
        category: 'weather',
        title: 'Rainfall Expected Tomorrow',
        description: 'Meteorological department predicts moderate to heavy rainfall tomorrow. Carry umbrellas and drive safely.',
        date: '2025-11-16',
        priority: 'medium',
        views: 2134
    },
    {
        id: 4,
        category: 'public',
        title: 'Public Library Reopening',
        description: 'After renovations, the Central Public Library will reopen on November 20th with extended hours.',
        date: '2025-11-14',
        priority: 'low',
        views: 542
    },
    {
        id: 5,
        category: 'traffic',
        title: 'Road Closure - Park Avenue',
        description: 'Park Avenue will be closed for annual marathon event on Sunday from 6 AM to 12 PM.',
        date: '2025-11-13',
        priority: 'high',
        views: 1893
    },
    {
        id: 6,
        category: 'health',
        title: 'Vaccination Drive',
        description: 'Annual flu vaccination drive starts next week at all primary health centers. Free for senior citizens.',
        date: '2025-11-15',
        priority: 'medium',
        views: 1156
    },
    {
        id: 7,
        category: 'weather',
        title: 'Heat Wave Warning',
        description: 'Temperature expected to rise above 38°C. Stay hydrated and avoid direct sunlight during peak hours.',
        date: '2025-11-14',
        priority: 'high',
        views: 3421
    },
    {
        id: 8,
        category: 'public',
        title: 'New Recycling Program',
        description: 'City launches new recycling program. Separate bins for plastic, paper, and organic waste will be provided.',
        date: '2025-11-12',
        priority: 'low',
        views: 723
    }
];

let filteredAlerts = [...alertsData];
let currentCategory = 'all';
let currentView = 'grid';
let selectedPriorities = ['high', 'medium', 'low'];
let searchQuery = '';

const priorityConfig = {
    high: { symbol: '▲▲▲', label: 'Critical' },
    medium: { symbol: '▲▲', label: 'Important' },
    low: { symbol: '▲', label: 'Standard' }
};

function updateCategoryCounts() {
    const counts = {
        all: alertsData.length,
        traffic: alertsData.filter(a => a.category === 'traffic').length,
        health: alertsData.filter(a => a.category === 'health').length,
        weather: alertsData.filter(a => a.category === 'weather').length,
        public: alertsData.filter(a => a.category === 'public').length
    };
    
    Object.keys(counts).forEach(category => {
        const countEl = document.querySelector(`[data-count="${category}"]`);
        if (countEl) countEl.textContent = counts[category];
    });
}

function renderAlerts(alerts) {
    const alertsGrid = document.getElementById('alerts-grid');
    const showingCount = document.getElementById('showing-count');
    
    alertsGrid.innerHTML = '';
    showingCount.textContent = alerts.length;
    
    if (alerts.length === 0) {
        alertsGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📭</div>
                <h3>No alerts found</h3>
                <p>Try adjusting your filters or search criteria</p>
            </div>
        `;
        return;
    }
    
    alerts.forEach((alert, index) => {
        const alertCard = document.createElement('div');
        alertCard.className = `alert-card ${alert.category}`;
        alertCard.style.animationDelay = `${index * 0.05}s`;
        
        const priorityInfo = priorityConfig[alert.priority];
        
        if (currentView === 'grid') {
            alertCard.innerHTML = `
                <div class="alert-header">
                    <span class="alert-category ${alert.category}">${alert.category}</span>
                    <span class="alert-priority ${alert.priority}">
                        <span class="priority-symbol">${priorityInfo.symbol}</span>
                        <span class="priority-label">${priorityInfo.label}</span>
                    </span>
                </div>
                <h3 class="alert-title">${alert.title}</h3>
                <p class="alert-description">${alert.description}</p>
                <div class="alert-footer">
                    <p class="alert-date">${new Date(alert.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                    })}</p>
                    <div class="alert-meta">
                        <span>${alert.views.toLocaleString()} views</span>
                    </div>
                </div>
            `;
        } else {
            alertCard.innerHTML = `
                <div class="alert-header">
                    <span class="alert-category ${alert.category}">${alert.category}</span>
                    <span class="alert-priority ${alert.priority}">
                        <span class="priority-symbol">${priorityInfo.symbol}</span>
                        <span class="priority-label">${priorityInfo.label}</span>
                    </span>
                </div>
                <div class="alert-content">
                    <h3 class="alert-title">${alert.title}</h3>
                    <p class="alert-description">${alert.description}</p>
                </div>
                <div class="alert-meta-section">
                    <p class="alert-date">${new Date(alert.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                    })}</p>
                    <div class="alert-meta">
                        <span>${alert.views.toLocaleString()} views</span>
                    </div>
                </div>
            `;
        }
        
        alertsGrid.appendChild(alertCard);
    });
}

function applyFilters() {
    let filtered = [...alertsData];
    
    if (currentCategory !== 'all') {
        filtered = filtered.filter(alert => alert.category === currentCategory);
    }
    
    filtered = filtered.filter(alert => selectedPriorities.includes(alert.priority));
    
    if (searchQuery) {
        filtered = filtered.filter(alert => 
            alert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            alert.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    filteredAlerts = filtered;
    renderAlerts(filteredAlerts);
    updateActiveFilters();
}

function updateActiveFilters() {
    const activeFiltersContainer = document.getElementById('active-filters');
    activeFiltersContainer.innerHTML = '';
    
    if (currentCategory !== 'all') {
        const tag = document.createElement('div');
        tag.className = 'filter-tag';
        tag.innerHTML = `
            Category: ${currentCategory}
            <span class="filter-tag-remove" data-type="category">×</span>
        `;
        activeFiltersContainer.appendChild(tag);
    }
    
    if (selectedPriorities.length < 3) {
        selectedPriorities.forEach(priority => {
            const tag = document.createElement('div');
            tag.className = 'filter-tag';
            tag.innerHTML = `
                ${priorityConfig[priority].label}
                <span class="filter-tag-remove" data-type="priority" data-value="${priority}">×</span>
            `;
            activeFiltersContainer.appendChild(tag);
        });
    }
    
    if (searchQuery) {
        const tag = document.createElement('div');
        tag.className = 'filter-tag';
        tag.innerHTML = `
            Search: "${searchQuery}"
            <span class="filter-tag-remove" data-type="search">×</span>
        `;
        activeFiltersContainer.appendChild(tag);
    }
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
        case 'views':
            sorted.sort((a, b) => b.views - a.views);
            break;
    }
    
    renderAlerts(sorted);
}

document.querySelectorAll('.sidebar-filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.sidebar-filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentCategory = this.dataset.category;
        applyFilters();
    });
});

document.querySelectorAll('.priority-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const priority = this.value;
        if (this.checked) {
            selectedPriorities.push(priority);
        } else {
            selectedPriorities = selectedPriorities.filter(p => p !== priority);
        }
        applyFilters();
    });
});

document.getElementById('search-input').addEventListener('input', function(e) {
    searchQuery = e.target.value.trim();
    applyFilters();
});

document.getElementById('sort-select').addEventListener('change', function() {
    sortAlerts(this.value);
});

document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentView = this.dataset.view;
        
        const alertsGrid = document.getElementById('alerts-grid');
        alertsGrid.classList.remove('grid-view', 'list-view');
        alertsGrid.classList.add(`${currentView}-view`);
        
        renderAlerts(filteredAlerts);
    });
});

document.getElementById('clear-filters').addEventListener('click', function() {
    currentCategory = 'all';
    selectedPriorities = ['high', 'medium', 'low'];
    searchQuery = '';
    
    document.querySelector('[data-category="all"]').click();
    document.querySelectorAll('.priority-checkbox input').forEach(cb => cb.checked = true);
    document.getElementById('search-input').value = '';
    document.getElementById('sort-select').value = 'date-desc';
    
    applyFilters();
});

document.getElementById('active-filters').addEventListener('click', function(e) {
    const removeBtn = e.target.closest('.filter-tag-remove');
    if (removeBtn) {
        const type = removeBtn.dataset.type;
        const value = removeBtn.dataset.value;
        
        if (type === 'category') {
            document.querySelector('[data-category="all"]').click();
        } else if (type === 'priority') {
            const checkbox = document.querySelector(`.priority-checkbox input[value="${value}"]`);
            checkbox.checked = false;
            checkbox.dispatchEvent(new Event('change'));
        } else if (type === 'search') {
            document.getElementById('search-input').value = '';
            searchQuery = '';
            applyFilters();
        }
    }
});

updateCategoryCounts();
renderAlerts(alertsData);
updateActiveFilters();