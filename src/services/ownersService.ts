import { OwnersControllerApi, Owner } from '@t-kiyono/petclinic-client-ts-fetch';

import { commonProcess, apiConfig } from './common';

export async function query(lastName?: string) {
  const api = new OwnersControllerApi(apiConfig);
  return commonProcess(api.queryOwners({ lastName }));
}

export async function show(ownerId: number) {
  const api = new OwnersControllerApi(apiConfig);
  return commonProcess(api.showOwner({ ownerId }));
}

export async function save(owner: Owner) {
  const api = new OwnersControllerApi(apiConfig);
  if (owner.id == null) {
    return commonProcess(api.createOwner({ owner }));
  } else {
    return commonProcess(api.updateOwner({ ownerId: owner.id, owner }));
  }
}
