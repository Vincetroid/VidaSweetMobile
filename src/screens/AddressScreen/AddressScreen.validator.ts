import { Validator } from 'fluentvalidation-ts';
import i18n from 'i18next';
import { AddressValidatorItem } from '@/interfaces';

const interiorNumberMaxLength = 20;
const zipCodeMaxLength = 5;
const phoneNumberMaxLength = 10;
const specialIndicationsMaxLength = 100;

export class AddressValidator extends Validator<AddressValidatorItem> {
  constructor() {
    super();

    this.ruleFor('addressName')
      .notEmpty()
      .withMessage(i18n.t('EnterAddressName'));

    this.ruleFor('street').notEmpty().withMessage(i18n.t('EnterStreet'));

    this.ruleFor('exteriorNumber')
      .notEmpty()
      .withMessage(i18n.t('EnterExteriorNumber'));

    // No es obligatorio pero no quiero que introduzcan más de 20 caracteres raros en el peor de los casos, a lo mucho S/N
    this.ruleFor('interiorNumber')
      .maxLength(interiorNumberMaxLength)
      .withMessage(i18n.t('MaxLengthMessage', { interiorNumberMaxLength }));

    this.ruleFor('colonia').notEmpty().withMessage(i18n.t('EnterColonia'));

    this.ruleFor('municipality')
      .notEmpty()
      .withMessage(i18n.t('EnterMunicipality'));

    this.ruleFor('state').notEmpty().withMessage(i18n.t('EnterState'));

    this.ruleFor('zipCode')
      .notEmpty()
      .withMessage(i18n.t('EnterZipCode'))
      .maxLength(zipCodeMaxLength)
      .withMessage(i18n.t('MaxLengthMessage', { zipCodeMaxLength }));

    this.ruleFor('countryPhoneCode')
      .notEmpty()
      .withMessage(i18n.t('EnterCountryPhoneCode'))
      .maxLength(phoneNumberMaxLength)
      .withMessage(i18n.t('MaxLengthMessage', { phoneNumberMaxLength }));

    this.ruleFor('phoneNumber')
      .notEmpty()
      .withMessage(i18n.t('EnterPhoneNumber'));

    this.ruleFor('specialIndications')
      .maxLength(specialIndicationsMaxLength)
      .withMessage(i18n.t('MaxLengthMessage', { specialIndicationsMaxLength }));
  }
}
