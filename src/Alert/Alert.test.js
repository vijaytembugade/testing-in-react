import { render, screen } from "@testing-library/react"
import { Alert } from "./Alert"

const msg = "This is alert"

it("should give alert message pass as props", ()=>{
    render(<Alert msg={msg}/>)
    const alert = screen.getByText(msg)

    expect(alert).toBeInTheDocument()
})