import { apiClient } from "../lib/api-client";

export const GetPopulationComposition = async (prefCode: number) => {
  try {
    return await apiClient.get(
      "/population/composition/perYear?prefCode=" + String(prefCode)
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
};
