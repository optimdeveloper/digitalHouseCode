import { Toast } from "native-base";
import moment from 'moment';
import 'moment/locale/es'
export default {

    showToast(message, duration = 4000, type = 'success') {
        Toast.show({
            text: message.toString(),
            duration: duration,
            position: 'top',
            type: type
        })

    },
    showWarningToast(message, duration = 4000) {
        this.showToast(message, duration, 'warning');
    },

    showErrorToast(message, duration = 4000) {
        this.showToast(message, duration, 'danger');
    },
    formatDate(createdAt){
        return moment(createdAt).locale('es').format('D [de] MMMM, YYYY')
    },
    formatPoints(points){
        let dollarUSLocale = Intl.NumberFormat('en-US', {minimumFractionDigits: 2});
        return dollarUSLocale.format(points)
    }

}