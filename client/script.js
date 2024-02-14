apiUrl = 'http://localhost:3003'

// Create Product class
class ProductManager {
	//Initialize with two empty arrays
	constructor() {
		this.products = [] // hold all fetched products within an array
		this.filteredProducts = [] // hold fetched products that are filtered within an array
	}

	async getProducts() {
		try {
			const response = await axios.get(`${apiUrl}/api/products`)
			this.products = response.data // referring to the instance of the class
			this.filteredProducts = this.products.slice() // return a copy of the array
		} catch (error) {
			console.error('Failed to get products.', error)
		}
	}

	async filterSearch(filters) {
		// Destructure filters object to get variables
		const { brand, color, minPrice, maxPrice, minRating, maxRating } = filters
		try {
			// Initialize empty params object for each filter
			const params = {}
			if (brand) params.brand = brand
			if (color) params.color = color
			if (minPrice) params.minPrice = minPrice
			if (maxPrice) params.maxPrice = maxPrice
			if (minRating) params.minRating = minRating
			if (maxRating) params.maxRating = maxRating

			// Make the API request with the constructed query parameters
			const response = await axios.get(`${this.apiUrl}/api/products`, {
				params,
			})
			this.filteredProducts = response.data // Update the filtered products
		} catch (error) {
			console.error('Failed to filter products:', error)
		}
	}
}

// Create instance of class to be used
const productManager = new ProductManager(apiUrl)

// Define function to display products
const productsPage = document.getElementById('productsButton')
function displayProducts(products) {
	const container = document.getElementById('productsContainer') //Get element where products will be displayed
	container.innerHTML = '' //clear current content to show products
	products.forEach((product) => {
		//Create new div element for the product
		const productElement = document.createElement('div')
		productElement.textContent = `${product.name} - ${product.brand}` //set text content showing the products name and brand
		productElement.classList.add('product')
		container.appendChild(productElement)
	})
}

const sections = ['homeSection', 'productsSection', 'contactsSection']
// Define function to show specific section and hide the rest - simulating new page
function displaySection(clickedSection) {
	sections.forEach((section) => {
		const sectionElement = document.getElementById(section)
		if (section === clickedSection) {
			sectionElement.style.display = 'block'
		} else {
			sectionElement.style.display = 'none'
		}
	})
}

document
	.getElementById('applyFiltersButton') // Apply filters based on values inputted from user
	.addEventListener('click', async () => {
		// Gather filter values
		const filters = {
			brand: document.getElementById('brand').value,
			color: document.getElementById('color').value,
			minPrice: document.getElementById('minPrice').value,
			maxPrice: document.getElementById('maxPrice').value,
			minRating: document.getElementById('minRating').value,
			maxRating: document.getElementById('maxRating').value,
		}
		// Call filtersearch method
		await productManager.filterSearch(filters)
		// Call displayproducts and update UI with filtered products
		displayProducts(productManager.filteredProducts)
	})

// Event listeners when clicked will display appropriate section
document
	.getElementById('homeButton')
	.addEventListener('click', () => displaySection('homeSection'))
document
	.getElementById('productsButton')
	.addEventListener('click', () => displaySection('productsContainer'))
document
	.getElementById('contactInfoButton')
	.addEventListener('click', () => displaySection('contactsSection'))

// Load products on page load
document.addEventListener('DOMContentLoaded', async () => {
	await productManager.getProducts()
	console.log('Products loaded!')
	displayProducts(productManager.products)
})
