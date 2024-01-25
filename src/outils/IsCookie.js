import Cookies from "js-cookie";


export const IsCookies = ()=> Cookies.get('NaN_Digit_Sender_Token_Secretly');

export const DeleteCookies = () => Cookies.remove('NaN_Digit_Sender_Token_Secretly');
