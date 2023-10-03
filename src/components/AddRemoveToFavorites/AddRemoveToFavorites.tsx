import React, { useState } from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { styles } from './AddRemoveToFavorites.styles';

interface AddRemoveToFavoritesProps {
  wrapperStyle?: ViewStyle;
  isFavorite: boolean;
  size?: number;
}

export const AddRemoveToFavorites = ({
  isFavorite,
  size = 24,
  wrapperStyle,
}: AddRemoveToFavoritesProps) => {
  const [favorite, setfavorite] = useState(isFavorite);

  const onPressHeart = () => {
    setfavorite(!favorite);
  };

  return (
    <TouchableOpacity
      style={wrapperStyle ? wrapperStyle : styles.heartWrapper}
      onPress={onPressHeart}>
      {favorite ? (
        <FontAwesomeIcon
          icon={faHeart}
          size={size}
          style={styles.heartIconSelected}
        />
      ) : (
        <FontAwesomeIcon
          // icon="fa-regular fa-heart"
          icon={faHeart}
          size={size}
          style={styles.heartIconNotSelected}
        />
      )}
    </TouchableOpacity>
  );
};
