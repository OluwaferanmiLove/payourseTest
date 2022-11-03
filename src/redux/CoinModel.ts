export interface SupportedCoinT {
  success: boolean;
  message: string;
  data: SupportedCoinData;
}

export interface SupportedCoinData {
  incomingCurrencies: string[];
  outgoingCurrencies: string[];
}

export interface CoinRateT {
  success: boolean;
  message: string;
  data: CoinRateData;
}

export interface CoinRateData {
  publicKey: string;
  BTCNGN: CoinDataT;
  BTCBUSD: CoinDataT;
  DASHBUSD: CoinDataT;
  DASHNGN: CoinDataT;
  ETHNGN: CoinDataT;
  USDTNGN: CoinDataT;
  TRON_USDTNGN: CoinDataT;
  BUSDNGN: CoinDataT;
  BNBNGN: CoinDataT;
  CUSDNGN: CoinDataT;
  BTCBTC: CoinDataT;
  DASHDASH: CoinDataT;
  TRON_USDTTRON_USDT: CoinDataT;
  BUSDBUSD: CoinDataT;
  CUSDCUSD: CoinDataT;
  ETHETH: CoinDataT;
  CoinDataT: CoinDataT;
  USDTUSDT: CoinDataT;
  BTCUSD: CoinDataT;
  DASHUSD: CoinDataT;
  ETHUSD: CoinDataT;
  BNBUSD: CoinDataT;
  USDTUSD: CoinDataT;
  CUSDUSD: CoinDataT;
  BUSDUSD: CoinDataT;
  BNBBUSD: CoinDataT;
  ETHBUSD: CoinDataT;
  FUSDBUSD: CoinDataT;
  USDTBUSD: CoinDataT;
  CUSDBUSD: CoinDataT;
  TRON_USDTBUSD: CoinDataT;
  TRON_USDTUSD: CoinDataT;
  signature: string;
}

export interface CoinDataT {
  rate: number;
  key: string;
}
