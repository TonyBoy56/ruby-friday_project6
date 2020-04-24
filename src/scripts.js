// https://prime.exchangerate-api.com/v5/API_KEY/latest/USD //

import './main.js'

export class CurrencyExchange {
  async getLatest() {
    try {
      let response = await fetch(`https://prime.exchangerate-api.com/v5/?key=${process.env.API_KEY}/latest/USD`);
      if (response.status === 200 && response.ok === true) {
        let postJSON = await response.json();
      } else {
        postJSON = false;
      }
      return postJSON;
    } catch (error) {
      return ("API call Failed.")
    }
  }
}