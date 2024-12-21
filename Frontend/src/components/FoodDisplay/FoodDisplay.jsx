/* eslint-disable react/prop-types */
import { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
// import EmptyState from '../EmptyState/EmptyState'; // Assuming you have an EmptyState component
import Loader from './Loader';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list, isLoading } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Trending Items Near You</h2>
      {isLoading ? (
        <Loader />
      )  : (
        <div className='food-display-list'>
          {food_list
            .filter(item => category === 'All' || category === item.category)
            .map(item => (
              <FoodItem
                key={item._id}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;
