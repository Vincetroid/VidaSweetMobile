import i18n from 'i18next';

interface ErrorMessagesInterface {
  duplicatedEmail: string;
  invalidEmail: string;
  networkRequestFailed: string;
  unknownError: string;
  userNotFound: string;
  wrongPassword: string;
  missingPassword: string;
  tooManyRequests: string;
  invalidCredentials: string;
  invalidCredential: string;
  invalidLoginCredentials: string;
  firestorePermissionDenied: string;
  stripeCanceled: string;
}

const ErrorMessages: ErrorMessagesInterface = Object.freeze({
  duplicatedEmail: i18n.t('DuplicatedEmail'),
  invalidEmail: i18n.t('InvalidEmail'),
  networkRequestFailed: i18n.t('NetworkRequestFailed'),
  unknownError: i18n.t('UnknownError'),
  userNotFound: i18n.t('UserNotFound'),
  wrongPassword: i18n.t('WrongPassword'),
  missingPassword: i18n.t('MissingPassword'),
  tooManyRequests: i18n.t('TooManyRequests'),
  invalidCredentials: i18n.t('InvalidLoginCredentials'),
  invalidCredential: i18n.t('InvalidLoginCredentials'),
  invalidLoginCredentials: i18n.t('InvalidLoginCredentials'),
  firestorePermissionDenied: i18n.t('FirestorePermissionDenied'),
  stripeCanceled: i18n.t('StripeCanceled'),
});

export default ErrorMessages;
