import { render } from "@testing-library/react-native";
import { Routes } from ".";

describe("Routes", () => {
  it("should be render Search screen when not city selected.", () => {
    const { debug } = render(<Routes />);

    debug();
  });
});

/**
 * https://www.npmjs.com/package/react-native-safe-area-context
 * pesquisar por "jest" para entender a integração do SafeAreaProvider com o Jest
 */
