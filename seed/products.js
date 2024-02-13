const db = require('./db')
const Product = require('./models/product')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const products = [
        {
            name: `Sony WH-1000XM4`,
            brand: `Sony`,
            price: 348.00,
            color: `Black`,
            Description: 'Industry-leading noise canceling with Dual Noise Sensor technology',
            rating: 4.7,
            features: `Up to 30-hour battery life, touch sensor controls, speak-to-chat technology, and Alexa enabled`,
            image: `https://i.insider.com/5f36a9e4e89ebf001f044924?width=700`
        },
        {
            Name: `Sony WF-1000XM3`,
            Brand: `Sony`,
            Price: 229.99,
            Color: `Rose Gold`,
            Description: `True wireless earbuds with industry-leading noise cancellation`,
            Rating: 4.5,
            Features: `24-hour battery life with charging case, quick attention mode, and Alexa enabled`,
            image: `https://www.worldshop.eu/medias/img/8907298963486_w1500_z_1789468240/sony-wf-1000xm3-true-wireless-ear-headphones-noise-cancelling-platinum-silver.jpeg`,
        },
        {
            Name: `Sony MDRZX110/BLK`,
            Brand: `Sony`,
            Price: 19.99,
            Color: `Black`,
            Description: `ZX Series stereo headphones with a comfortable on-ear design`,
            Rating: 4.2,
            Features: `Lightweight and foldable design, 30mm dynamic driver unit for clear sound, and tangle-free cables`,
            image: `https://www.google.com/aclk?sa=l&ai=DChcSEwichNG6lKmEAxXGWkcBHbRKD50YABADGgJxdQ&ase=2&gclid=Cj0KCQiAw6yuBhDrARIsACf94RWDFrQZJ-ZkHC5N6HTj0ZcEeF8OTZA56VY1-eY7E3NvX4J2myYc6HIaAqIgEALw_wcB&sig=AOD64_2aoH30-vTsfUtNj0T4mPouYrp6fg&ctype=5&nis=6&adurl&ved=2ahUKEwi9qcO6lKmEAxW0rIkEHbmADgoQvhd6BAgBEGI`
        },
        {
            Name:`Sony WH-XB900N`,
            Brand: `Sony`,
            Price: 248.00,
            Color: `Blue`,
            Description: `Wireless noise canceling extra bass headphones with a long battery life`,
            Rating: 4.6,
            Features:` intuitive touch controls, Quick Attention for easy conversation, and a long battery life, all in a smart design that's made for all-day listening with deep, punchy sound.`,
            image:`https://www.google.com/aclk?sa=l&ai=DChcSEwjOjsCmlqmEAxXAZ0cBHal_CnsYABABGgJxdQ&ase=2&gclid=Cj0KCQiAw6yuBhDrARIsACf94RXVO54vhBO9s5Mj2hLr5OFilEkHkwxl9aPtXsivfoyMWRm_Q0e3K98aAhCiEALw_wcB&sig=AOD64_2DS898LghLwB3HBoAFmQYNbjB-rg&ctype=5&nis=6&adurl&ved=2ahUKEwjIpbOmlqmEAxVUtYkEHW-1CtsQvhd6BAgBEFQ`,
        }
    ]
}
