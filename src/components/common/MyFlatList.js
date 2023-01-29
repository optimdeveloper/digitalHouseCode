import React, { useRef, } from 'react'
import {  FlatList,SafeAreaView } from 'react-native'
import Colors from '../../constants/Colors'
import Indicator from './Indicator'

import NoDataView from './NoDataView'

export default function MyFlatList({ renderItem,
    numColumns, style, loading, extraData, data,
    onRefresh, refreshing, noDataMsg, footerComponent,onEndReached }) {
    const flatList = useRef(null)

    const renderList = () => {
        return (
        <FlatList
          
            contentContainerStyle={{flexGrow: 1}}
            ListFooterComponent={footerComponent}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={data}
            ref={flatList}
            bounces={true}
            refreshing={refreshing}
            numColumns={numColumns}
            style={style}
            onRefresh={onRefresh}
            extraData={extraData}
            renderItem={renderItem}
            keyExtractor={(item, index) => "key" + index}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.01}
        />
      
        )

    }

    const renderLoading = () => {

        return (<Indicator text="Loading" />)

    }

    const renderNoData = () => {

        return (
            <NoDataView message={noDataMsg || "Failed to Load Data"} />
        )
    }


   const render = () => {

        return loading ? renderLoading() : data.length > 0 ? renderList() : renderNoData()

    }

    return (  
        <SafeAreaView style={{flex:1,borderRadius:7,backgroundColor:Colors.white}}>
      {render()}
    </SafeAreaView>
    )

}
