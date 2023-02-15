import { act, screen, within } from "@testing-library/react";
import { COLLECTION_ROUTE } from "../../constants";
import { renderTestApp, mockState, mockCollection } from "../../tests";
import userEvent from "@testing-library/user-event";

import collectionService from "../../store/collection/collection.service";
import { fetchCollection } from "../../store/collection/collection.slice";
import itemService from "../../store/item/item.service";

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Collection", () => {
  it("should change image on color picker click", async () => {
    jest
      .spyOn(collectionService, "fetchCollection")
      .mockResolvedValue(mockCollection);

    const firstColorImageUrl = mockCollection[0].options[0].photos[0];
    const secondColorImageUrl = mockCollection[0].options[1].photos[0];

    await act(async () => renderTestApp(COLLECTION_ROUTE, mockState));

    const collectionItem = screen.getByTestId("short-coat");
    const image = within(collectionItem).getByRole("img");

    expect(image.getAttribute("src")).toEqual(firstColorImageUrl);
    expect(image.getAttribute("src")).not.toEqual(secondColorImageUrl);

    const secondColorBtn = screen.getAllByTestId("color-picker")[1];
    await act(async () => userEvent.click(secondColorBtn));

    expect(image.getAttribute("src")).not.toEqual(firstColorImageUrl);
    expect(image.getAttribute("src")).toEqual(secondColorImageUrl);
  });

  it("should navigate to item on image click", async () => {
    jest
      .spyOn(collectionService, "fetchCollection")
      .mockResolvedValue(mockCollection);
    jest.spyOn(itemService, "fetchItem").mockResolvedValue(mockCollection[0]);

    const shortCoatDescription = mockCollection[0].description;

    await act(async () => renderTestApp(COLLECTION_ROUTE, mockState));

    expect(screen.queryByText(shortCoatDescription)).not.toBeInTheDocument();

    const collectionItem = screen.getByTestId("short-coat");
    const image = within(collectionItem).getByRole("img");
    await act(async () => userEvent.click(image));

    expect(screen.getByText(shortCoatDescription)).toBeInTheDocument();
  });

  it("should fetch collection with resolved response", async () => {
    jest
      .spyOn(collectionService, "fetchCollection")
      .mockResolvedValue(mockCollection);

    const dispatch = jest.fn();

    const thunk = fetchCollection();

    await thunk(dispatch);

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe(fetchCollection.pending().type);
    expect(end[0].type).toBe(fetchCollection.fulfilled().type);
    expect(end[0].payload).toStrictEqual(mockCollection);
  });
});
