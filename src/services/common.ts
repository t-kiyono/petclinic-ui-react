import { Configuration } from "@t-kiyono/petclinic-client-ts-fetch";

export interface ServiceResponse<T> {
  result?: T;
  error?: string;
}

export async function commonProcess<T>(promise: Promise<T>): Promise<ServiceResponse<T>> {
  try {
    const result = await promise;
    return { result };
  } catch (error) {
    if (error instanceof Response) {
      const body = await error.json();
      return { error: body.message };
    } else {
      return { error: "System Error" };
    }
  }
}

export const apiConfig = new Configuration({
  basePath: window.location.origin,
});
