import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Colors, FontSizes, themeStyles } from '@/global-styles';
import { faCircleXmark, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Button } from '../Button';

type SearchBarComponentProps = {};

const ICON_BTN_SIZE = 16;

export const SearchBar: React.FunctionComponent<
  SearchBarComponentProps
> = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const updateSearch = (searchTerm: string) => {
    setSearch(searchTerm);
  };

  const onAddSearch = (searchTerm: string) => {};

  const onPressCancelIcon = () => {
    clearInput();
    // setLoading(!loading);
  };

  const clearInput = () => {
    setSearch('');
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
        value={search}
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

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: themeStyles.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    margin: 12,
    padding: 10,
    paddingLeft: 35,
    paddingRight: 35,
    flex: 1,
    backgroundColor: Colors.grayLightBg,
    fontSize: FontSizes.x_medium,
    borderWidth: 0,
    borderRadius: 10,
    color: themeStyles.text,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 1,
    left: 22,
    color: themeStyles.secondary,
  },
  cancelIcon: {
    color: themeStyles.secondary,
  },
  cancelPressable: {
    marginBottom: 16,
    zIndex: 10,
  },
  cancelPressableLoading: {
    zIndex: 10,
    position: 'absolute',
    right: 23,
    width: ICON_BTN_SIZE,
    height: ICON_BTN_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
