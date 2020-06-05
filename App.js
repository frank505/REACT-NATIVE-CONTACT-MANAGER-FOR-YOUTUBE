import React,{useEffect} from 'react'
import Main from './src/Main'
import { Provider } from 'react-redux';
import { store } from './src/CreateStore';
import {Root} from 'native-base'


// @TODO: This is to hide a Warning caused by NativeBase after upgrading to RN 0.62
import { YellowBox } from 'react-native'


YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
])
// ------- END OF WARNING SUPPRESSION
export default function App() {

  

  return (
    <Provider store={store}>
      <Root>
    <Main/>
    </Root>
    </Provider>
  )
}
