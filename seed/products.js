const db = require('../db')
const Product = require('../models/product')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const products = [
        {
        name: `Sony WH-1000XM4`,
        brand: `Sony`,
        price: 348.00,
        color: `Black`,
        description: 'Industry-leading noise canceling with Dual Noise Sensor technology',
        rating: 4.7,
        features: `Up to 30-hour battery life, touch sensor controls, speak-to-chat technology, and Alexa enabled`,
        image: `https://i.insider.com/5f36a9e4e89ebf001f044924?width=700`
        },
        {
        name: `Sony WF-1000XM3`,
        brand: `Sony`,
        price: 229.99,
        color: `Rose Gold`,
        description: `True wireless earbuds with industry-leading noise cancellation`,
        rating: 4.5,
        features: `24-hour battery life with charging case, quick attention mode, and Alexa enabled`,
        image: `https://www.worldshop.eu/medias/img/8907298963486_w1500_z_1789468240/sony-wf-1000xm3-true-wireless-ear-headphones-noise-cancelling-platinum-silver.jpeg`,
        },
        {
         name: `Sony MDRZX110/BLK`,
        brand: `Sony`,
         price: 19.99,
         color: `Black`,
        description: `ZX Series stereo headphones with a comfortable on-ear design`,
        rating: 4.2,
        features: `Lightweight and foldable design, 30mm dynamic driver unit for clear sound, and tangle-free cables`,
        image: `https://cdn.cs.1worldsync.com/syndication/feeds/sony/inline-content/8C/F7FA03B6A62B7472AF47F640EB5BA9D43C994A8F_EE0F245AA21C1FDDB30714660D8DD890FMTPNGALPHASCL1_gallery.jpg`,
        },
        {
         name:`Sony WH-XB900N`,
         brand: `Sony`,
         price: 248.00,
        color: `Blue`,
        description: `Wireless noise canceling extra bass headphones with a long battery life`,
        rating: 4.6,
        features:` intuitive touch controls, Quick Attention for easy conversation, and a long battery life, all in a smart design that's made for all-day listening with deep, punchy sound.`,
        image:`https://m.media-amazon.com/images/I/61kqkYoeysL._AC_SL1500_.jpg`,
        },
        {
        name: `Beats Studio3 Wireless`,
        brand: `Beats`,
        price: 349.95,
        color: `Black`,
        description: `High-performance wireless noise cancelling headphones that actively block external noise and use real-time audio calibration to preserve clarity, range, and emotion`,
        rating: 4.5,
        features: `Apple W1 chip for Class 1 Wireless Bluetooth® connectivity and battery efficiency, Pure Adaptive Noise Canceling (Pure ANC), up to 22 hours of battery life`,
        image: `https://i5.walmartimages.com/seo/Beats-Studio3-Wireless-Noise-Cancelling-Headphones-with-Apple-W1-Headphone-Chip-Matte-Black_d0f19be2-e68f-4b82-b95c-c37db53518ba_1.868e67b856407714e2c5405a7e2f094a.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF`,
        }, 
        {
        name: `Beats Solo Pro`,
        brand: `Beats`,
        price: 299.95,
        color: 'Blue',
        description: `Noise cancelling on-ear headphones with an advanced acoustic platform that delivers a powerful, balanced sound. Transparency mode for hearing and interacting with the world around you`,
        rating: 4.6,
        features: `Active Noise Cancelling (ANC), Transparency, up to 22 hours of listening time (up to 40 hours with ANC and Transparency off), foldable design`,
        image: `https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1080/https://d2e6ccujb3mkqf.cloudfront.net/8a3830d0-756a-408d-8f39-4ff4fba07c57-1_2355098f-64d0-40fd-8b75-65bfe20fb000.jpg`,
        },
        {
        name: `Beats Studio Buds`,
        brand: `Beats`,
        price: 99.99,
        color: `Red`,
        description: `True wireless noise cancelling earphones designed for music lovers. Delivers a high-quality audio experience in a sleek design`,
        rating: 4.3,
        features: `Active Noise Cancelling (ANC), Transparency mode, IPX4-rated sweat and water resistance, up to 8 hours of listening time (up to 24 hours with pocket-sized charging case)`,
        image: `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900921_sd.jpg;maxHeight=2000;maxWidth=2000`,
        },
        {
        name: `Beats Studio Pro`,
        brand: `Beats`,
        price: 229.99,
        color: `Sandstone`,
        description: `Wireless noise cancelling headphones with a sleek design and a powerful sound`,
        rating: 4.4,
        features: `Active Noise Cancelling (ANC), Transparency mode, up to 22 hours of listening time (up to 40 hours with ANC and Transparency off), foldable design`,
        image: `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501019_sd.jpg;maxHeight=2000;maxWidth=2000`,
        },
        {
        name: `Bose QuietComfort Headphones`,
        brand: `Bose`,
        price: 249.00,
        color: `Cypress Green`,
        description: 'Wireless Bluetooth headphones with world-class noise cancellation',
        rating: 4.8,
        features: `Up to 20-hour battery life, Alexa voice control, and Bose AR enabled`,
        image: `https://assets.bosecreative.com/transform/9d14c760-5f75-45f4-b45d-087469d0e7fe/QCH24_CypressGreen_001_RGB_x2i_RGB?quality=100&io=width:816,height:667,transform:fit&io=width:816,height:667,transform:fit`,
        },
        {
        name: `Bose Noise Cancelling Headphones 700`,
        brand: `Bose`,
        price: 299.00,
        color: `Silver`,
        description: `Wireless Bluetooth headphones with immersive sound and comfortable fit`,
        rating: 4.6,
        features: `Up to 20 hours battery per charge, Control with voice or touch, and voice prompts for easy setup`,
        image: `https://assets.bosecreative.com/transform/37127c0a-4b5c-40b7-b5e9-4f0ecf541d03/noise_cancelling_headphones_700_silver_EC_hero?io=width:816,height:667,transform:fit&io=width:816,height:667,transform:fit`,
        },
        {
        name: `Bose QuietComfort Earbuds`,
        brand: `Bose`,
        price: 279.00,
        color: `Black`,
        description: `True wireless earbuds with world-class noise cancellation`,
        rating: 4.7,
        features: `Up to 6-hour battery life, sweat and weather resistant, and touch controls`,
        image: `https://assets.bosecreative.com/transform/8c62d466-b6da-4e29-b9f1-b4ac266ac1be/QCEBII_Buds_Front_7200px_final_black_RGB?quality=100&io=width:816,height:667,transform:fit&io=width:816,height:667,transform:fit`,
        },
        {
        name:`Bose QuietComfort 45 headphones`,
        brand: `Bose`,
        price: 329.00,
        color: `Black`,
        description: `There is comfort in quiet. You can feel it the minute you put them on. The soft, plush cushions seal you in. You press the button and whoosh — the world fades, the music starts, and it is love at first listen`,
        rating: 4.1,
        features:`Up to 22 hours of battery life,Acclaimed noise cancellation, Active and adjustable EQ`,
        image:`https://assets.bosecreative.com/transform/ab738d65-f8fb-4aaa-9b30-af023ade6fd8/QC45_TripleBlack_001_RGB?io=width:816,height:667,transform:fit&io=width:816,height:667,transform:fit`,
        },

    ]
        try {
            await Product.insertMany(products)
            console.log('Seeded products!')
        } catch (error) {
            console.error(error)
        }
    }

const run = async () => {
    await main()
    db.close()
}

run()