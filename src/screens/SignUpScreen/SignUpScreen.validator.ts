import { Validator } from 'fluentvalidation-ts';
import i18n from 'i18next';
import { UserItem } from '@/interfaces';
import { passwordRegex } from '@/utils';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// First layer of validations, second, firebase handle errors
export class UserValidator extends Validator<UserItem> {
  constructor() {
    super();

    this.ruleFor('names').notEmpty().withMessage(i18n.t('EnterYourName'));

    this.ruleFor('surnames').notEmpty().withMessage(i18n.t('EnterSurnames'));

    this.ruleFor('email')
      .notEmpty()
      .withMessage(i18n.t('EnterYourEmail'))
      .matches(RegExp(emailRegex))
      .withMessage(i18n.t('EnterValidEmail'));

    this.ruleFor('password')
      .notEmpty()
      .withMessage(i18n.t('La contraseña no puede estar vacia'))
      .matches(RegExp(passwordRegex))
      .withMessage(i18n.t('EnterValidPassword'));
  }
}
