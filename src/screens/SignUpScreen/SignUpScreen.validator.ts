import { Validator } from 'fluentvalidation-ts';
import { UserItem } from '@/interfaces';

export class UserValidator extends Validator<UserItem> {
  constructor() {
    super();

    this.ruleFor('userName').notEmpty().withMessage('Please enter your name');

    this.ruleFor('email').notEmpty().withMessage('Please enter your email');

    this.ruleFor('password')
      .notEmpty()
      .withMessage('Please enter a valid password');
  }
}
