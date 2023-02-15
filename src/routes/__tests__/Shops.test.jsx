import { act, screen } from "@testing-library/react";
import { SHOPS_ROUTE } from "../../constants";
import { renderTestApp, mockState, mockShops, debounceTime } from "../../tests";
import userEvent from "@testing-library/user-event";

import shopsService from "../../store/shops/shops.service";

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Shops", () => {
  it("should filter shops by name on input change", async () => {
    jest.useFakeTimers();
    jest.spyOn(shopsService, "fetchShops").mockResolvedValue(mockShops);

    await act(async () => renderTestApp(SHOPS_ROUTE, mockState));

    expect(screen.getByText(mockShops[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockShops[1].name)).toBeInTheDocument();

    const nameInput = screen.getByTestId("shops-name-input");

    await act(async () => {
      userEvent.type(nameInput, mockShops[0].name);
      jest.advanceTimersByTime(debounceTime);
    });

    expect(screen.getByText(mockShops[0].name)).toBeInTheDocument();
    expect(screen.queryByText(mockShops[1].name)).not.toBeInTheDocument();
  });

  it("should change title on city option select", async () => {
    jest.spyOn(shopsService, "fetchShops").mockResolvedValue(mockShops);

    await act(async () => renderTestApp(SHOPS_ROUTE, mockState));

    expect(screen.getByText(/магазины в россии/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/магазины в санкт-петербурге/i)
    ).not.toBeInTheDocument();

    const citySelect = screen.getByTestId("shops-city-select");
    const saintPetersburgOption = screen.getByRole("option", {
      name: /Санкт-петербург/i,
    });

    await act(async () => {
      userEvent.selectOptions(citySelect, saintPetersburgOption);
    });

    expect(screen.queryByText(/магазины в россии/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/магазины в санкт-петербурге/i)
    ).toBeInTheDocument();
  });

  it("should filter shops by type on option select", async () => {
    jest.spyOn(shopsService, "fetchShops").mockResolvedValue(mockShops);

    await act(async () => renderTestApp(SHOPS_ROUTE, mockState));

    expect(screen.getByText(mockShops[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockShops[1].name)).toBeInTheDocument();

    const citySelect = screen.getByTestId("shops-type-select");
    const manOption = screen.getByRole("option", {
      name: /Одежда для мужчин/i,
    });

    await act(async () => {
      userEvent.selectOptions(citySelect, manOption);
    });

    expect(screen.queryByText(mockShops[0].name)).not.toBeInTheDocument();
    expect(screen.getByText(mockShops[1].name)).toBeInTheDocument();
  });
});
