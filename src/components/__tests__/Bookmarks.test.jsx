import { act, screen } from "@testing-library/react";
import { COLLECTION_ROUTE, CUSTOMERS_ROUTE, ITEM_ROUTE } from "../../constants";
import {
  renderTestApp,
  mockState,
  mockCollection,
  mockItemParams,
  mockBookmarks,
  mockCart,
} from "../../tests";
import userEvent from "@testing-library/user-event";

import collectionService from "../../store/collection/collection.service";
import itemService from "../../store/item/item.service";

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Bookmarks", () => {
  it("adds bookmarks from the collection page", async () => {
    jest
      .spyOn(collectionService, "fetchCollection")
      .mockResolvedValue(mockCollection);

    await act(async () => renderTestApp(COLLECTION_ROUTE, mockState));

    const bookmarkButtons = screen.getAllByTestId("bookmark-button");
    userEvent.click(bookmarkButtons[0]);
    userEvent.click(bookmarkButtons[1]);

    const sidebarMenuBookmarks = screen.getByTestId("sidebar-menu-bookmarks");
    userEvent.click(sidebarMenuBookmarks);

    expect(screen.getAllByTestId("bookmark-item")).toHaveLength(2);
  });

  it("adds bookmarks from the item page", async () => {
    jest.spyOn(itemService, "fetchItem").mockResolvedValue(mockCollection[0]);

    await act(async () =>
      renderTestApp(ITEM_ROUTE + mockItemParams, mockState)
    );

    const bookmarkButton = screen.getByTestId("bookmark-button");
    userEvent.click(bookmarkButton);

    const sidebarMenuBookmarks = screen.getByTestId("sidebar-menu-bookmarks");
    userEvent.click(sidebarMenuBookmarks);

    expect(screen.getAllByTestId("bookmark-item")).toHaveLength(1);
  });

  it("adds bookmarks from prefilled cart", async () => {
    await act(async () =>
      renderTestApp(CUSTOMERS_ROUTE, {
        ...mockState,
        cart: {
          cart: mockCart,
        },
      })
    );

    const sidebarMenuCart = screen.getByTestId("sidebar-menu-cart");
    userEvent.click(sidebarMenuCart);

    const bookmarkButtons = screen.getAllByTestId("bookmark-button");
    userEvent.click(bookmarkButtons[0]);
    userEvent.click(bookmarkButtons[1]);
    userEvent.click(bookmarkButtons[2]);

    const sidebarCloseBtn = screen.getByTestId("sidebar-close-btn");
    userEvent.click(sidebarCloseBtn);

    const sidebarMenuBookmarks = screen.getByTestId("sidebar-menu-bookmarks");
    userEvent.click(sidebarMenuBookmarks);

    expect(screen.getAllByTestId("bookmark-item")).toHaveLength(3);
  });

  it("clear prefilled bookmarks", async () => {
    await act(async () =>
      renderTestApp(CUSTOMERS_ROUTE, {
        ...mockState,
        bookmarks: {
          bookmarks: mockBookmarks,
        },
      })
    );

    const sidebarMenuBookmarks = screen.getByTestId("sidebar-menu-bookmarks");
    userEvent.click(sidebarMenuBookmarks);

    expect(screen.getAllByTestId("bookmark-item")).toHaveLength(3);

    const clearButton = screen.getByRole("button", {
      name: /Очистить закладки/i,
    });
    userEvent.click(clearButton);

    expect(screen.queryByTestId("bookmark-item")).not.toBeInTheDocument();
  });

  it("deletes part of prefilled bookmarks", async () => {
    await act(async () =>
      renderTestApp(CUSTOMERS_ROUTE, {
        ...mockState,
        bookmarks: {
          bookmarks: mockBookmarks,
        },
      })
    );

    const sidebarMenuBookmarks = screen.getByTestId("sidebar-menu-bookmarks");
    userEvent.click(sidebarMenuBookmarks);

    expect(screen.getAllByTestId("bookmark-item")).toHaveLength(3);

    const bookmarkButtons = screen.getAllByTestId("bookmark-button");
    userEvent.click(bookmarkButtons[2]);
    userEvent.click(bookmarkButtons[1]);

    expect(screen.getAllByTestId("bookmark-item")).toHaveLength(1);
  });
});
