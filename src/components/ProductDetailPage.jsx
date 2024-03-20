import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

const ProductDetailPage = () => {
  const { itemId } = useParams();

  return (
    <div>
      <h1>Detalles del Producto</h1>
      <ItemDetailContainer itemId={itemId} />
    </div>
  );
};

export default ProductDetailPage;