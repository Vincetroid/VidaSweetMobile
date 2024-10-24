import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { PulseLoader } from 'react-native-indicator';
import { getOrdersInProgress } from '@/fb/queries';
import { themeStyles } from '@/global-styles';
import { OrderItem } from '@/interfaces';
import { faChevronRight, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { formatTimestampToDate } from '@/utils';
import handleErrors from '@/utils/handleErrors';
import { styles } from './OrderInProgressIndicator.styles';

export const OrderInProgressIndicator = () => {
  const [ordersInProgress, setOrdersInProgress] = useState<
    Array<OrderItem> | []
  >([]);

  const fetchOrders = async () => {
    try {
      const ordersInProgressResult = await getOrdersInProgress();
      setOrdersInProgress(ordersInProgressResult);
    } catch (error) {
      const errorCode = error.code;
      handleErrors(errorCode);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const topComponentOrderInProgress = (
    <View style={styles.ordersContainer}>
      <Text style={styles.ordersLabel}>
        Órdenes en progreso {ordersInProgress.length}
      </Text>
      <View style={styles.closeIcon}>
        <FontAwesomeIcon icon={faClose} size={20} style={styles.icon} />
      </View>
    </View>
  );

  let componentToShow = null;

  if (ordersInProgress.length === 1) {
    componentToShow = (
      <>
        {topComponentOrderInProgress}
        <View style={styles.container}>
          <View style={styles.leftSide}>
            <PulseLoader size={18} color={themeStyles.black} frequency={2200} />
          </View>
          <View style={styles.information}>
            <View style={styles.infoTop}>
              <Text style={styles.etaLabel}>Entrega estimada</Text>
            </View>
            <View style={styles.infoBottom}>
              <Text style={styles.eta}>
                {formatTimestampToDate(ordersInProgress[0].deliverySchedule)}
              </Text>
            </View>
          </View>
          <View style={styles.rightSide}>
            <FontAwesomeIcon
              icon={faChevronRight}
              size={16}
              style={styles.icon}
            />
          </View>
        </View>
      </>
    );
  } else if (ordersInProgress.length > 1) {
    componentToShow = (
      <>
        {topComponentOrderInProgress}
        {ordersInProgress.map(order => (
          <View style={styles.container}>
            <View style={styles.leftSide}>
              <PulseLoader
                size={18}
                color={themeStyles.black}
                frequency={2200}
              />
            </View>
            <View style={styles.information}>
              <View style={styles.infoTop}>
                <Text style={styles.etaLabel}>Entrega estimada</Text>
              </View>
              <View style={styles.infoBottom}>
                <Text style={styles.eta}>
                  {formatTimestampToDate(order.deliverySchedule)}
                </Text>
              </View>
            </View>
            <View style={styles.rightSide}>
              <FontAwesomeIcon
                icon={faChevronRight}
                size={16}
                style={styles.icon}
              />
            </View>
          </View>
        ))}
      </>
    );
  }

  return componentToShow;
};
