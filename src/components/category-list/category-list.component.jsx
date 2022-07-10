import './category-list.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const CategoryList = ({ categories }) => (
  <div className="categories-container">
    {categories.map(({ id, title, imageUrl }) => (
      <CategoryItem key={id} {...{ title, imageUrl }} />
    ))}
  </div>
);

export default CategoryList;
