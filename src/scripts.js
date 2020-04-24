// https://prime.exchangerate-api.com/v5/API_KEY/latest/USD //

import './main.js';

export class CurrencyExchange {
  async getLatest() {
    try {
      // eslint-disable-next-line
      let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
      let postJSON;
      if (response.status === 200 && response.ok === true) {
        postJSON = await response.json();
      } else {
        postJSON = false;
      }
      return postJSON;
    } catch (error) {
      return ("API call Failed.");
    }
  }
}