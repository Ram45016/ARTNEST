import React from 'react';
import '../assets/css/AssetsPage.css';

const sampleProducts = [
  {
    "imageUrl": "https://images.unsplash.com/photo-1598770220477-cec551a23f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aXN0aWN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "title": "Aloof Man",
    "discountedPrice": 89.99,
    "price": 109.99,
    "discountPercent": 18,
  },
  {
    "imageUrl": "https://media.istockphoto.com/id/955586048/photo/painting-poppies-with-texture.webp?b=1&s=170667a&w=0&k=20&c=nao6cyteDVn5ROVLy5K6pOsZjXFHKm6Qpz6kHsDkfcA=",
    "title": "Beautiful blossoms",
    "description": "Vibrant and colorful spring blossoms in full bloom",
    "color": "Multicolor",
    "discountedPrice": 39.99,
    "price": 49.99,
    "discountPercent": 20,
  },
  {
    "imageUrl": "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2lsJTIwcGFpbnRpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "title": "Tranquil Wilderness",
    "description": "A captivating painting that captures the serene beauty of untouched wilderness.",
    "color": "Assorted",
    "discountedPrice": 24.99,
    "price": 29.99,
    "discountPercent": 17,
  },
  {
    "imageUrl": "https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    "title": "Handmade Leather Journal",
    "description": "A rustic leather-bound journal with handmade paper pages.",
    "color": "Brown",
    "discountedPrice": 19.99,
    "price": 24.99,
    "discountPercent": 20,
  },
  {
    "imageUrl": "https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8b3V0ZG9vcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    "title": "Handcrafted Wooden Serving Tray",
    "description": "Elegant wooden serving tray with intricate inlays.",
    "color": "Walnut",
    "discountedPrice": 69.99,
    "price": 89.99,
    "discountPercent": 22,
  },
  {
    "imageUrl": "https://images.unsplash.com/photo-1612021470627-ca1cb2d2ee92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlsZGVyfGVufDB8fDB8fHww&w=1000&q=80",
    "title": "Hand-Embroidered Pillow Covers",
    "description": "Set of two decorative pillow covers with intricate hand embroidery.",
    "color": "Blue",
    "discountedPrice": 29.99,
    "price": 39.99,
    "discountPercent": 25,
  },
  {
    "imageUrl": "https://example.com/product7.jpg",
    "title": "Handmade Beaded Earrings",
    "description": "Elegant beaded earrings with a unique design.",
    "color": "Gold",
    "discountedPrice": 14.99,
    "price": 19.99,
    "discountPercent": 25,
  },
  {
    "imageUrl": "https://example.com/product8.jpg",
    "title": "Handwoven Basket",
    "description": "Versatile handwoven basket made from natural materials.",
    "color": "Natural",
    "discountedPrice": 34.99,
    "price": 44.99,
    "discountPercent": 22,
  },
  {
    "imageUrl": "https://example.com/product9.jpg",
    "title": "Hand-painted Ceramic Plant Pot",
    "description": "Artistic ceramic plant pot with colorful hand-painted designs.",
    "color": "Green",
    "discountedPrice": 19.99,
    "price": 24.99,
    "discountPercent": 20,
  },
  {
    "imageUrl": "https://example.com/product10.jpg",
    "title": "Handmade Soap Set",
    "description": "A set of natural handmade soaps with various scents.",
    "color": "Assorted",
    "discountedPrice": 12.99,
    "price": 16.99,
    "discountPercent": 23,
  },
];

const AssetsPage = () => {
    return (
      <div className='productCardContainer'>
        {sampleProducts.map((product, index) => (
          <div className='productCard' key={index}>
            <div className='productImage'>
              <img src={product.imageUrl} alt='' />
            </div>
            <div className='textPart'>
              <div>
                <p className='productBrand'>{product.brand}</p>
                <p className='productTitle'>{product.title}</p>
              </div>
              <div className='priceInfo'>
                <p className='discountedPrice'>₹{product.discountedPrice}</p>
                <p className='originalPrice'>₹{product.price}</p>
                <p className='discountPercentage'>{product.discountPercent}% off</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default AssetsPage;