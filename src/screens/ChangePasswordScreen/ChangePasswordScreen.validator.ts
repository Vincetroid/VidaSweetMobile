import { Validator } from 'fluentvalidation-ts';
import i18n from 'i18next';
import { ChangePasswordItem } from '@/interfaces';
import { passwordRegex } from '@/utils';

export class ChangePasswordValidator extends Validator<ChangePasswordItem> {
  constructor() {
    super();

    // this.ruleFor('currentPassword')
    //   .notEmpty()
    //   .withMessage(i18n.t('Contraseña actual no validada'));
    // .matches(RegExp(passwordRegex))
    // .withMessage(i18n.t('EnterValidPasswordMsg'));

    this.ruleFor('newPassword')
      // .notEmpty()
      // .withMessage(i18n.t('La contraseña no puede estar vacia'))
      .matches(RegExp(passwordRegex))
      .withMessage(i18n.t('EnterValidPasswordMsg'));

    this.ruleFor('confirmNewPassword')
      // .notEmpty()
      // .withMessage(i18n.t('La contraseña no puede estar vacia'))
      .matches(RegExp(passwordRegex))
      .withMessage(i18n.t('EnterValidPasswordMsg'))
      .must((confirmNewPassword: any, user: any) => {
        console.log(confirmNewPassword, user.newPassword);
        return confirmNewPassword === user.newPassword;
      })
      .withMessage('Las contraseñas no coinciden');
  }
}
