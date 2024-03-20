import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../asyncMock';
import Item from '../Item/Item';
import '../ItemList/ItemList.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = categoryId ? await getProductsByCategory(categoryId) : await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (products.length === 0) {
    return <p>No hay productos en esta categoría.</p>;
  }

  return (
    <div className="item-list">
      <div className="product-section">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;