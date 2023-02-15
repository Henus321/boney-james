import { act, screen, within } from "@testing-library/react";
import { COLLECTION_ROUTE, CUSTOMERS_ROUTE, ITEM_ROUTE } from "../../constants";
import {
  renderTestApp,
  mockState,
  mockCollection,
  mockItemParams,
  mockCart,
} from "../../tests";
import userEvent from "@testing-library/user-event";

import collectionService from "../../store/collection/collection.service";
import itemService from "../../store/item/item.service";
import ordersService from "../../store/orders/orders.service";

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Cart", () => {
  it("should add items to cart from collection page", async () => {
    jest
      .spyOn(collectionService, "fetchCollection")
      .mockResolvedValue(mockCollection);

    await act(async () => renderTestApp(COLLECTION_ROUTE, mockState));

    const shortCoatItem = screen.getByTestId("short-coat");
    const xsSize = within(shortCoatItem).getByText("XS 42");
    const mSize = within(shortCoatItem).getByText("M 46");

    userEvent.click(xsSize);
    userEvent.click(mSize);

    const sidebarMenuCart = screen.getByTestId("sidebar-menu-cart");
    userEvent.click(sidebarMenuCart);

    expect(screen.getAllByTestId("cart-item")).toHaveLength(2);
  });

  it("should add items to cart from item page", async () => {
    jest.spyOn(itemService, "fetchItem").mockResolvedValue(mockCollection[0]);

    await act(async () =>
      renderTestApp(ITEM_ROUTE + mockItemParams, mockState)
    );

    const addToCartButton = screen.getByRole("button", { name: /В корзину/i });
    userEvent.click(addToCartButton);

    const mSize = screen.getByText("M 46");
    userEvent.click(mSize);
    userEvent.click(addToCartButton);

    const lSize = screen.getByText("L 48");
    userEvent.click(lSize);
    userEvent.click(addToCartButton);

    const sidebarMenuCart = screen.getByTestId("sidebar-menu-cart");
    userEvent.click(sidebarMenuCart);

    expect(screen.getAllByTestId("cart-item")).toHaveLength(3);
  });

  it("should delete part of cart items from prefilled cart", async () => {
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

    expect(screen.getAllByTestId("cart-item")).toHaveLength(3);

    const deleteButtons = screen.getAllByTestId("cart-item-delete-btn");
    userEvent.click(deleteButtons[2]);
    userEvent.click(deleteButtons[1]);

    expect(screen.getAllByTestId("cart-item")).toHaveLength(1);
  });

  it("should clear cart after checkout", async () => {
    jest.spyOn(ordersService, "createOrder").mockResolvedValue(mockCart);

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

    const checkoutButton = screen.getByRole("button", { name: /Оформить/i });

    await act(async () => userEvent.click(checkoutButton));

    userEvent.click(sidebarMenuCart);

    expect(screen.getByText(/Нет предметов/i)).toBeInTheDocument();
  });
});
