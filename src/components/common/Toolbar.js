import React, {Component} from 'react';
import {Image, StatusBar, I18nManager} from 'react-native';
import {Header, Left, Right, Body, Icon, Text, Title} from 'native-base';
import {goBack} from '../../navigation/RootNavigation';
import Clickable from './Clickable';
import Colors from '../../constants/Colors';
import Images from '../../constants/Images';
import Fonts from '../../constants/Fonts';

class Toolbar extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Header
        onLayout={this.props.onLayout}
        transparent
        androidStatusBarColor={
          this.props.androidStatusBarColor ||
          'transparent'
        }
        style={{
          height:!this.props.hheader ? 0 :150,
          backgroundColor: this.props.backgroundColor || Colors.screen,
          justifyContent: 'center',
          borderBottomWidth: 0,
          borderBottomColor: 'transparent',
          ...this.props.style,
        }}>
        {!this.props.noLeft && <Left style={{flex: 1}}>
          {this._renderOption(
            this.props.noLeft
              ? undefined
              : this.props.left || {
                  image: Images.ic_back,
                  onPress: () => {
                    goBack();
                  },
                },
          )}
        </Left> }

        <Body style={{flex: 4}}>{this._renderTitle()}</Body>
        <Right style={{flex: 1}}>{this._renderRight()}</Right>
        <StatusBar translucent={true} barStyle={'dark-content'} />
      </Header>
    );
  }

  _renderTitle() {
    let {title, image} = this.props;

    if (title) {
      return (
        <Title
          style={[
            {alignSelf: 'center'},
            styles.titleStyle,
          ]}>
          {title}
        </Title>
      );
    } else if (image) {
      return (
        <Image
          source={image}
          style={{
            alignSelf: 'center',
            resizeMode: 'contain',
            tintColor: this.props.titleColor,
          }}
        />
      );
    }
  }

  _renderOption(options) {
    if (options) {
      let {icon, image, text, onPress, color, imageStyle, view} = options;

      if (icon) {
        return (
          <Clickable borderLess onPress={onPress} style={styles.iconStyle}>
            <Icon name={icon} style={{color: color || Colors.Defaultblack}} />
          </Clickable>
        );
      } else if (image) {
        return (
          <Clickable borderLess onPress={onPress}>
            <Image
              source={image}
              style={{
                marginHorizontal: 8,
                resizeMode: 'contain',
                transform: [{rotate: I18nManager.isRTL ? '180deg' : '0deg'}],
                ...imageStyle,
              }}
            />
          </Clickable>
        );
      } else if (text) {
        return (
          <Clickable
            borderLess
            style={styles.textContainerStyle}
            onPress={onPress}>
            <Text
              style={{
                ...styles.textStyle,
                color: color || Colors.Defaultwhite,
              }}>
              {text}
            </Text>
          </Clickable>
        );
      } else if (view && view.render) {
        return view.render();
      }
    }
  }

  _renderRight() {
    if (this.props.right)
      return this.props.right.map(right => {
        return this._renderOption(right);
      });
  }
}

const styles = {
  textStyle: {
    marginHorizontal: 4,
    fontSize: Fonts.size._18px,
    color: Colors.headerTitleColor,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Fonts.name.bold,
  },
  titleStyle: {
    fontSize: Fonts.size._24px,
    color: Colors.black,
    fontFamily: Fonts.name.bold,
  },
  textContainerStyle: {},
  iconStyle: {
    marginHorizontal: 4,
    padding: 4,
  },
};

export default Toolbar;
