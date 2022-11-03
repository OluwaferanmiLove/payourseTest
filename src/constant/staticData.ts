export const baseUrl = 'https://staging-biz.coinprofile.co/v2/currency/';

export const coinHierachy = [
  'TRON_USDT',
  'USDT',
  'USD',
  'BUSD',
  'CUSD',
  'BTC',
  'ETH',
  'NGN',
];

export const coinInfo = {
  BTC: {
    logo: require('../assets/coinLogos/btc.png'),
    name: 'Bitcoin',
  },
  ETH: {
    logo: require('../assets/coinLogos/eth.png'),
    name: 'Etherum',
  },
  USDT: {
    logo: require('../assets/coinLogos/usdt.png'),
    name: 'Tether',
  },
  TRON_USDT: {
    logo: require('../assets/coinLogos/tron_usdt.png'),
    name: 'Tron',
  },
  CUSD: {
    logo: require('../assets/coinLogos/cusd.png'),
    name: 'Celio USD',
  },
  BUSD: {
    logo: require('../assets/coinLogos/busd.png'),
    name: 'Binance USD',
  },
  USD: {
    logo: require('../assets/coinLogos/usd.png'),
    name: 'US Dollar',
  },
  NGN: {
    logo: require('../assets/coinLogos/ngn.png'),
    name: 'Nigeria Naira',
  },
  DASH: {
    logo: require('../assets/coinLogos/dash.png'),
    name: 'Digital Cash',
  },
  BNB: {
    logo: require('../assets/coinLogos/bnb.png'),
    name: 'Binance Coin',
  },
  default: {
    logo: require('../assets/coinLogos/default.png'),
    name: 'Coin Name',
  },
};
