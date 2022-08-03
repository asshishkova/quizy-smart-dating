import axios from "axios";
import { headers } from "./headers";

export default class BrainmatesApiService {
  static async getBrainmates(id) {
    try {
      const response = await axios.get(`/brainmates/${id}`,{
        headers: headers
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
