import countries from './countries';

export default function agecheck(age: number, country: string): boolean {
    if (country.length != 2) {
        console.warn('[AgeCheck] The country code you inserted is too long or malformed');
        return false;
    } // Ensure country code is two characters long

    if (!countries.hasOwnProperty(country)) {
        console.warn('[WARN] User\'s country is not in our database, but user is over 13. Proceed with caution as laws may apply that we are not aware of.');
    }

    var countryAge = countries[country] ?? 13;
    if (age >= countryAge) {
      return true;
    } else {
      return false;
    }
}