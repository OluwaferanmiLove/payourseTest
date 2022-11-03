import {coinInfo} from '../constant/staticData';

export const getCoinLogoName = (coin: string) => {
  switch (coin) {
    case 'BTC':
      return coinInfo.BTC;
    case 'ETH':
      return coinInfo.ETH;
    case 'USDT':
      return coinInfo.USDT;
    case 'TRON_USDT':
      return coinInfo.TRON_USDT;
    case 'CUSD':
      return coinInfo.CUSD;
    case 'BUSD':
      return coinInfo.BUSD;
    case 'USD':
      return coinInfo.USD;
    case 'NGN':
      return coinInfo.NGN;
    case 'DASH':
      return coinInfo.DASH;
    case 'BNB':
      return coinInfo.BNB;
    default:
      return coinInfo.default;
  }
};
