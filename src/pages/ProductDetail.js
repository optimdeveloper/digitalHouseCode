import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import Button from '../components/common/Button';
import MainContainer from '../components/common/MainContainer';
import CommonStyle from '../components/CommonStyle';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import {logger} from '../core/AppLogger';
import {goBack} from '../navigation/RootNavigation';

const ProductDetail = () => {
  const {width} = Dimensions.get('window');
const actualImageHeight = 200;
const actualImageWidth = 500;
  const product = useSelector(state => state.product.product);
  logger(product);
  useEffect(() => {}, []);

  return (
    <MainContainer
      header={{
        title: product.product,
        noLeft: true,
        hheader: true,
        backgroundColor: Colors.header,
      }}>
    <View style={[CommonStyle.Shadow,styles.containerTop]}>
      <View style={{
        alignSelf:"center",
        width: 50 * (width / 100),
        height: actualImageHeight * (width / actualImageWidth),
      }}>
        <Image
          style={styles.logo}
          source={{uri: product.image}}
        />
      </View>
      </View>
      <View style={{flex: 1, margin: 20}}>
        <Text style={styles.labelT}>Detalles del Producto:</Text>
        <Text style={styles.labelB}>Comprado el {product.createdAt}</Text>
        {!product.is_redemption ? (
          <Text style={styles.labelT}>Con esta compra acumulaste:</Text>
        ) : (
          <Text style={styles.labelT}>Con esta compra perdiste:</Text>
        )}
        <Text style={styles.labelP}>{product.points} puntos</Text>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Button
            style={[styles.btn]}
            title="Aceptar"
            onPress={() => goBack()}
          />
        </View>
      </View>
    </MainContainer>
  );
};

export default ProductDetail;
const styles = StyleSheet.create({
  logo: {
    width: null, height: null,
    flex:1,
  },
  btn: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  containerTop: {
    marginTop:20,
    alignSelf: 'center',
  },

  labelP: {
    color: Colors.black,
    fontFamily: Fonts.name.bold,
    fontSize: Fonts.size._24px,
    lineHeight: 32.78,
    marginTop: 35,
  },
  labelT: {
    color: Colors.gray,
    fontFamily: Fonts.name.bold,
    fontSize: Fonts.size._14px,
    lineHeight: 19.12,
  },
  labelB: {
    color: Colors.black,
    fontFamily: Fonts.name.bold,
    fontSize: Fonts.size._16px,
    lineHeight: 21.86,
    marginTop: 15,
    marginBottom: 15,
  },

});
