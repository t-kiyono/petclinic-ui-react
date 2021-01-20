import { VetsControllerApi } from '@t-kiyono/petclinic-client-ts-fetch';

import { commonProcess, apiConfig } from './common';

export async function query() {
  const api = new VetsControllerApi(apiConfig);
  return commonProcess(api.queryVets());
}
