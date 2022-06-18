import React from 'react';
import { useSearchParams } from 'react-router-dom';

const ProductPage = () => {
  let [query, setQuery] = useSearchParams();
  console.log(query.get('q')); // 쿼리 가져오기
  return (
    <div>
      <h1>Show all products</h1>
    </div>
  );
};

export default ProductPage;
