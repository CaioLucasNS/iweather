import { api } from "../api";
import {
  CityAPIResponse,
  getCityByNameService,
} from "@services/getCityByNameService";

describe("API: getCityByNameService", () => {
  it("should return city details", async () => {
    const data: CityAPIResponse = {
      id: "1",
      name: "São Paulo",
      sys: {
        country: "BR",
      },
      coord: {
        lat: 123,
        lon: 456,
      },
    };
    // spyOn -> fica observando as requests que serão feitas pra API
    // quando acontecer uma request do tipo GET, será interceptada
    // então, o retorno será mockado
    jest.spyOn(api, "get").mockResolvedValue({ data });
    const response = await getCityByNameService("São Paulo");

    // toBeGreaterThan -> maior do que
    expect(response.length).toBeGreaterThan(0);
  });
});
