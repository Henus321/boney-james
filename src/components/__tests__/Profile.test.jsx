import { act, screen } from "@testing-library/react";
import { CUSTOMERS_ROUTE } from "../../constants";
import {
  renderTestApp,
  mockState,
  mockAuthenticatedUser,
  mockOrders,
} from "../../tests";
import userEvent from "@testing-library/user-event";

import ordersService from "../../store/orders/orders.service";
import { deleteOrder } from "../../store/orders/orders.slice";

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Profile", () => {
  it("should render sign-in/sign-up component if not authorized", async () => {
    await act(async () => renderTestApp(CUSTOMERS_ROUTE, mockState));

    const sidebarMenuProfile = screen.getByTestId("sidebar-menu-profile");
    await act(async () => userEvent.click(sidebarMenuProfile));

    expect(screen.getByText(/Введите ваш e-mail/i)).toBeInTheDocument();

    const signUpButton = screen.getByRole("button", { name: /Регистрация/i });
    userEvent.click(signUpButton);

    const repeatPasswordLabel = screen.getByText(/Повторите пароль/i);
    expect(repeatPasswordLabel).toBeInTheDocument();
  });

  it("should delete order item with resolved response", async () => {
    jest.spyOn(ordersService, "deleteOrder").mockResolvedValue();

    const dispatch = jest.fn();

    const thunk = deleteOrder();

    await thunk(dispatch);

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe(deleteOrder.pending().type);
    expect(end[0].type).toBe(deleteOrder.fulfilled().type);
  });

  it("should render profile information and password components if authorized", async () => {
    jest.spyOn(ordersService, "fetchOrders").mockResolvedValue(mockOrders);
    await act(async () =>
      renderTestApp(CUSTOMERS_ROUTE, {
        ...mockState,
        user: mockAuthenticatedUser,
      })
    );

    const sidebarMenuProfile = screen.getByTestId("sidebar-menu-profile");
    await act(async () => userEvent.click(sidebarMenuProfile));

    const informationTitle = screen.getByText(/Данные пользователя/i);
    expect(informationTitle).toBeInTheDocument();

    const passwordTitle = screen.getByText(/Изменить пароль/i);
    expect(passwordTitle).toBeInTheDocument();
  });
});
