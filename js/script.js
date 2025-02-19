// Declare the loadPage function globally so it's accessible to the inline onclick events
function loadPage(page) {
    const contentContainer = document.getElementById("content-container");
    

    // Clear previous content
    contentContainer.innerHTML = "";

    // Load the appropriate content based on the page selected
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            contentContainer.innerHTML = data;
        })
        .catch(error => {
            contentContainer.innerHTML = `<p>Error loading content: ${error}</p>`;
        });
}

document.addEventListener("DOMContentLoaded", function () {
    // Menu toggle (Hamburger icon) functionality
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Toggle the mobile navigation menu
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Load home page content by default when the page loads
    loadPage('home');
});

const productsData = {
    "epc": {
        "title": "EPC for RMC and Aggregate Plants",
        "image": "images/epc.jpg",
        "description": "We offer complete set up off Readymix concrete plant and Aggregate plants on pan India. Our experience team will carry out the civil machine foundation and allied civil structures, Mechanical equipment assembly and erection, Electrical installation and commissiong. We also carry out extensive cladding work require for control pollution."
    },
    "maintenance": {
        "title": "Maintenance & Quality Assurance",
        "image": "images/maintenance.jpg",
        "description": "Out team of expert can guide for optimal operational efficiency per m3 ,Effective maintenance practice to reduce the maintenance cost per m3.and set up the entire QA/QC for sustainable concrete."
    },
    "financial-analysis": {
        "title": "Project & Financial Analysis",
        "image": "images/financial.jpg",
        "description": "Our experts can prepare the project report with financial analysis for the feasibility study of new business plan."
    },
    "training": {
        "title": "Training & Compliance",
        "image": "images/training.jpg",
        "description": "We provide effective training for Quality, operation, Maintenance and compliances."
    },
    "audit": {
        "title": "RMC Plant Business Audit",
        "image": "images/audit.jpg",
        "description": "We provide Business and operational analysis report of existing business and improvement plan."
    },
    "trading": {
        "title": "Trading & Manufacturing",
        "image": "images/trading.jpg",
        "description": "We deal in trading and manufacturing of high-quality construction equipment."
    },
    "operation": {
        "title": "Operation & Maintenance",
        "image": "images/operation.jpg",
        "description": "Our team of experts are also carry out Operation & maintenance of batching plant with different model."
    }
};

// Function to dynamically load product content
function loadProduct(productName) {
    const contentContainer = document.getElementById("content-container");

    // Define product details
    const products = {
        "epc": {
            title: "EPC for RMC and Aggregate Plants",
            image: "images/epc.jpg",
            description: "We provide end-to-end EPC solutions for RMC and Aggregate Plants ensuring smooth operations."
        },
        "maintenance": {
            title: "Maintenance & Quality Assurance",
            image: "images/maintenance.jpg",
            description: "Our maintenance services ensure high uptime and quality assurance for your plants."
        },
        "financial-analysis": {
            title: "Project & Financial Analysis",
            image: "images/financial-analysis.jpg",
            description: "We help businesses with financial planning and project cost estimation."
        },
        "training": {
            title: "Training & Compliance",
            image: "images/training.jpg",
            description: "Our expert-led training programs help your workforce stay updated with the latest compliance and safety standards."
        },
        "audit": {
            title: "RMC Plant Business Audit",
            image: "images/audit.jpg",
            description: "Comprehensive business audit services for RMC plants to improve efficiency and profitability."
        },
       
        "operation": {
            title: "Operation & Maintenance",
            image: "images/operation.jpg",
            description: "Ensuring smooth operation and maintenance of industrial and construction plants."
        },
        "trading": {
            title: "Manufacturing",
            image: "images/trading.jpg",
            description: "We provide a wide range of trading and manufacturing solutions for the construction industry."
        }
    };

    // Check if the product exists
    if (products[productName]) {
        const product = products[productName];

        // Update content container
        contentContainer.innerHTML = `
            <div class="product-container">
                <h2 class="product-title">${product.title}</h2>
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <p class="product-description">${product.description}</p>
            </div>
        `;
    } else {
        contentContainer.innerHTML = `<p>Product not found.</p>`;
    }
}
