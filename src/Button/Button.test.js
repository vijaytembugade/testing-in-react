const { render, screen, fireEvent } = require("@testing-library/react")
const { Button } = require("./Button")

it('should have text hi on button', ()=>{
    render(<Button/>)
    const btnText = screen.getByRole("button", {name: 'hi'})

    expect(btnText).toBeInTheDocument()
})
it('should on click change the text hi to hello', ()=>{
    render(<Button/>)
    const btnText = screen.getByRole("button", {name: 'hi'})

    fireEvent.click(btnText )

    const btnTextHello = screen.getByRole("button", {name: "hello"}) 
    expect(btnTextHello).toBeInTheDocument()
})