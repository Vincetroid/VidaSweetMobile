interface ErrorCodesInterface {
  duplicatedEmail: string;
  invalidEmail: string;
  networkRequestFailed: string;
  userNotFound: string;
  wrongPassword: string;
}

const ErrorCodes: ErrorCodesInterface = Object.freeze({
  duplicatedEmail: 'auth/email-already-in-use',
  invalidEmail: 'auth/invalid-email',
  networkRequestFailed: 'auth/network-request-failed',
  userNotFound: 'auth/user-not-found',
  wrongPassword: 'auth/wrong-password',
});

export default ErrorCodes;
