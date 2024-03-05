import { renderHook } from "@testing-library/react-native";
import { useCity } from "@hooks/useCity";
import { CityProvider } from "./CityContext";

describe("Context: CityContext", () => {
  it("should be change selected city", () => {
    // É necessário passar o provider através do segundo param do renderHook com o wrapper
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });
    console.log("result: ", result);
  });
});
