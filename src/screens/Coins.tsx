import React, {useEffect, useState} from 'react';
import {
  FlatList,
  LayoutAnimation,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import CoinCard from '../components/CoinCard';
// import CoinRateModal from '../components/CoinRateModal';
import Container from '../components/Container';
import Header from '../components/Header';
import LoadingContainer from '../components/LoadingContainer';
import {coinInfo} from '../constant/staticData';
import {useGetSupportedCoinQuery} from '../redux/CoinApi';
import {hp, wp} from '../utils/responsive-dimension';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../theme/colors';
import {Platform, UIManager} from 'react-native';
import SearchInput from '../components/SearchInput';

const Coins = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [coinData, setCoinData] = useState<string[]>([]);
  const {data: supportedCoins, isLoading: getCoinsLoading} =
    useGetSupportedCoinQuery();

  const navigation = useNavigation();

  useEffect(() => {
    if (supportedCoins) {
      setCoinData(supportedCoins?.data.incomingCurrencies!);
    }
  }, [supportedCoins]);

  const Seperator = () => {
    return <View style={{height: hp(24)}} />;
  };

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const handleSearch = (text: string) => {
    if (text.length === 0) {
      setCoinData(supportedCoins?.data.incomingCurrencies!);
    }

    let newList = supportedCoins?.data.incomingCurrencies.filter(
      (name: any) => {
        return name.toLowerCase().includes(text.toLowerCase());
      },
    );

    if (newList) {
      setCoinData(newList);
      return;
    }

    if (!newList) {
      setCoinData(supportedCoins?.data.incomingCurrencies!);
      return;
    }
  };

  const handleShowSearch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    setShowSearch(!showSearch);
  };

  return (
    <SafeAreaView style={styles.main} testID={'coins-screen'}>
      <LoadingContainer loading={getCoinsLoading}>
        {showSearch ? (
          <SearchInput
            handleSearch={handleSearch}
            onPressClose={handleShowSearch}
          />
        ) : (
          <Header
            subTitle={'Payourse'}
            title={'Coinprofile'}
            onPressSearch={handleShowSearch}
          />
        )}
        <Container>
          <FlatList
            data={coinData}
            style={styles.coinList}
            renderItem={({item}) => (
              <CoinCard
                testID={item}
                image={coinInfo[item as keyof typeof coinInfo]?.logo}
                coinName={coinInfo[item as keyof typeof coinInfo]?.name}
                coinCode={item}
                onPress={() => navigation.navigate('CoinRates', {coin: item})}
              />
            )}
            keyExtractor={item => item}
            ItemSeparatorComponent={Seperator}
          />
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  coinList: {
    paddingTop: hp(24),
  },
});

export default Coins;
