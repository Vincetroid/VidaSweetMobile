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
    case ErrorCodes.missingPassword:
      Alert.alert(ErrorMessages.missingPassword);
      break;
    case ErrorCodes.tooManyRequests:
      Alert.alert(ErrorMessages.tooManyRequests);
      break;
    case ErrorCodes.invalidLoginCredentials:
      Alert.alert(ErrorMessages.invalidLoginCredentials);
      break;
    case ErrorCodes.firestorePermissionDenied:
      Alert.alert(ErrorMessages.firestorePermissionDenied);
      break;
    case ErrorCodes.stripeCanceled:
      // TODO: No provee una buena experiencia de usuario, ver si quitar
      // Alert.alert(ErrorMessages.stripeCanceled);
      break;
    default:
      Alert.alert(`${ErrorMessages.unknownError} ${errorCode}`);
      break;
  }
};

export default handleErrors;
