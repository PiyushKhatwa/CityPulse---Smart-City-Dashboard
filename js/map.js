const zoneData = {
    central: {
        name: 'Central Business District',
        type: 'Commercial Hub',
        population: '450,000',
        area: '85 km²',
        density: 'High',
        rating: '4.8/5',
        description: 'The economic heart of the city featuring modern skyscrapers, international business centers, and premium shopping destinations.',
        highlights: [
            'World Trade Center - 50-floor landmark building',
            'Central Mall - 300+ retail stores and dining',
            'Business Innovation Park - Tech startups hub',
            'Metro Central Hub - 4 metro line convergence',
            'International Convention Center - 5,000 capacity'
        ],
        statistics: {
            'Corporate Offices': '1,200+',
            'Retail Outlets': '3,500+',
            'Hotels': '35',
            'Hospitals': '12',
            'Schools': '45',
            'Parks': '8',
            'Daily Commuters': '280K'
        },
        infrastructure: {
            'Metro Stations': '8',
            'Bus Routes': '45',
            'Parking Spaces': '25,000',
            'Fiber Coverage': '100%'
        },
        contact: {
            office: 'Central District Administration',
            phone: '+1-800-555-CENTRAL',
            email: 'central@citypulse.gov',
            website: 'citypulse.gov/central',
            hours: '24/7 Emergency Services'
        }
    },
    north: {
        name: 'North Zone',
        type: 'Residential & Green',
        population: '320,000',
        area: '120 km²',
        density: 'Medium',
        rating: '4.6/5',
        description: 'Peaceful residential area with sprawling parks, excellent educational institutions, and family-friendly neighborhoods.',
        highlights: [
            'Green Valley Park - 200-acre natural reserve',
            'North Schools Complex - 15 premier institutions',
            'Community Sports Stadium - 15,000 seating',
            'Botanical Research Gardens - 500+ species',
            'Family Recreation Centers - 12 locations'
        ],
        statistics: {
            'Residential Units': '75,000',
            'Schools & Colleges': '65',
            'Parks & Gardens': '25',
            'Healthcare Centers': '8',
            'Community Centers': '18',
            'Sports Facilities': '22',
            'Libraries': '10'
        },
        infrastructure: {
            'Metro Stations': '5',
            'Bus Routes': '28',
            'Cycling Paths': '45 km',
            'Green Coverage': '40%'
        },
        contact: {
            office: 'North Zone Council',
            phone: '+1-800-555-NORTH',
            email: 'north@citypulse.gov',
            website: 'citypulse.gov/north',
            hours: 'Mon-Fri 9AM-6PM'
        }
    },
    northeast: {
        name: 'Northeast Zone',
        type: 'Technology & Innovation',
        population: '280,000',
        area: '95 km²',
        density: 'Medium-High',
        rating: '4.7/5',
        description: 'Cutting-edge technology district with innovation centers, research facilities, and modern infrastructure.',
        highlights: [
            'Tech Innovation Park - 200+ companies',
            'AI Research Center - Advanced computing',
            'University Science Campus - 12,000 students',
            'Startup Incubator Hub - 150 startups',
            'Co-working Spaces Network - 50 locations'
        ],
        statistics: {
            'Tech Companies': '200+',
            'Research Labs': '45',
            'Startup Success Rate': '68%',
            'Patent Filings': '1,200/year',
            'Employment': '85,000 jobs',
            'Schools': '40',
            'Innovation Centers': '15'
        },
        infrastructure: {
            'High-speed Internet': '10 Gbps',
            'Smart Buildings': '120',
            'EV Charging': '200 stations',
            'Metro Stations': '6'
        },
        contact: {
            office: 'Northeast Tech District',
            phone: '+1-800-555-TECH',
            email: 'northeast@citypulse.gov',
            website: 'citypulse.gov/northeast',
            hours: '24/7 Support'
        }
    },
    east: {
        name: 'East Zone',
        type: 'Industrial & Logistics',
        population: '350,000',
        area: '110 km²',
        density: 'Medium',
        rating: '4.4/5',
        description: 'Major industrial hub with manufacturing facilities, logistics centers, and port operations.',
        highlights: [
            'Industrial Manufacturing Park - 500 factories',
            'International Logistics Hub - Multi-modal',
            'Warehousing Complex - 2M sq ft storage',
            'Export Processing Zone - Tax benefits',
            'Port & Container Terminal - 24/7 operations'
        ],
        statistics: {
            'Manufacturing Units': '500',
            'Warehouse Space': '2M sq ft',
            'Employment': '125,000 jobs',
            'Export Value': '$2.5B annually',
            'Container Throughput': '500K TEU',
            'Industrial Parks': '8',
            'Training Centers': '12'
        },
        infrastructure: {
            'Rail Connectivity': '4 lines',
            'Port Access': 'Direct',
            'Heavy Vehicle Routes': '15',
            'Power Supply': '99.9% uptime'
        },
        contact: {
            office: 'East Industrial Authority',
            phone: '+1-800-555-EAST',
            email: 'east@citypulse.gov',
            website: 'citypulse.gov/east',
            hours: '24/7 Operations'
        }
    },
    southeast: {
        name: 'Southeast Zone',
        type: 'Arts & Culture',
        population: '240,000',
        area: '75 km²',
        density: 'Medium',
        rating: '4.9/5',
        description: 'Vibrant cultural district featuring museums, theaters, art galleries, and entertainment venues.',
        highlights: [
            'National Cultural Center - 5 performance halls',
            'Museum Complex - 8 specialty museums',
            'Theater District - 12 professional venues',
            'Contemporary Art Quarter - 40+ galleries',
            'Music Conservatory - World-class acoustics'
        ],
        statistics: {
            'Museums': '8',
            'Theaters': '12',
            'Art Galleries': '40+',
            'Annual Visitors': '2.5M',
            'Cultural Events': '500/year',
            'Music Venues': '25',
            'Artist Studios': '200+'
        },
        infrastructure: {
            'Event Spaces': '18',
            'Tourism Centers': '6',
            'Metro Stations': '4',
            'Parking': '8,000 spaces'
        },
        contact: {
            office: 'Southeast Cultural Council',
            phone: '+1-800-555-CULTURE',
            email: 'southeast@citypulse.gov',
            website: 'citypulse.gov/southeast',
            hours: 'Varies by venue'
        }
    },
    south: {
        name: 'South Zone',
        type: 'Mixed-Use Urban',
        population: '300,000',
        area: '90 km²',
        density: 'High',
        rating: '4.5/5',
        description: 'Dynamic mixed-use area combining residential towers, shopping centers, and entertainment facilities.',
        highlights: [
            'Premium Shopping Malls - 8 major centers',
            'Luxury Residential Towers - 150 high-rises',
            'Entertainment Complex - Cinema & gaming',
            'Medical Excellence Center - Multi-specialty',
            'International School Network - 15 branches'
        ],
        statistics: {
            'Residential Towers': '150',
            'Shopping Centers': '8',
            'Restaurants': '450+',
            'Medical Facilities': '9',
            'Schools': '50',
            'Entertainment': '35 venues',
            'Hotels': '18'
        },
        infrastructure: {
            'Metro Stations': '7',
            'Bus Routes': '38',
            'Parking Spaces': '18,000',
            'Smart Grid': 'Fully integrated'
        },
        contact: {
            office: 'South District Office',
            phone: '+1-800-555-SOUTH',
            email: 'south@citypulse.gov',
            website: 'citypulse.gov/south',
            hours: 'Mon-Sat 8AM-8PM'
        }
    },
    southwest: {
        name: 'Southwest Zone',
        type: 'Heritage & History',
        population: '220,000',
        area: '70 km²',
        density: 'Low-Medium',
        rating: '4.8/5',
        description: 'Historic district preserving architectural heritage, traditional markets, and cultural landmarks.',
        highlights: [
            'Heritage Conservation Quarter - 100+ buildings',
            'Traditional Bazaar Network - 25 markets',
            'Historical Museum Complex - 8 museums',
            'Architectural Walking Tours - Daily guided',
            'Cultural Heritage Center - Education hub'
        ],
        statistics: {
            'Heritage Buildings': '100+',
            'Traditional Markets': '25',
            'Museums': '8',
            'Art Galleries': '20',
            'Annual Tourists': '1.2M',
            'Restoration Projects': '35 active',
            'Cultural Events': '200/year'
        },
        infrastructure: {
            'Heritage Routes': '12',
            'Visitor Centers': '8',
            'Metro Station': '3',
            'Preservation Budget': '$15M/year'
        },
        contact: {
            office: 'Heritage Conservation Board',
            phone: '+1-800-555-HERITAGE',
            email: 'southwest@citypulse.gov',
            website: 'citypulse.gov/southwest',
            hours: 'Daily 9AM-6PM'
        }
    },
    west: {
        name: 'West Zone',
        type: 'Suburban Residential',
        population: '290,000',
        area: '85 km²',
        density: 'Medium',
        rating: '4.6/5',
        description: 'Family-oriented suburban area with quality schools, recreational facilities, and quiet neighborhoods.',
        highlights: [
            'Family Housing Communities - 50,000 units',
            'Educational Excellence Hub - 55 schools',
            'Community Recreation Centers - 20 facilities',
            'Neighborhood Parks Network - 30 parks',
            'Local Shopping Precincts - 15 centers'
        ],
        statistics: {
            'Housing Units': '50,000',
            'Schools': '55',
            'Parks': '30',
            'Community Centers': '20',
            'Healthcare': '8 facilities',
            'Sports Grounds': '18',
            'Shopping Centers': '15'
        },
        infrastructure: {
            'Metro Stations': '6',
            'School Buses': '120 routes',
            'Bike Paths': '35 km',
            'Green Spaces': '35%'
        },
        contact: {
            office: 'West Residential Council',
            phone: '+1-800-555-WEST',
            email: 'west@citypulse.gov',
            website: 'citypulse.gov/west',
            hours: 'Mon-Fri 8AM-5PM'
        }
    },
    northwest: {
        name: 'Northwest Zone',
        type: 'Nature & Recreation',
        population: '200,000',
        area: '60 km²',
        density: 'Low',
        rating: '4.9/5',
        description: 'Serene natural area with protected reserves, outdoor activities, and eco-friendly developments.',
        highlights: [
            'Nature Reserve - 500-acre protected forest',
            'Hiking Trail Network - 50 km marked paths',
            'Eco-Tourism Centers - 6 locations',
            'Wildlife Sanctuary - 200+ species',
            'Adventure Sports Complex - Rock climbing, zip-lining'
        ],
        statistics: {
            'Protected Forest': '500 acres',
            'Hiking Trails': '50 km',
            'Wildlife Species': '200+',
            'Annual Visitors': '800K',
            'Eco-Lodges': '12',
            'Adventure Activities': '15 types',
            'Bird Species': '120+'
        },
        infrastructure: {
            'Visitor Centers': '6',
            'Trail Markers': '250',
            'Emergency Shelters': '10',
            'Eco-Transport': 'Electric shuttles'
        },
        contact: {
            office: 'Northwest Conservation Office',
            phone: '+1-800-555-NATURE',
            email: 'northwest@citypulse.gov',
            website: 'citypulse.gov/northwest',
            hours: 'Daily 6AM-8PM'
        }
    }
};

const tooltip = document.getElementById('tooltip');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');
const zones = document.querySelectorAll('.zone');

zones.forEach(zone => {
    const zoneId = zone.dataset.zone;
    const data = zoneData[zoneId];

    zone.addEventListener('mouseenter', function() {
        this.style.opacity = '1';
        this.style.filter = 'brightness(1.15)';
        this.style.transform = 'scale(1.02)';
        
        tooltip.innerHTML = `
            <div class="tooltip-header">
                <div class="tooltip-title">${data.name}</div>
                <div class="tooltip-type">${data.type}</div>
            </div>
            <div class="tooltip-stats">
                <div class="tooltip-stat-item">
                    <span class="stat-icon">★</span>
                    <span class="stat-value">${data.rating}</span>
                </div>
                <div class="tooltip-stat-item">
                    <span class="stat-label">Population</span>
                    <span class="stat-value">${data.population}</span>
                </div>
                <div class="tooltip-stat-item">
                    <span class="stat-label">Area</span>
                    <span class="stat-value">${data.area}</span>
                </div>
                <div class="tooltip-stat-item">
                    <span class="stat-label">Density</span>
                    <span class="stat-value">${data.density}</span>
                </div>
            </div>
            <div class="tooltip-cta">Click for full details</div>
        `;
        tooltip.style.display = 'block';
        tooltip.style.opacity = '1';
    });

    zone.addEventListener('mouseleave', function() {
        this.style.opacity = '0.8';
        this.style.filter = '';
        this.style.transform = '';
        tooltip.style.opacity = '0';
        setTimeout(() => tooltip.style.display = 'none', 200);
    });

    // FIXED TOOLTIP POSITIONING
    zone.addEventListener('mousemove', function(e) {
        const tooltipWidth = 300;
        const tooltipHeight = 250;
        const offsetX = 20;
        const offsetY = 20;
        
        let left = e.clientX + offsetX;
        let top = e.clientY + offsetY;
        
        // Check right edge
        if (left + tooltipWidth > window.innerWidth) {
            left = e.clientX - tooltipWidth - offsetX;
        }
        
        // Check bottom edge
        if (top + tooltipHeight > window.innerHeight) {
            top = e.clientY - tooltipHeight - offsetY;
        }
        
        // Check top edge
        if (top < 0) {
            top = offsetY;
        }
        
        // Check left edge
        if (left < 0) {
            left = offsetX;
        }
        
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
    });

    zone.addEventListener('click', function() {
        document.getElementById('modal-body').innerHTML = `
            <div class="modal-hero">
                <div class="modal-hero-content">
                    <div class="zone-badge">${data.type}</div>
                    <h1 class="modal-title">${data.name}</h1>
                    <div class="modal-rating">
                        <span class="rating-stars">★ ${data.rating}</span>
                        <span class="rating-label">Community Rating</span>
                    </div>
                </div>
            </div>

            <div class="modal-description">
                <p>${data.description}</p>
            </div>

            <div class="modal-quick-stats">
                <div class="quick-stat">
                    <div class="quick-stat-value">${data.population}</div>
                    <div class="quick-stat-label">Population</div>
                </div>
                <div class="quick-stat">
                    <div class="quick-stat-value">${data.area}</div>
                    <div class="quick-stat-label">Total Area</div>
                </div>
                <div class="quick-stat">
                    <div class="quick-stat-value">${data.density}</div>
                    <div class="quick-stat-label">Density</div>
                </div>
            </div>

            <div class="modal-section">
                <h3 class="section-title">Key Highlights</h3>
                <div class="highlights-grid">
                    ${data.highlights.map((h, i) => `
                        <div class="highlight-card">
                            <div class="highlight-number">${String(i + 1).padStart(2, '0')}</div>
                            <div class="highlight-text">${h}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="modal-section">
                <h3 class="section-title">Statistics Overview</h3>
                <div class="stats-grid">
                    ${Object.entries(data.statistics).map(([key, value]) => `
                        <div class="stat-card">
                            <div class="stat-value">${value}</div>
                            <div class="stat-label">${key}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="modal-section">
                <h3 class="section-title">Infrastructure</h3>
                <div class="infrastructure-list">
                    ${Object.entries(data.infrastructure).map(([key, value]) => `
                        <div class="infrastructure-item">
                            <div class="infra-key">${key}</div>
                            <div class="infra-value">${value}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="modal-section contact-section">
                <h3 class="section-title">Contact Information</h3>
                <div class="contact-grid">
                    <div class="contact-item">
                        <div class="contact-label">Office</div>
                        <div class="contact-value">${data.contact.office}</div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-label">Phone</div>
                        <div class="contact-value">${data.contact.phone}</div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-label">Email</div>
                        <div class="contact-value">${data.contact.email}</div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-label">Website</div>
                        <div class="contact-value">${data.contact.website}</div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-label">Hours</div>
                        <div class="contact-value">${data.contact.hours}</div>
                    </div>
                </div>
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.onclick = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};