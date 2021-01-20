import { VisitsControllerApi, Visit } from '@t-kiyono/petclinic-client-ts-fetch';

import { commonProcess, apiConfig } from './common';

export async function query(ownerId: number, petId: number) {
  const api = new VisitsControllerApi(apiConfig);
  return commonProcess(api.queryVisits({ ownerId, petId }));
}

export async function save(ownerId: number, petId: number, visit: Visit) {
  const api = new VisitsControllerApi(apiConfig);
  return commonProcess(api.createVisit({ ownerId, petId, visit }));
}
