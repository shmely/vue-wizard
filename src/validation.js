import { extend, configure } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";
import VueI18n from "./i18n";

configure({
  defaultMessage: (field, values) => {
    
    values._field_ = VueI18n.t(`form101.fields.${field}`);

    return VueI18n.t(`validators.${values._rule_}`, values);
  }
});

extend("required", required);

// Install email rule.
extend("email", email);

// Install min rule.
extend("min", min);


extend('positive', value => {
  return value >= 0;
});

extend('min-length', {
  validate(value, args) {
    return value.length >= args.length;
  },
  params: ['length'],
  //message: 'The {_field_} field must have at least {length} characters'
  //message: () => VueI18n.$t('validators.min-length')

});
extend('max-length', {
  validate(value, args) {
    return value.length <= args.length;
  },
  params: ['length'],
  //message: 'The {_field_} field must have at least {length} characters'
  //message: () => VueI18n.$t('validators.min-length')

});
extend('id-num', {
  validate(value) {
    if (!value) return false;
    while (value.length < 9) {
      value = '0' + value;
    }
    // CHECK THE ID NUMBER
    var mone = 0,
      incNum;
    for (var i = 0; i < 9; i++) {
      incNum = Number(value.charAt(i));
      incNum *= (i % 2) + 1;
      if (incNum > 9) incNum -= 9;
      mone += incNum;
    }
    if (mone % 10 !== 0) {
      return false;
    }
    return true;
  },
});