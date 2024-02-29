import { render, screen } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be return city details selected.", () => {
    const data = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 456 },
      { id: "2", name: "Campo Grande", latitude: 789, longitude: 987 },
    ];

    render(<SelectList data={data} onChange={() => {}} onPress={() => {}} />);

    // regex pega a string "Campo" no inicio ou no final da busca e i = remove o case sensitivy
    // const selectedCity = screen.getByText(/campo/i);
    const selectedCity = screen.getByText("campo", { exact: false });
    console.log("selectedCity: ", selectedCity);
  });
});
