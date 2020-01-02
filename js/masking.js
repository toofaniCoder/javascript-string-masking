var phone = "1234567890";
var firstDigit = phone.slice(0, 4);
var masked_str = firstDigit.padEnd(10, "*");

document.querySelector(".otp-text").innerHTML =
  "Check OTP in your phone number " + masked_str;
