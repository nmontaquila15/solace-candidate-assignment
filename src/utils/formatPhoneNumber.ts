export default function formatPhoneNumber(phoneNumber: number): string {
  const phoneNumberString = phoneNumber.toString();
  const areaCode = phoneNumberString.slice(0, 3);
  const exchangeCode = phoneNumberString.slice(3, 6);
  const subscriberNumber = phoneNumberString.slice(6, 10);
  return `(${areaCode}) ${exchangeCode}-${subscriberNumber}`;
}
