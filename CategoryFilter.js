import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onChangeCategory }) => {
  return (
    <div className="category-filter">
      <select
        value={selectedCategory}
        onChange={(e) => onChangeCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
