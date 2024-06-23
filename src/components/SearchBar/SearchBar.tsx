import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ProductItem } from '@/interfaces';
import { faCircleXmark, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Button } from '../Button';
import { styles } from './SearchBar.styles';

type SearchBarComponentProps = {
  products: ProductItem[];
  productsForSearch: ProductItem[];
  setProductsForSearch: React.Dispatch<React.SetStateAction<ProductItem[]>>;
};

const ICON_BTN_SIZE = 16;

export const SearchBar: React.FunctionComponent<SearchBarComponentProps> = ({
  products,
  setProductsForSearch,
}) => {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const updateSearch = (searchTerm: string) => {
    setSearchText(searchTerm);

    const productsFiltered = products.filter(product => {
      if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return product;
      }
    });

    if (!searchTerm) {
      setProductsForSearch(products);
    }

    setProductsForSearch(productsFiltered);
  };

  const onAddSearch = (searchTerm: string) => {};

  const onPressCancelIcon = () => {
    clearInput();
  };

  const clearInput = () => {
    setSearchText('');
  };

  return (
    <View style={styles.searchContainer}>
      <FontAwesomeIcon
        icon={faSearch}
        size={ICON_BTN_SIZE}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        onChangeText={updateSearch}
        value={searchText}
        placeholder={t('SearchPlaceholder')}
        maxLength={100}
        onBlur={() => {}}
        onChange={() => {}}
        onFocus={() => {}}
      />
      <Button
        onPress={onPressCancelIcon}
        buttonViewStyle={styles.cancelPressableLoading}
        isLoading={loading}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          size={ICON_BTN_SIZE}
          style={styles.cancelIcon}
        />
      </Button>
    </View>
  );
};
