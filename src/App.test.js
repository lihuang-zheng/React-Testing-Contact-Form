import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import "mutationobserver-shim"

test("renders App without crashing", () => {
    const { getByText } = render(<App />);

    getByText(/hello/i)
});
