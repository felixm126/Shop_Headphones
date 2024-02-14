// Fetch API to make requests to backend for 3 brands 4 products
// Filter search button for lowest / highest price, brand, color, model
// Home button
// Event listeners for each button clicked
// toggle function?
// animations for when a button is clicked?

//URL Path
//models/product
// name/brand/price/color/description/rating/features/image
////////////////////////////////////////////////////////////////////////////////////

const apiUrl = 'http://localhost:3003/'

// Create class of Brand
class Brand {
	constructor() {
		this.brands = [] // hold all fetched brands within an array
		this.filteredBrands = [] // hold fetched brands that are filtered within an array
	}

	async getBrands() {
		try {
			const response = await axios.get(`${apiUrl}`) //<-- need to finish path for brands
			this.brands = response.data.response.data.this.filteredBrands = // referring to the instance of the class
				this.brands.slice() // <--need url endpoint here // return a copy of the array
		} catch (error) {
			console.error('Failed to get brands.', error)
		}
	}

	async getProductsByBrand() {}
}

// Create manager class
