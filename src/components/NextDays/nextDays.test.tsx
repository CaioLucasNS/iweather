import { render, screen } from "@testing-library/react-native";

import { NextDays } from ".";
import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
  it("should be render day.", () => {
    render(
      <NextDays
        data={[
          {
            day: "18/07",
            min: "30ºc",
            max: "34ºc",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "19/07",
            min: "28ºc",
            max: "34ºc",
            icon: clearDay,
            weather: "Nublado",
          },
          {
            day: "20/07",
            min: "21ºc",
            max: "34ºc",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "21/07",
            min: "28ºc",
            max: "34ºc",
            icon: clearDay,
            weather: "Chuva fraca",
          },
        ]}
      />
    );

    expect(screen.getByText("19/07")).toBeTruthy();
  });
});
