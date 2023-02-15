import { act, screen } from "@testing-library/react";
import { CUSTOMERS_ROUTE } from "../../constants";
import { renderTestApp, mockState } from "../../tests";
import userEvent from "@testing-library/user-event";

describe("Customers", () => {
  it("changes active class on question click", async () => {
    await act(async () => renderTestApp(CUSTOMERS_ROUTE, mockState));

    const activeAnswerClassName = "accordion__answer--active";
    const firstAnswer = screen.getAllByTestId("answer")[0];
    const secondQuestion = screen.getAllByTestId("question")[1];
    const secondAnswer = screen.getAllByTestId("answer")[1];
    const thirdQuestion = screen.getAllByTestId("question")[2];
    const thirdAnswer = screen.getAllByTestId("answer")[2];

    expect(firstAnswer).toHaveClass(activeAnswerClassName);
    expect(secondAnswer).not.toHaveClass(activeAnswerClassName);

    userEvent.click(secondQuestion);

    expect(firstAnswer).not.toHaveClass(activeAnswerClassName);
    expect(secondAnswer).toHaveClass(activeAnswerClassName);

    userEvent.click(thirdQuestion);

    expect(secondAnswer).not.toHaveClass(activeAnswerClassName);
    expect(thirdAnswer).toHaveClass(activeAnswerClassName);
  });
});
