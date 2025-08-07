import { findAllclubs } from "../repositories/clubs-repository";
import * as httpResponse from "../utils/http-helper";

export const getClubService = async () => {
  const data = await findAllclubs();
  const response = httpResponse.ok(data);
  return response;
};
