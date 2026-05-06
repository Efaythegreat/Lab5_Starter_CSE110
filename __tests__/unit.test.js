// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//phone number
test('phone number parenthesis', () => {
    expect(isPhoneNumber('(111) 111-1111')).toBe(true);
});
test('phone number dash', () => {
    expect(isPhoneNumber('111-111-1111')).toBe(true);
});
test('phone number short', () => {
    expect(isPhoneNumber('(111) 111')).toBe(false);
});
test('phone number format', () => {
    expect(isPhoneNumber('1111111111')).toBe(false);
});

//email
test('basic email', () => {
  expect(isEmail('test@huh.edu')).toBe(true);
})
test('email underscore', () => {
  expect(isEmail('te_st@huh.edu')).toBe(true);
})
test('no @', () => {
  expect(isEmail('testhuh.edu')).toBe(false);
})
test('bad end email', () => {
  expect(isEmail('test@huh.e')).toBe(false);
})

//password
test('regular password', () => {
  expect(isStrongPassword('hello123')).toBe(true);
})
test('regular password underscore', () => {
  expect(isStrongPassword('hello123_')).toBe(true);
})
test('password start with number', () => {
  expect(isStrongPassword('123hello')).toBe(false);
})
test('too long password', () => {
  expect(isStrongPassword('hello1234567890worldhahahahahaha')).toBe(false);
})

//dates
test('valid date', () => {
  expect(isDate('4/1/2026')).toBe(true);
})
test('valid date double digit', () => {
  expect(isDate('12/12/2026')).toBe(true);
})
test('invalid date', () => {
  expect(isDate('4/1/26')).toBe(false);
})
test('invalid date2', () => {
  expect(isDate('111/1/2026')).toBe(false);
})

//hexcolor
test('valid color long', () => {
  expect(isHexColor('#FFFABC')).toBe(true);
})
test('valid color short', () => {
  expect(isHexColor('#FFF')).toBe(true);
})
test('invalid color', () => {
  expect(isHexColor('#JJK')).toBe(false);
})
test('invalid color length', () => {
  expect(isHexColor('#F')).toBe(false);
})