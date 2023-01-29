import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import { logger } from '../AppLogger';
import appConfig from '../Config';


export const METHOD = {
  POST: 'post',
  GET: 'get',
  PUT: 'put',
  DELETE: 'delete',
  PATCH: 'patch',
};

 const ApiCall= async(
  endpoint,
  params = {},
  onSuccess,
  onFailure,
  method = METHOD.POST,
) => {
  const isConnected = await NetInfo.fetch();
  logger('Internet connection', isConnected);

  if (!isConnected.isConnected)
    onFailure('Please check your internet connection.');
  else {
    if (params._path != undefined) {
      endpoint = `${endpoint}/${params._path}`;
      delete params._path;
    }

    logger('---------------------------------------------');

    let paramsData = new FormData();

    for (const property in params) {
      if (params[property] != undefined)
        paramsData.append(property, params[property]);
    }

    if (paramsData._parts.length) params = paramsData;
    logger(params);

    const config = {
      baseURL: appConfig.BASE_URL,
      params,
      timeout: 60000,
      headers: {},
    };

    let request = {};

    switch (method) {
      case METHOD.POST:
        request = axios.post(endpoint, params, config);
        break;
      case METHOD.GET:
        request = axios.get(endpoint, config);
        break;
      case METHOD.DELETE:
        request = axios.delete(endpoint, config);
        break;
      case METHOD.PUT:
        request = axios.put(endpoint, params, config);
        break;
      case METHOD.PATCH:
        request = axios.patch(endpoint, params, config);
        break;
    }

    request
      .then(response => {
        logger('------------------ Response-------------------');
        //   logger(endpoint + '\n Response', JSON.stringify(response));
        logger('---------------------------------------------');

        if (response) {
          if (response.data) {
            onSuccess(response.data);
          } else {
            onFailure('Something went wrong');
          }
        } else {
          onFailure('Something went wrong');
        }
      })
      .catch(error => {
        logger('Error well', error);
        onFailure('Something went wrong');
      });
  }
};
export default ApiCall
