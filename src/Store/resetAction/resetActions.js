import {resetBankDetails} from '../BankDetails/bankDetailsSlice';
import {resetUserInfo} from '../Profile/userInfoSlice';

export const resetAllSlices = () => dispatch => {
  dispatch(resetUserInfo());
  dispatch(resetBankDetails());
};
