import React from "react";

import { StyleSheet, Text, View} from 'react-native';
import Clickable from "./common/Clickable";
import { navigate } from "../navigation/RootNavigation";
import Images from "../constants/Images";
import ImageButton from "./common/ImageButton";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

export default function CardProduct({ item }) {

  return (
  <View style={{flex: 1}}>
  
                      <Clickable onPress={() => {
                        navigate("detailProduct",{data:item})
                    }}>
                      <View style={styles.container}>
                        <View style={styles.viewTop}>
                          <View style={styles.viewF}>
                            <Text style={styles.labelT}>{item.name}</Text>
                            <Text style={styles.labelB}>{item.name_planet}</Text>
                          </View>
                        </View>
          
                        <View style={styles.viewL}>
                          <ImageButton source={Images.ic_right}/>
                        </View>
                      </View>
                    </Clickable>
   </View>
  );
}
const styles = StyleSheet.create({
  touch: {
    flexDirection: "row",
    flex: 3,
  },
  footerText: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
},
  containerTop: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 5,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth:1,
    borderBottomColor:Colors.grayColor,
    paddingBottom:20
  },
  label: {
    fontSize: Fonts.size._12px,
  },
  viewTop: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  viewF: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  labelT: {
    color: Colors.black_real,
    fontWeight: "bold",
    fontSize: Fonts.size._14px,
  },
  labelB: {
    color: Colors.grayColor,
    fontSize: Fonts.size._12px,
    fontWeight:"800"
  },
  viewL: {
    flex: 1,
    alignItems: "flex-end",
    marginBottom: 15,
    marginRight:15
  },
});
