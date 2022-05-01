import { apiClient } from "../lib/api-client";

export const GetPopulationComposition = async (prefCode: number) => {
  try {
    return await apiClient.get(
      "/population/composition/perYear?prefCode=" + String(prefCode)
    );
  } catch (err: any) {
    throw new Error(err.message);
  }
};
