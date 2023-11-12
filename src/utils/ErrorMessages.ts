interface ErrorMessagesInterface {
  duplicatedEmail: string;
  invalidEmail: string;
  networkRequestFailed: string;
  unknownError: string;
  userNotFound: string;
  wrongPassword: string;
}

const ErrorMessages: ErrorMessagesInterface = Object.freeze({
  duplicatedEmail: 'Email already in use, please provide another one.',
  invalidEmail: 'Nonexistent or invalid Email. Please type a valid Email.',
  networkRequestFailed:
    'Error, please check your internnet connection and try again.',
  unknownError: 'Error: ',
  userNotFound: 'User not found with that email, please check.',
  wrongPassword: 'Wrong password, please check it.',
});

export default ErrorMessages;
