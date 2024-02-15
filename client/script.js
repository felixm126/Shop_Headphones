class ProductManager {
	constructor() {
		this.products = []
		this.apiUrl = 'http://localhost:3003/api/products'
	}

	async getProducts() {
		try {
			const response = await axios.get(this.apiUrl)
			this.products = response.data
		} catch (error) {
			console.error('Failed to get products.', error)
		}
	}
}

const productManager = new ProductManager()

async function displayProducts() {
	await productManager.getProducts()
	const products = productManager.products

	const listContainer = document.querySelector('.list')
	listContainer.innerHTML = ''

	products.forEach((product) => {
		const card = document.createElement('div')
		card.className = 'card'

		const imageContainer = document.createElement('div')
		imageContainer.className = 'image-container'

		const image = document.createElement('div')
		image.className = 'image'
		image.style.backgroundImage = `url(${product.image})`
		imageContainer.appendChild(image)

		const textContent = document.createElement('div')
		textContent.className = 'text-content'

		const productPrice = document.createElement('div')
		productPrice.textContent = `$${product.price}`
		textContent.appendChild(productPrice)

		const productName = document.createElement('div')
		productName.style.fontFamily = 'Impact, Charcoal, sans-serif'
		productName.style.fontSize = '20px'
		productName.textContent = product.name
		textContent.appendChild(productName)

		card.appendChild(imageContainer)
		card.appendChild(textContent)

		card.addEventListener('click', () => {
			document.querySelector(
				'#productInfoModal .modal-content h4'
			).textContent = product.name
			document.getElementById(
				'productBrandModal'
			).textContent = `Brand: ${product.brand}`
			document.getElementById(
				'productColorModal'
			).textContent = `Color: ${product.color}`
			document.getElementById(
				'productRatingModal'
			).textContent = `Rating: ${product.rating}`
			document.getElementById(
				'productDescriptionModal'
			).textContent = `Description: ${product.description}`
			document.getElementById(
				'productFeaturesModal'
			).textContent = `Features: ${product.features}`

			const instance = M.Modal.getInstance(
				document.getElementById('productInfoModal')
			)
			instance.open()
		})

		listContainer.appendChild(card)
	})
}

document.addEventListener('DOMContentLoaded', async () => {
	await productManager.getProducts()
	displayProducts()
	let elems = document.querySelectorAll('.modal')

	let instances = M.Modal.init(elems, { dismissible: true })
})
