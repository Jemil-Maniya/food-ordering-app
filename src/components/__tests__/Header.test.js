import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore";
import '@testing-library/jest-dom';



it("shpuld render header with a login buttton", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );
    
    const loginButton = screen.getByRole("button", {name: "Login"}); 

    // const loginButton = screen.getByText("Login")

    expect(loginButton).toBeInTheDocument();
});


it("shpuld render header with a cart items 0", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );
    
    const cartItems = screen.getByText(/Cart/) // its called rejex 

    expect(cartItems).toBeInTheDocument();
});


it("should change login butoon to logout on click", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );
    
    const loginButton = screen.getByRole("button", { name: "Login" });


    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name:"Log out"});

    expect(logoutButton).toBeInTheDocument();
});

