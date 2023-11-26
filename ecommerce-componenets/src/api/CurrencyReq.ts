import requestCurrency from "../utils/requestCurrency";

export function getCurrency(currency:string) {
    return requestCurrency({
      url: `/${currency}.json`,
      method: 'get',
    })
  }