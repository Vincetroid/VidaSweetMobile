interface ErrorCodesInterface {
  duplicatedEmail: string;
  invalidEmail: string;
  networkRequestFailed: string;
  userNotFound: string;
  wrongPassword: string;
  missingPassword: string;
  tooManyRequests: string;
  invalidLoginCredentials: string;
  invalidCredentials: string;
  invalidCredential: string;
  firestorePermissionDenied: string;
  stripeCanceled: string;
}

const ErrorCodes: ErrorCodesInterface = Object.freeze({
  duplicatedEmail: 'auth/email-already-in-use',
  invalidEmail: 'auth/invalid-email',
  networkRequestFailed: 'auth/network-request-failed',
  userNotFound: 'auth/user-not-found',
  wrongPassword: 'auth/wrong-password',
  missingPassword: 'auth/missing-password',
  tooManyRequests: 'auth/too-many-requests',
  invalidLoginCredentials: 'auth/invalid-login-credentials',
  invalidCredentials: 'auth/invalid-credentials',
  invalidCredential: 'auth/invalid-credential',
  firestorePermissionDenied: 'firestore/permission-denied',
  stripeCanceled: 'Canceled',
});

export default ErrorCodes;
