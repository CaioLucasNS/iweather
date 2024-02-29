import { api } from "../api";
import { getCityByNameService } from "@services/getCityByNameService";
import { mockCityAPIResponse } from "@__tests__/mocks/mockCityAPIResopnse";

describe("API: getCityByNameService", () => {
  it("should return city details", async () => {
    // spyOn -> fica observando as requests que serão feitas pra API
    // quando acontecer uma request do tipo GET, será interceptada
    // então, o retorno será mockado
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });
    const response = await getCityByNameService("São Paulo");

    expect(response.length).toBeGreaterThan(0);
  });
});
