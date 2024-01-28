import React from 'react';
import { Provider } from 'react-redux';
import { STRIPE_PUBLISHABLE_KEY } from '@env';
import { StripeProvider } from '@stripe/stripe-react-native';
import { store } from '@/redux-content/store';
import { ChatWrapper } from '@/components';
import { UserNavigator } from '../../navigators/UserNavigator/UserNavigator'; //TODO: Make the import like the others

export const AuthenticatedUser = () => {
  return (
    <StripeProvider
      publishableKey={STRIPE_PUBLISHABLE_KEY}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <Provider store={store}>
        <ChatWrapper>
          <UserNavigator />
        </ChatWrapper>
      </Provider>
    </StripeProvider>
  );
};
