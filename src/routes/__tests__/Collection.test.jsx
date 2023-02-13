import { act, screen } from "@testing-library/react";
import { COLLECTION_ROUTE } from "../../constants";
import { renderTestApp, mockState, mockCollection } from "../../tests";
import collectionService from "../../store/collection/collection.service";

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Collection", () => {
  it("testing tests", async () => {
    jest
      .spyOn(collectionService, "fetchCollection")
      .mockResolvedValueOnce(mockCollection);
    await act(async () => renderTestApp(COLLECTION_ROUTE, mockState));
    screen.debug(undefined, 30000);
  });
});
