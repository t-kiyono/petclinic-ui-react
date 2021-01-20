import { PetsControllerApi, PetTypesControllerApi, Pet } from '@t-kiyono/petclinic-client-ts-fetch';

import { commonProcess, apiConfig } from './common';

export async function query(ownerId: number) {
  const api = new PetsControllerApi(apiConfig);
  return commonProcess(api.queryPets({ ownerId }));
}

export async function show(ownerId: number, petId: number) {
  const api = new PetsControllerApi(apiConfig);
  return commonProcess(api.showPet({ ownerId, petId }));
}

export async function save(ownerId: number, pet: Pet) {
  const api = new PetsControllerApi(apiConfig);
  if (pet.id == null) {
    return commonProcess(api.createPet({ ownerId, pet }));
  } else {
    return commonProcess(api.updatePet({ ownerId, petId: pet.id, pet }));
  }
}

export async function queryTypes() {
  const api = new PetTypesControllerApi(apiConfig);
  return commonProcess(api.queryPetTypes());
}
