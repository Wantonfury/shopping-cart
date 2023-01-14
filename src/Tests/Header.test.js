import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom"
import React from "react";
import Header from "../components/Header";

describe("check the links", () => {
    it("links to /home", () => {
        render(<Header />, { wrapper: BrowserRouter });
        expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/home");
    });
    
    it("links to /shop", () => {
        render(<Header />, { wrapper: BrowserRouter });
        expect(screen.getByRole("link", { name: "Shop" })).toHaveAttribute("href", "/shop");
    });
    
    it("links to /cart", () => {
        render(<Header />, { wrapper: BrowserRouter });
        expect(screen.getByRole("link", { name: "Cart" })).toHaveAttribute("href", "/cart");
    });
});