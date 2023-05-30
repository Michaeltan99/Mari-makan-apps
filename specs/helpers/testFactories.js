/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/likeButton';
import FavoriteRestaurantIdb from '../../src/scripts/data/restoFavorite';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
