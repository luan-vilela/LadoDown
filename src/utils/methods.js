import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  differenceInWeeks,
} from 'date-fns';

export const isValidObjField = obj => {
  return Object.values(obj).every(value => value.trim());
};

export const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('');
  }, 2500);
};

export const isValidEmail = value => {
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value);
};

export const formatDifference = (date1, date2) => {
  const years = differenceInYears(date2, date1);
  const months = differenceInMonths(date2, date1) % 12;
  const days = differenceInDays(date2, date1) % 30;
  const weeks = differenceInWeeks(date2, date1) % 4;

  if (years > 0) {
    return `${years} a ${months} m`;
  } else if (months > 6) {
    return `${months} M`;
  } else if (months > 0) {
    return `${months} M ${days} D`;
  } else if (weeks > 0) {
    return `${months} M ${days} D`;
  } else {
    return ` ${days % 7} D`;
  }
};
