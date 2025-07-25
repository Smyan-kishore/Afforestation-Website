// Utility functions for UPI-related operations

export function generateUPILink(upiId: string, amount?: number) {
  const upiURL = new URL('upi://pay');
  upiURL.searchParams.append('pa', upiId); // payee address
  upiURL.searchParams.append('pn', 'GreenEarth NGO'); // payee name
  if (amount) {
    upiURL.searchParams.append('am', amount.toString()); // amount
  }
  upiURL.searchParams.append('cu', 'INR'); // currency
  upiURL.searchParams.append('tn', 'Donation to GreenEarth'); // transaction note
  
  return upiURL.toString();
}