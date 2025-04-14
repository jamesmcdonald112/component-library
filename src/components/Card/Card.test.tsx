import { screen, render } from "@testing-library/react";
import {describe, expect, it} from 'vitest'
import { Card } from "./Card";


describe("Card", () => {
    it('renders the card to the screen with icon, title, and text', () => {
        render(<Card title="This is my title" text="This is my text"/>)
        const icon = screen.getByTestId('card-icon')
        expect(icon).toBeInTheDocument()
        expect(screen.getByText(/this is my title/i)).toBeInTheDocument()
        expect(screen.getByText(/this is my text/i)).toBeInTheDocument()
        

    })
})