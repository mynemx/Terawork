// Categories data
const categories = [
  {
    icon: 'palette',
    name: 'Graphics & Design',
    description: 'Logos, branding, art & illustrations'
  },
  {
    icon: 'book-open',
    name: 'Writing & Translation',
    description: 'Content, copywriting, and translations'
  },
  {
    icon: 'video',
    name: 'Video & Animation',
    description: 'Video, motion graphics & animations'
  },
  {
    icon: 'code',
    name: 'Programming & Tech',
    description: 'Web, mobile, and software development'
  },
  {
    icon: 'bar-chart-2',
    name: 'Digital Marketing',
    description: 'SEO, social media, and brand campaigns'
  },
  {
    icon: 'music',
    name: 'Music & Audio',
    description: 'Music production and voice talent'
  },
  {
    icon: 'mic',
    name: 'Voice Over',
    description: 'Professional voice talent and narration'
  },
  {
    icon: 'camera',
    name: 'Photography',
    description: 'Professional photography services'
  },
  {
    icon: 'briefcase',
    name: 'Business',
    description: 'Business planning and consulting'
  },
  {
    icon: 'line-chart',
    name: 'Data',
    description: 'Data science and analytics'
  },
  {
    icon: 'shopping-bag',
    name: 'Lifestyle',
    description: 'Personal and lifestyle services'
  },
  {
    icon: 'truck',
    name: 'Delivery',
    description: 'Local courier and delivery services'
  }
];

// Popular services data
const services = [
  {
    image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'I will design a professional logo for your business or brand',
    price: 50,
    sellerName: 'Jessica Miller',
    sellerAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.9,
    reviews: 382,
    featured: true
  },
  {
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'I will develop a responsive website using HTML and Tailwind CSS',
    price: 150,
    sellerName: 'Michael Johnson',
    sellerAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    reviews: 211,
    featured: false
  },
  {
    image: 'https://images.pexels.com/photos/273691/pexels-photo-273691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'I will write engaging SEO content for your blog or website',
    price: 75,
    sellerName: 'Sarah Williams',
    sellerAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    reviews: 156,
    featured: true
  }
];

// Featured freelancers data
const freelancers = [
  {
    name: 'Alex Morgan',
    title: 'Senior UX/UI Designer',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.9,
    completionRate: 98,
    bio: 'I create intuitive user experiences and beautiful interfaces that help businesses connect with their customers.',
    skills: ['UI Design', 'UX Research', 'Wireframing'],
    hourlyRate: 85,
    verified: true
  },
  {
    name: 'Sophia Chen',
    title: 'Full Stack Developer',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    completionRate: 97,
    bio: 'Experienced full-stack developer specializing in React, Node.js, and modern web technologies.',
    skills: ['React.js', 'Node.js', 'TypeScript'],
    hourlyRate: 75,
    verified: true
  },
  {
    name: 'Marcus Johnson',
    title: 'Digital Marketing Specialist',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    completionRate: 95,
    bio: 'I help businesses grow their online presence through effective digital marketing strategies.',
    skills: ['SEO', 'Social Media', 'Content Marketing'],
    hourlyRate: 65,
    verified: false
  }
];

// Populate categories
const categoriesGrid = document.querySelector('.categories-grid');
categoriesGrid.innerHTML = categories.map(category => `
  <div class="category-card">
    <div class="icon-container">
      <i data-lucide="${category.icon}"></i>
    </div>
    <h3>${category.name}</h3>
    <p>${category.description}</p>
    <span class="explore-text">Explore Category</span>
  </div>
`).join('');

// Populate services
const servicesGrid = document.querySelector('.services-grid');
servicesGrid.innerHTML = services.map(service => `
  <div class="service-card">
    <div class="service-image">
      <img src="${service.image}" alt="${service.title}">
      ${service.featured ? '<span class="featured-tag">Featured</span>' : ''}
    </div>
    <div class="service-content">
      <div class="service-provider">
        <img src="${service.sellerAvatar}" alt="${service.sellerName}">
        <div>
          <h4>${service.sellerName}</h4>
          <div class="rating">
            <i data-lucide="star" class="star-icon"></i>
            <span>${service.rating}</span>
            <span>(${service.reviews})</span>
          </div>
        </div>
      </div>
      <h3>${service.title}</h3>
      <div class="service-price">
        <span>Starting at</span>
        <strong>$${service.price}</strong>
      </div>
    </div>
  </div>
`).join('');

// Populate freelancers
const freelancersGrid = document.querySelector('.freelancers-grid');
freelancersGrid.innerHTML = freelancers.map(freelancer => `
  <div class="freelancer-card">
    <div class="freelancer-header">
      <img src="${freelancer.avatar}" alt="${freelancer.name}">
      <div>
        <h3>${freelancer.name} ${freelancer.verified ? '<i data-lucide="check-circle" class="verified-icon"></i>' : ''}</h3>
        <p>${freelancer.title}</p>
        <div class="freelancer-stats">
          <span><i data-lucide="star"></i> ${freelancer.rating}</span>
          <span>${freelancer.completionRate}% Completion</span>
        </div>
      </div>
    </div>
    <p class="freelancer-bio">${freelancer.bio}</p>
    <div class="freelancer-skills">
      ${freelancer.skills.map(skill => `<span>${skill}</span>`).join('')}
    </div>
    <div class="freelancer-footer">
      <div class="hourly-rate">
        <span>$${freelancer.hourlyRate}</span>
        <span>/ hour</span>
      </div>
      <button class="btn btn-outline">View Profile</button>
    </div>
  </div>
`).join('');

// Initialize all icons after dynamic content is added
lucide.createIcons();