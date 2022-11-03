import React, {ReactNode} from 'react';
import {ActivityIndicator} from 'react-native';
import {colors} from '../theme/colors';

interface LoadingContainerT {
  loading: boolean;
  children: ReactNode;
}

const LoadingContainer = ({loading, children}: LoadingContainerT) => {
  return (
    <>
      {loading ? (
        <ActivityIndicator size={'small'} color={colors.grey3} />
      ) : (
        children
      )}
    </>
  );
};

export default LoadingContainer;
