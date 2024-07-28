import { Validator } from 'fluentvalidation-ts';
import i18n from 'i18next';
import { UserItem } from '@/interfaces';

export class UserValidator extends Validator<UserItem> {
  constructor() {
    super();

    this.ruleFor('names').notEmpty().withMessage(i18n.t('EnterYourName'));

    this.ruleFor('surnames').notEmpty().withMessage(i18n.t('EnterSurnames'));

    this.ruleFor('email').notEmpty().withMessage(i18n.t('EnterYourEmail'));

    this.ruleFor('password')
      .notEmpty()
      .withMessage(i18n.t('EnterValidPassword'));
  }
}
