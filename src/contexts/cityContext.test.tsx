import { act, renderHook, waitFor } from "@testing-library/react-native";
import { useCity } from "@hooks/useCity";
import { CityProvider } from "./CityContext";

describe("Context: CityContext", () => {
  it("should be change selected city", async () => {
    // É necessário passar o provider através do segundo param do renderHook com o wrapper
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });

    // waitFor = aguarda a solicitação assincrona que tem dentro do context
    // act = lidar com a atualização de estado que acontece dentro do context
    await waitFor(() =>
      act(() => {
        console.log("result: ", result.current);
      })
    );
  });
});
