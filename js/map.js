const zoneData = {
    hospital: {
        title: 'Hospitals & Healthcare',
        info: {
            count: '15 Hospitals',
            facilities: [
                'City General Hospital - 24/7 Emergency',
                'St. Mary\'s Medical Center',
                'Children\'s Hospital',
                'Cardiac Care Institute'
            ],
            contact: 'Emergency: 911 | Helpline: +1-800-HEALTH'
        }
    },
    school: {
        title: 'Educational Institutions',
        info: {
            count: '87 Schools & Colleges',
            facilities: [
                'Central University',
                'Science & Technology Institute',
                'International School',
                'Community College'
            ],
            contact: 'Education Dept: +1-800-EDU'
        }
    },
    park: {
        title: 'Parks & Recreation',
        info: {
            count: '42 Parks',
            facilities: [
                'Central Park - 200 acres',
                'Riverside Park with jogging track',
                'Children\'s Play Area',
                'Botanical Gardens'
            ],
            contact: 'Parks Dept: +1-800-PARKS'
        }
    },
    mall: {
        title: 'Shopping Centers',
        info: {
            count: '12 Major Malls',
            facilities: [
                'City Mall - 300+ stores',
                'Premium Outlets',
                'Downtown Shopping Complex',
                'Tech Plaza'
            ],
            contact: 'Info: +1-800-SHOP'
        }
    },
    transport: {
        title: 'Public Transport',
        info: {
            count: '8 Metro Stations',
            facilities: [
                'Central Station - Hub',
                'Bus Terminal - 50 routes',
                'Metro Lines: Red, Blue, Green',
                'Bike Sharing: 100 stations'
            ],
            contact: 'Transport Info: +1-800-METRO'
        }
    },
    restaurant: {
        title: 'Restaurants & Dining',
        info: {
            count: '200+ Restaurants',
            facilities: [
                'Fine Dining: 25 locations',
                'Fast Food Chains: 80 outlets',
                'Local Cuisine: 50+ restaurants',
                'Cafes & Bakeries: 45 spots'
            ],
            contact: 'Food Safety: +1-800-FOOD'
        }
    },
    library: {
        title: 'Libraries & Resources',
        info: {
            count: '18 Libraries',
            facilities: [
                'Central Library - 500k books',
                'Digital Resource Centers',
                'Community Learning Centers',
                'Research Archives'
            ],
            contact: 'Library Services: +1-800-BOOK'
        }
    },
    police: {
        title: 'Police & Safety',
        info: {
            count: '12 Police Stations',
            facilities: [
                'Central Police Headquarters',
                '24/7 Emergency Response',
                'Traffic Control Centers',
                'Community Policing Units'
            ],
            contact: 'Emergency: 911 | Non-Emergency: +1-800-POLICE'
        }
    },
    residential: {
        title: 'Residential Areas',
        info: {
            count: '150 Neighborhoods',
            facilities: [
                'Population: 1.2M residents',
                'Apartment Complexes: 500+',
                'Gated Communities: 80',
                'Affordable Housing: 120 projects'
            ],
            contact: 'Housing Authority: +1-800-HOME'
        }
    },
    commercial: {
        title: 'Commercial District',
        info: {
            count: '2000+ Businesses',
            facilities: [
                'Office Towers: 50+',
                'Business Parks: 15',
                'Co-working Spaces: 30',
                'Convention Centers: 3'
            ],
            contact: 'Business Support: +1-800-BIZ'
        }
    },
    industrial: {
        title: 'Industrial Zone',
        info: {
            count: '8 Industrial Parks',
            facilities: [
                'Manufacturing Units: 200+',
                'Tech Parks: 5',
                'Warehouses: 150',
                'Logistics Centers: 12'
            ],
            contact: 'Industrial Authority: +1-800-IND'
        }
    }
};

const zones = document.querySelectorAll('.zone');
const modal = document.getElementById('zone-modal');
const closeBtn = document.getElementById('close-modal');

zones.forEach(zone => {
    zone.addEventListener('click', function() {
        const zoneName = this.dataset.zone;
        const data = zoneData[zoneName];
        
        document.getElementById('modal-title').textContent = data.title;
        
        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
            <div class="zone-info">
                <h4>${data.info.count}</h4>
                <h4>Key Facilities:</h4>
                <ul>
                    ${data.info.facilities.map(facility => `<li>${facility}</li>`).join('')}
                </ul>
                <div class="zone-contact">
                    <h4>Contact Information:</h4>
                    <p>${data.info.contact}</p>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
    });
    
    zone.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.1)';
    });
    
    zone.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1)';
    });
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});