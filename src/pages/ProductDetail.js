import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../components/common/Button';
import MainContainer from '../components/common/MainContainer';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import {logger} from '../core/AppLogger';
import {goBack, navigate} from '../navigation/RootNavigation';

const ProductDetail = () => {
  const windowWidth = Dimensions.get('window').width;
  const product = useSelector(state => state.product.product);
  logger(product);
  useEffect(() => {}, []);

  return (
    <MainContainer
      header={{
        title: product.product,
        noLeft: true,
        backgroundColor: Colors.header,
      }}>
      <View style={styles.containerTop}>
        <Image
          style={styles.logo}
          source={{uri: product.image, width: (windowWidth * 90) / 100}}
        />
      </View>
      <View style={{flex: 1, margin: 15}}>
        <Text style={styles.labelT}>Detalles del Producto:</Text>
        <Text style={styles.labelB}>Comprado el {product.createdAt}</Text>
        {!product.is_redemption ? (
          <Text style={styles.labelT}>Con esta compra acumulaste:</Text>
        ) : (
          <Text style={styles.labelT}>Con esta compra perdiste:</Text>
        )}
        <Text style={styles.labelP}>{product.points} puntos</Text>
        <View style={{flexDirection: 'row', marginTop: 20, flex: 1}}>
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
    borderRadius: 10,
    flex: 1,
    margin: 10,
  },
  btn: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  containerTop: {
    flex: 1,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    flexDirection: 'row',
  },
  viewTop: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  viewF: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  labelP: {
    color: Colors.black,
    fontFamily: Fonts.name.bold,
    fontSize: Fonts.size._24px,
    lineHeight: 32.78,
    marginTop: 25,
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
  viewP: {
    flex: 1.5,
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  viewL: {
    flex: 0.5,
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
});
