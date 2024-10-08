import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import {
  CirclesLoader,
  DotsLoader,
  PulseLoader,
  TextLoader,
} from 'react-native-indicator';
import { themeStyles } from '@/global-styles';
import {
  faChevronLeft,
  faChevronRight,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { styles } from './OrderInProgressIndicator.styles';

interface OrderInProgressIndicatorItem {
  showOrderInProgress: Boolean;
}

export const OrderInProgressIndicator: FunctionComponent<
  OrderInProgressIndicatorItem
> = ({ showOrderInProgress = false }) => {
  return showOrderInProgress ? (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <PulseLoader size={18} color={themeStyles.black} frequency={2200} />
      </View>
      <View style={styles.information}>
        <View style={styles.infoTop}>
          <Text style={styles.etaLabel}>Entrega estimada</Text>
        </View>
        <View style={styles.infoBottom}>
          <Text style={styles.eta}>10/10/2024 - 12:10pm</Text>
        </View>
      </View>
      <View style={styles.rightSide}>
        <FontAwesomeIcon icon={faChevronRight} size={16} style={styles.icon} />
      </View>
    </View>
  ) : null;
};
