import { render, screen } from "@testing-library/react";
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResList.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
}) 

it("should render a body component with search", async () => {
   await act(async ()=> render(<BrowserRouter> < Body /> </BrowserRouter>)) 
});

const searchBtn = screen.getByRole("button", {name: "search"})

expect(searchBtn).toBeInTheDocument();