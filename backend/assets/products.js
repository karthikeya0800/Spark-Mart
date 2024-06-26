const products = [
    {
      name: "Apple Wireless Airpods",
      image: "/images/airpods.jpg",
      description:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
      brand: "Apple",
      category: "Electronics",
      price: 7199.00,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: "iPhone 13 Pro 256GB Memory",
      image: "/images/phone.jpg",
      description:
        "Introducing the iPhone 13 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
      brand: "Apple",
      category: "Electronics",
      price: 47999.00,
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
    },
    {
      name: "Cannon EOS 80D DSLR Camera",
      image: "/images/camera.jpg",
      description:
        "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
      brand: "Cannon",
      category: "Electronics",
      price: 74399.00,
      countInStock: 5,
      rating: 3,
      numReviews: 12,
    },
    {
      name: "Logitech G-Series Gaming Mouse",
      image: "/images/mouse.jpg",
      description:
        "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
      brand: "Logitech",
      category: "Electronics",
      price: 3999.00,
      countInStock: 7,
      rating: 3.5,
      numReviews: 10,
    },
    {
      name: "Amazon Echo Dot 3rd Generation",
      image: "/images/alexa.jpg",
      description:
        "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
      brand: "Amazon",
      category: "Electronics",
      price: 2399.00,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
    {
      name: "Apple Wireless Airpods",
      image: "/images/airpods.jpg",
      description:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
      brand: "Apple",
      category: "Electronics",
      price: 7199.00,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: "iPhone 13 Pro 256GB Memory",
      image: "/images/phone.jpg",
      description:
        "Introducing the iPhone 13 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
      brand: "Apple",
      category: "Electronics",
      price: 47999.00,
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
    },
    {
      name: "Cannon EOS 80D DSLR Camera",
      image: "/images/camera.jpg",
      description:
        "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
      brand: "Cannon",
      category: "Electronics",
      price: 74399.00,
      countInStock: 5,
      rating: 3,
      numReviews: 12,
    },
    {
      name: "Sony Playstation 5",
      image: "/images/playstation.jpg",
      description:
        "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
      brand: "Sony",
      category: "Electronics",
      price: 31999.00,
      countInStock: 11,
      rating: 5,
      numReviews: 12,
    },
    {
      name: "Smart Watch",
      image: "/images/banner-image1.png",
      description:
        "Elevate your lifestyle with cutting-edge technology right on your wrist, your smart companion awaits!",
      brand: "Amazon",
      category: "Electronics",
      price: 3199.00,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
    {
      name: "Logitech G-Series Gaming Mouse",
      image: "/images/mouse.jpg",
      description:
        "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
      brand: "Logitech",
      category: "Electronics",
      price: 3999.00,
      countInStock: 7,
      rating: 3.5,
      numReviews: 10,
    },
    {
      name: "Apple Wireless Airpods",
      image: "/images/airpods.jpg",
      description:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
      brand: "Apple",
      category: "Electronics",
      price: 7199.00,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: "iPhone 13 Pro 256GB Memory",
      image: "/images/phone.jpg",
      description:
        "Introducing the iPhone 13 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
      brand: "Apple",
      category: "Electronics",
      price: 47999.00,
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
    },
    {
      name: "Amazon Echo Dot 3rd Generation",
      image: "/images/alexa.jpg",
      description:
        "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
      brand: "Amazon",
      category: "Electronics",
      price: 2399.00,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
    {
      name: "Cannon EOS 80D DSLR Camera",
      image: "/images/camera.jpg",
      description:
        "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
      brand: "Cannon",
      category: "Electronics",
      price: 74399.00,
      countInStock: 5,
      rating: 3,
      numReviews: 12,
    },
    {
      name: "Sony Playstation 5",
      image: "/images/playstation.jpg",
      description:
        "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
      brand: "Sony",
      category: "Electronics",
      price: 31999.00,
      countInStock: 11,
      rating: 5,
      numReviews: 12,
    },
    {
      name: "Logitech G-Series Gaming Mouse",
      image: "/images/mouse.jpg",
      description:
        "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
      brand: "Logitech",
      category: "Electronics",
      price: 3999.00,
      countInStock: 7,
      rating: 3.5,
      numReviews: 10,
    },
    {
      name: "Amazon Echo Dot 3rd Generation",
      image: "/images/alexa.jpg",
      description:
        "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
      brand: "Amazon",
      category: "Electronics",
      price: 2399.00,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
    {
      name: "Apple Wireless Airpods",
      image: "/images/airpods.jpg",
      description:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
      brand: "Apple",
      category: "Electronics",
      price: 7199.00,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: "iPhone 13 Pro 256GB Memory",
      image: "/images/phone.jpg",
      description:
        "Introducing the iPhone 13 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
      brand: "Apple",
      category: "Electronics",
      price: 47999.00,
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
    },
    {
      name: "Cannon EOS 80D DSLR Camera",
      image: "/images/camera.jpg",
      description:
        "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
      brand: "Cannon",
      category: "Electronics",
      price: 74399.00,
      countInStock: 5,
      rating: 3,
      numReviews: 12,
    },
    {
      name: "Sony Playstation 5",
      image: "/images/playstation.jpg",
      description:
        "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
      brand: "Sony",
      category: "Electronics",
      price: 31999.00,
      countInStock: 11,
      rating: 5,
      numReviews: 12,
    },
    {
      name: "Logitech G-Series Gaming Mouse",
      image: "/images/mouse.jpg",
      description:
        "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
      brand: "Logitech",
      category: "Electronics",
      price: 3999.00,
      countInStock: 7,
      rating: 3.5,
      numReviews: 10,
    },
    {
      name: "Amazon Echo Dot 3rd Generation",
      image: "/images/alexa.jpg",
      description:
        "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
      brand: "Amazon",
      category: "Electronics",
      price: 2399.00,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
    {
      name: "Apple Wireless Airpods",
      image: "/images/airpods.jpg",
      description:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
      brand: "Apple",
      category: "Electronics",
      price: 7199.00,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: "iPhone 13 Pro 256GB Memory",
      image: "/images/phone.jpg",
      description:
        "Introducing the iPhone 13 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
      brand: "Apple",
      category: "Electronics",
      price: 47999.00,
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
    },
    {
      name: "Cannon EOS 80D DSLR Camera",
      image: "/images/camera.jpg",
      description:
        "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
      brand: "Cannon",
      category: "Electronics",
      price: 74399.00,
      countInStock: 5,
      rating: 3,
      numReviews: 12,
    },
    {
      name: "Sony Playstation 5",
      image: "/images/playstation.jpg",
      description:
        "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
      brand: "Sony",
      category: "Electronics",
      price: 31999.00,
      countInStock: 11,
      rating: 5,
      numReviews: 12,
    },
    {
      name: "Logitech G-Series Gaming Mouse",
      image: "/images/mouse.jpg",
      description:
        "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
      brand: "Logitech",
      category: "Electronics",
      price: 3999.00,
      countInStock: 7,
      rating: 3.5,
      numReviews: 10,
    },
    {
      name: "Amazon Echo Dot 3rd Generation",
      image: "/images/alexa.jpg",
      description:
        "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
      brand: "Amazon",
      category: "Electronics",
      price: 2399.00,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
    {
      name: "Apple Wireless Airpods",
      image: "/images/airpods.jpg",
      description:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
      brand: "Apple",
      category: "Electronics",
      price: 7199.00,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: "Home Security Camera",
      image: "/images/banner-image2.png",
      description:
        "Enhance home safety with vigilant eyes, your trusted guardian for peace of mind awaits!",
      brand: "Amazon",
      category: "Electronics",
      price: 1599.00,
      countInStock: 0,
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: "JBL Wireless Headphones",
      image: "/images/banner-image3.png",
      description:
        "Immerse in sound, cut cords, feel freedom - JBL wireless headphones redefine audio experience.",
      brand: "Amazon",
      category: "Electronics",
      price: 3999.00,
      countInStock: 0,
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: "Acer Laptop",
      image: "/images/sale-image.png",
      description:
        "Unleash productivity, power-packed performance, sleek design – Acer laptop, your ultimate tech companion.",
      brand: "Amazon",
      category: "Electronics",
      price: 3999.00,
      countInStock: 0,
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: "iPhone 13 Pro 256GB Memory",
      image: "/images/phone.jpg",
      description:
        "Introducing the iPhone 13 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
      brand: "Apple",
      category: "Electronics",
      price: 47999.00,
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
    },
    {
      name: "Cannon EOS 80D DSLR Camera",
      image: "/images/camera.jpg",
      description:
        "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
      brand: "Cannon",
      category: "Electronics",
      price: 74399.00,
      countInStock: 5,
      rating: 3,
      numReviews: 12,
    },
    {
      name: "Sony Playstation 5",
      image: "/images/playstation.jpg",
      description:
        "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
      brand: "Sony",
      category: "Electronics",
      price: 31999.00,
      countInStock: 11,
      rating: 5,
      numReviews: 12,
    },
    {
      name: "Logitech G-Series Gaming Mouse",
      image: "/images/mouse.jpg",
      description:
        "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
      brand: "Logitech",
      category: "Electronics",
      price: 3999.00,
      countInStock: 7,
      rating: 3.5,
      numReviews: 10,
    },
    {
      name: "Amazon Echo Dot 3rd Generation",
      image: "/images/alexa.jpg",
      description:
        "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
      brand: "Amazon",
      category: "Electronics",
      price: 2399.00,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
    {
      name: "Sony Playstation 5",
      image: "/images/playstation.jpg",
      description:
        "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
      brand: "Sony",
      category: "Electronics",
      price: 31999.00,
      countInStock: 11,
      rating: 5,
      numReviews: 12,
    },
  ]
  
  module.exports = { products }