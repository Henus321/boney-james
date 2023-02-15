import { act, screen } from "@testing-library/react";
import { ITEM_ROUTE } from "../../constants";
import {
  renderTestApp,
  mockState,
  mockCollection,
  mockItemParams,
} from "../../tests";
import userEvent from "@testing-library/user-event";

import itemService from "../../store/item/item.service";
import { fetchItem } from "../../store/item/item.slice";
import collectionService from "../../store/collection/collection.service";

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Item", () => {
  it("changes active class on size picker click", async () => {
    jest.spyOn(itemService, "fetchItem").mockResolvedValue(mockCollection[0]);

    await act(async () =>
      renderTestApp(ITEM_ROUTE + mockItemParams, mockState)
    );

    const firstSizeSpan = screen.getByText(mockCollection[0].sizes[0]);
    const secondSizeSpan = screen.getByText(mockCollection[0].sizes[1]);
    const activeSizeClassName = "size-item--active";

    expect(firstSizeSpan).toHaveClass(activeSizeClassName);
    expect(secondSizeSpan).not.toHaveClass(activeSizeClassName);

    await act(async () => userEvent.click(secondSizeSpan));

    expect(firstSizeSpan).not.toHaveClass(activeSizeClassName);
    expect(secondSizeSpan).toHaveClass(activeSizeClassName);
  });

  it("changes image on color picker click", async () => {
    jest.spyOn(itemService, "fetchItem").mockResolvedValue(mockCollection[0]);

    const firstColorImageUrl = mockCollection[0].options[0].photos[0];
    const secondColorImageUrl = mockCollection[0].options[1].photos[0];

    await act(async () =>
      renderTestApp(ITEM_ROUTE + mockItemParams, mockState)
    );

    const swiperFirstImage = screen.getAllByRole("img")[0];

    expect(swiperFirstImage.getAttribute("src")).toEqual(firstColorImageUrl);
    expect(swiperFirstImage.getAttribute("src")).not.toEqual(
      secondColorImageUrl
    );

    const secondColorBtn = screen.getAllByTestId("color-picker")[1];
    await act(async () => userEvent.click(secondColorBtn));

    const newSwiperFirstImage = screen.getAllByRole("img")[0];

    expect(newSwiperFirstImage.getAttribute("src")).not.toEqual(
      firstColorImageUrl
    );
    expect(newSwiperFirstImage.getAttribute("src")).toEqual(
      secondColorImageUrl
    );
  });

  it("navigates to main page on breadcrumb click", async () => {
    jest
      .spyOn(collectionService, "fetchCollection")
      .mockResolvedValue(mockCollection);
    jest.spyOn(itemService, "fetchItem").mockResolvedValue(mockCollection[0]);

    await act(async () =>
      renderTestApp(ITEM_ROUTE + mockItemParams, mockState)
    );

    expect(
      screen.queryByText(/Коллекция женских пальто/i)
    ).not.toBeInTheDocument();

    const breadcrumbLink = screen.getByText(/На главную/i);
    await act(async () => userEvent.click(breadcrumbLink));

    expect(screen.getByText(/Коллекция женских пальто/i)).toBeInTheDocument();
  });

  it("should fetch item with resolved response", async () => {
    jest.spyOn(itemService, "fetchItem").mockResolvedValue(mockCollection[0]);

    const dispatch = jest.fn();

    const thunk = fetchItem();

    await thunk(dispatch);

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe(fetchItem.pending().type);
    expect(end[0].type).toBe(fetchItem.fulfilled().type);
    expect(end[0].payload).toStrictEqual(mockCollection[0]);
  });
});
