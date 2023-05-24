import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';


function CategorySelection({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const querySnapshot = await getDocs(collection(db, 'items'));
      const uniqueCategories = new Set();

      querySnapshot.forEach((doc) => {
        const item = doc.data();
        uniqueCategories.add(item.categoryId.toString());
      });

      setCategories(Array.from(uniqueCategories));
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Category Selection</h2>
      <ul>
        {categories.map((categoryId) => (
          <li key={categoryId}>
            <Link to={`/category/${categoryId}`} onClick={() => onSelectCategory(categoryId)}>
              {categoryId}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategorySelection;



