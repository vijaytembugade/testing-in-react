import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ShowData from "./ShowData";

const DATA = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};

global.fetch = jest.fn(async () => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(DATA);
    },
  });
});

it("should render the ShowData Compoent and show the text", async () => {
  render(<ShowData />);

  await waitFor(() => {
    
    expect(screen.getByTestId('title')).toBeInTheDocument();
    // expect(screen.getByTestId('title')).toHaveTextContent('delectus aut autem');
  });

  const helloBtn = screen?.getByRole("button", { name: "Hello" });

  expect(helloBtn).toBeInTheDocument();
});
