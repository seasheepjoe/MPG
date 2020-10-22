import { JsonResponse, ApiParams } from '../types/Api';
import config from '../config/config';

const get = <T>(url: string, params?: ApiParams): Promise<JsonResponse<T>> => {
  return new Promise((resolve, reject) => {
    fetch(config.baseUrl + url, params ? params : {}).then((response) => {
      if (response.ok === true) {
        response.json().then((json) => {
          resolve(json);
        });
      } else {
        reject(response);
      }
    });
  });
};

export default { get };
