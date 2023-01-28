import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CardProduct from './CardProduct';
import MyFlatList from './common/MyFlatList'

export default function ListProduct() {
    const [refreshing, setRefreshing] = useState(false)
  const loading = useSelector((state) => state.product.loading);
  const data = useSelector((state) => state.product.products);
  const err = useSelector((state) => state.product.error);

  return (
   <>
   <MyFlatList
                        
                        showsVerticalScrollIndicator={true}
                        loading={loading}
                        data={data}
                        noDataMsg={err}
                        refreshing={refreshing}
                        onRefresh={() => setRefreshing(true)}
                        renderItem={({ item }) => (
                        <CardProduct item={item}></CardProduct>  
                      )}
                    />
   </>
  )
}
