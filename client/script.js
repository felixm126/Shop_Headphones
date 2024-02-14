apiUrl = 'http://localhost:3003'

// Create Product class
class ProductManager {
	//Initialize with an empty array
	constructor() {
		this.products = [] // hold all fetched products within an array
	}

	async getProducts() {
		try {
			const response = await axios.get(`${this.apiUrl}/api/products`)
			this.products = response.data // referring to the instance of the class
		} catch (error) {
			console.error('Failed to get products.', error)
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

document.addEventListener('DOMContentLoaded', function () {
	let elems = document.querySelectorAll('.modal')

	// Initialize all modals with options, including the onCloseEnd option
	let instances = M.Modal.init(elems, {
		onCloseEnd: function () {
			// This function will be called when any modal is closed
			let whenModalCloses = 'We will contact you as soon as possible!'
			alert(whenModalCloses)
		},
		dismissible: true,
	})
})

// Load products on page load
document.addEventListener('DOMContentLoaded', async () => {
	await productManager.getProducts()
	console.log('Products loaded!')
	displayProducts(productManager.products)
})
