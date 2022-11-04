import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Container from '../components/Container';
import Header from '../components/Header';
import LoadingContainer from '../components/LoadingContainer';
import RateCard from '../components/RateCard';
import {coinInfo} from '../constant/staticData';
import {useGetCoinRateQuery} from '../redux/CoinApi';
import {CoinRateData} from '../redux/CoinModel';
import {colors} from '../theme/colors';
import {hp, wp} from '../utils/responsive-dimension';
import {getCoinLogoName} from '../utils/helper';

const CoinRates = () => {
  const [rateData, setRateData] = useState<any[]>([]);
  const [NGNRate, setNGNRate] = useState<number>(0);
  const [USDRate, setUSDRate] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const {data: coinRate} = useGetCoinRateQuery();

  const {coin} = useRoute().params;

  useEffect(() => {
    if (coinRate) {
      getCoinInResponse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coinRate]);

  const getNairaUsdRate = (name, rate) => {
    if (name === 'NGN') {
      setNGNRate(rate);
      return;
    }

    if (name === 'USD') {
      setUSDRate(rate);
      return;
    }
  };

  const getCoin = (coinKey: string) => {
    let coinName;

    if (coinKey.includes(coin)) {
      coinName = coinKey.replace(coin, '');
    }
    return coinName;
  };

  const getCoinInResponse = () => {
    const keys = Object.keys(coinRate?.data!);
    let coinData: any[] = [];

    keys.forEach((key: string) => {
      let coinExist = getCoin(key);

      if (coinExist) {
        coinData.push({
          [coinExist]: coinRate?.data[key as keyof CoinRateData]?.rate,
          rate: coinRate?.data[key as keyof CoinRateData]?.rate,
          name: key,
          coinCode: coinExist,
        });
        getNairaUsdRate(
          coinExist,
          coinRate?.data[key as keyof CoinRateData]?.rate,
        );
      }
    });
    setRateData(coinData);
    setLoading(false);
  };

  const Seperator = () => {
    return <View style={{height: hp(24)}} />;
  };

  return (
    <SafeAreaView style={styles.main} testID={'coin-rate-screen'}>
      <LoadingContainer loading={loading}>
        <Header
          subTitle={coin}
          title={coinInfo[coin as keyof typeof coinInfo]?.name}
          showSearchBtn={false}
          titleContainerStyle={{alignSelf: 'flex-end', marginLeft: wp(16)}}
          showBackBtn
          backBtnTestID={'back-btn'}
        />
        <Container marginTop={hp(24)} customStyles={{flex: 1}}>
          <View style={styles.coinInfoContainer}>
            <View>
              <Text style={styles.subTitle}>$ {USDRate.toLocaleString()}</Text>
              <Text style={styles.title}>
                {/* {coinInfo[coin as keyof typeof coinInfo]?.name} */}₦{' '}
                {NGNRate.toLocaleString()}
              </Text>
            </View>
            <Image
              style={styles.image}
              source={coinInfo[coin as keyof typeof coinInfo]?.logo}
            />
          </View>
          <View style={styles.rateContainer}>
            <Text style={styles.sectionTitle}>Rates</Text>
            <FlatList
              data={rateData}
              style={styles.coinList}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <RateCard
                  image={getCoinLogoName(item.coinCode).logo}
                  coinName={getCoinLogoName(item.coinCode).name}
                  coinCode={`${item.coinCode} (${item.name})`}
                  coinRate={item.rate}
                />
              )}
              keyExtractor={item => item.name}
              ItemSeparatorComponent={Seperator}
            />
          </View>
        </Container>
      </LoadingContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: wp(24),
    backgroundColor: colors.white,
  },
  image: {
    width: wp(42),
    height: hp(42),
  },
  coinInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderBottomColor: colors.border,
    // borderBottomWidth: wp(1),
    // paddingBottom: hp(16),
    // flex: 1,
    // marginLeft: wp(16),
  },
  title: {
    fontSize: wp(24),
    fontFamily: 'Graphik-Medium',
    color: colors.black,
    lineHeight: hp(22.4),
    marginTop: hp(8),
  },
  subTitle: {
    fontSize: wp(13),
    fontFamily: 'Graphik-Regular',
    color: colors.grey3,
    lineHeight: hp(20.3),
  },
  rateContainer: {
    flex: 1,
    marginTop: hp(24),
  },
  sectionTitle: {
    fontSize: wp(16),
    fontFamily: 'Graphik-Medium',
    color: colors.grey3,
    lineHeight: hp(20.3),
  },
  coinList: {
    flex: 1,
    marginTop: hp(24),
  },
});

export default CoinRates;
