import { render, screen } from "@testing-library/react";
import { Contact } from "./Contact";


test("should render Contact Page", ()=>{
    render(<Contact/>)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument();
})
test("should have button on Contact Page", ()=>{
    render(<Contact/>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument();
})

test("should have submit text on a Contact page", ()=>{
    render(<Contact/>)
    const submitText  = screen.getByText('Submit');
    expect(submitText).toBeInTheDocument();
})
test("should have two input boxes", ()=>{
    render(<Contact/>)
    const inputBox  = screen.getAllByRole('textbox');
    expect(inputBox.length).toBe(2)
})
test("should not have only one input box", ()=>{
    render(<Contact/>)
    const inputBox  = screen.getAllByRole('textbox');
    expect(inputBox.length).not.toBe(0)
})