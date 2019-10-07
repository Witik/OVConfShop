import {configure, extend} from 'vee-validate';
import {email, required} from "vee-validate/dist/rules";

// Add a rule.
extend('required', {
    ...required,
    message: 'The {_field_} field is required'
});
extend('email', {
    ...email,
    message: 'The {_field_} field is not a valid email'
});
extend('url', {
    validate: (input) => (/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?/gi).test(input),
    message: 'The {_field_} field is not a valid URL'
});

configure({bails: false});
