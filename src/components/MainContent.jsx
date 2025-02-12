import React from 'react'
import './styles.css'

const MainContent = ({ searchTerm }) => {
  const products = [
    { id: 1, name: "iPhone 15 Pro", price: 1299, category: "mobiles" },
    { id: 2, name: "Samsung Galaxy S23", price: 999, category: "mobiles" },
    { id: 3, name: "OnePlus 11R", price: 699, category: "mobiles" },
    { id: 4, name: "MacBook Air M2", price: 1199, category: "laptop" },
    { id: 5, name: "Dell XPS 15", price: 1599, category: "laptop" },
    { id: 6, name: "HP Spectre x360", price: 1399, category: "laptop" },
    { id: 7, name: "Asus ROG Zephyrus G14", price: 1499, category: "laptop" },
    { id: 8, name: "LG 4-Door Fridge", price: 1899, category: "refrigerator" },
    { id: 9, name: "Samsung Family Hub", price: 2299, category: "refrigerator" },
    { id: 10, name: "Whirlpool Double Door", price: 999, category: "refrigerator" },
    { id: 11, name: "Bose QuietComfort 45", price: 349, category: "accessories" },
    { id: 12, name: "Sony WH-1000XM5", price: 399, category: "accessories" },
    { id: 13, name: "Apple AirPods Pro 2", price: 249, category: "accessories" },
    { id: 14, name: "Logitech MX Master 3", price: 99, category: "accessories" },
    { id: 15, name: "Razer BlackShark V2", price: 129, category: "accessories" },
    { id: 16, name: "Samsung Galaxy Tab S9", price: 799, category: "accessories" },
    { id: 17, name: "Lenovo Legion 5 Pro", price: 1699, category: "laptop" },
    { id: 18, name: "Haier Side-by-Side", price: 1499, category: "refrigerator" }
  ];

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <div className='container'>
        <table className='full-table' border="1px">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No products found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default MainContent