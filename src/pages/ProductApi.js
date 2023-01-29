


import { ProgressDialog } from '../common'
import { API_GET_PRODUCTS } from '../core/api/ApiContants'
import ApiCall, { METHOD } from '../core/api/ApiService'
import Utils from '../constants/Utils'


export const productApi = {

    getProducts(onData, onError) {
       
        ApiCall(`${API_GET_PRODUCTS}`, {}, (response) => {
            //ProgressDialog.hide()
            if (onData) {
                onData(response)
            }
        },
            (error) => {
               
                if (onError)
                    onError()
                Utils.showErrorToast(error)
            }, METHOD.GET
        )
    },

}