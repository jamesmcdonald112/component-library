import {describe, it, expect } from 'vitest'
import {render, screen} from '@testing-library/react'
import Badge from './Badge'

describe("Badge", () => {
    // Render Badge
    it("renders  the badge text", () => {
        render(<Badge color="blue">New</Badge>)
        expect(screen.getByText('New')).toBeInTheDocument()
    })

    // Render correct Colors
    it('applies the correct styles for color "gray"', () => {
        render(<Badge color='gray'>Gray Badge</Badge>)
        const badge = screen.getByText(/gray badge/i)
        expect(badge).toHaveClass("bg-gray-100")
        expect(badge).toHaveClass("text-gray-900")
    })

    it('applies the correct styles for color "red"', () => {
        render(<Badge color='red'>Red Badge</Badge>)
        const badge = screen.getByText(/red badge/i)
        expect(badge).toHaveClass("bg-red-100")
        expect(badge).toHaveClass("text-red-900")
    })

    it('applies the correct styles for color "yellow"', () => {
        render(<Badge color='yellow'>Yellow Badge</Badge>)
        const badge = screen.getByText(/yellow badge/i)
        expect(badge).toHaveClass("bg-yellow-100")
        expect(badge).toHaveClass("text-yellow-900")
    })

    it('applies the correct styles for color "green"', () => {
        render(<Badge color='green'>Green Badge</Badge>)
        const badge = screen.getByText(/green badge/i)
        expect(badge).toHaveClass("bg-green-100")
        expect(badge).toHaveClass("text-green-900")
    })

    it('applies the correct styles for color "blue"', () => {
        render(<Badge color='blue'>Blue Badge</Badge>)
        const badge = screen.getByText(/blue badge/i)
        expect(badge).toHaveClass("bg-blue-100")
        expect(badge).toHaveClass("text-blue-900")
    })

    it('applies the correct styles for color "indigo"', () => {
        render(<Badge color='indigo'>Indigo Badge</Badge>)
        const badge = screen.getByText(/indigo badge/i)
        expect(badge).toHaveClass("bg-indigo-100")
        expect(badge).toHaveClass("text-indigo-900")
    })

    it('applies the correct styles for color "purple"', () => {
        render(<Badge color='purple'>Purple Badge</Badge>)
        const badge = screen.getByText(/purple badge/i)
        expect(badge).toHaveClass("bg-purple-100")
        expect(badge).toHaveClass("text-purple-900")
    })

    it('applies the correct styles for color "pink"', () => {
        render(<Badge color='pink'>Pink Badge</Badge>)
        const badge = screen.getByText(/pink badge/i)
        expect(badge).toHaveClass("bg-pink-100")
        expect(badge).toHaveClass("text-pink-900")
    })

    // Render correct shape
    it('applies the correct shape for "pill"', () => {
        render(<Badge shape='pill'>Pill Badge</Badge>)
        const badge = screen.getByText(/pill badge/i)
        expect(badge).toHaveClass("rounded-full")
    })

    it('applies the correct shape for "square"', () => {
        render(<Badge shape='square'>Square Badge</Badge>)
        const badge = screen.getByText(/square badge/i)
        expect(badge).toHaveClass("rounded")
    })

    // Default badge
    it('applies the correct shape and color for a badge without props', () => {
        render(<Badge>Default Badge</Badge>)
        const badge = screen.getByText(/default badge/i)
        expect(badge).toHaveClass("rounded")
        expect(badge).toHaveClass("bg-gray-100")
        expect(badge).toHaveClass("text-gray-900")
    })
})


