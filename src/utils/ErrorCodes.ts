interface ErrorCodesInterface {
  duplicatedEmail: string;
  invalidEmail: string;
  networkRequestFailed: string;
  userNotFound: string;
  wrongPassword: string;
  missingPassword: string;
}

const ErrorCodes: ErrorCodesInterface = Object.freeze({
  duplicatedEmail: 'auth/email-already-in-use',
  invalidEmail: 'auth/invalid-email',
  networkRequestFailed: 'auth/network-request-failed',
  userNotFound: 'auth/user-not-found',
  wrongPassword: 'auth/wrong-password',
  missingPassword: 'auth/missing-password',
});

export default ErrorCodes;
