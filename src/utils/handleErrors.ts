import { Alert } from 'react-native';
import ErrorCodes from './ErrorCodes';
import ErrorMessages from './ErrorMessages';

const handleErrors = (errorCode: string) => {
  switch (errorCode) {
    case ErrorCodes.invalidEmail:
      Alert.alert(ErrorMessages.invalidEmail);
      break;
    case ErrorCodes.duplicatedEmail:
      Alert.alert(ErrorMessages.duplicatedEmail);
      break;
    case ErrorCodes.networkRequestFailed:
      Alert.alert(ErrorMessages.networkRequestFailed);
      break;
    case ErrorCodes.userNotFound:
      Alert.alert(ErrorMessages.userNotFound);
      break;
    case ErrorCodes.wrongPassword:
      Alert.alert(ErrorMessages.wrongPassword);
      break;
    default:
      Alert.alert(`${ErrorMessages.unknownError} ${errorCode}`);
      break;
  }
};

export default handleErrors;
