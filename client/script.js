// Create Product class
class ProductManager {
  //Initialize with an empty array
  constructor() {
    this.products = []; // hold all fetched products within an array
    this.apiUrl = "http://localhost:3003/api/products";
  }

  async getProducts() {
    try {
      const response = await axios.get(this.apiUrl);
      this.products = response.data; // referring to the instance of the class
    } catch (error) {
      console.error("Failed to get products.", error);
    }
  }
}

// Create instance(object) of class to be used
const productManager = new ProductManager();

async function displayProducts() {
  await productManager.getProducts(); // Fetch products from API
  const products = productManager.products; // Fetched products stored in the instance

  const listContainer = document.querySelector(".list"); // Products displayed on this HTML element
  // Clear the listContainer before adding new product cards
  listContainer.innerHTML = "";

  // iterate over each product in the array
  products.forEach((product) => {
    // Create a new card element for each product
    const card = document.createElement("div");
    card.className = "card";

    // Create and set the image container
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    const image = document.createElement("div");
    image.className = "image";
    image.style.backgroundImage = `url(${product.image})`;
    imageContainer.appendChild(image);

    // Create text content container
    const textContent = document.createElement("div");
    textContent.className = "text-content";

    // Insert product name
    const productName = document.createElement("div");
    productName.textContent = product.name;
    textContent.appendChild(productName);

    // Append elements to the card
    card.appendChild(imageContainer);
    card.appendChild(textContent);

    // Append card to the list container
    listContainer.appendChild(card);
  });
}

// Event listiner for when DOM content is loaded
document.addEventListener("DOMContentLoaded", async () => {
  await productManager.getProducts();
  displayProducts();
  let elems = document.querySelectorAll(".modal");

  // Initialize all modals with options, including the onCloseEnd option
  let instances = M.Modal.init(elems, {
    onCloseEnd: function () {
      // This function will be called when any modal is closed
      let onModalClose = "We will contact you as soon as possible!";
      alert(onModalClose);
    },
    dismissible: true, // able to exit by keyboard or overlay click
  });
});
