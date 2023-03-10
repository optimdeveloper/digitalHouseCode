import {Container} from 'native-base';
import React, {Component} from 'react';
import {View,SafeAreaView} from 'react-native';

import Colors from '../../constants/Colors';


import Toolbar from './Toolbar';

class MainContainer extends Component {
  render() {
    return (
        
      <Container
        style={{flex: 1, backgroundColor: Colors.screen}}
        {...this.props}>
        {this.props.header ? (
          <Toolbar {...this.props.header} />
        ) : null}
        
        <View style={{flex: 1}}>{this.props.children}</View>
      </Container>
    
    );
  }
}

export default MainContainer;
