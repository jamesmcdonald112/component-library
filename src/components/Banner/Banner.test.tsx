import Banner from "./Banner";
import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";


describe("Banner", () => {
    // Default banner
    it('renders the default banner when when message type is not passed', () => {
        render(<Banner title="This is my default banner"/>)
        const banner = screen.getByTestId('banner')
        expect(banner).toHaveClass('bg-blue-100')
        expect(banner).toHaveClass('text-blue-500')
    })

    // Render Banner Text
    it('render the banner text', () => {
        render(<Banner title="This is my Title" variant="success" >This is my text</Banner>)
        expect(screen.getByText(/this is my title/i)).toBeInTheDocument()
        expect(screen.getByText(/this is my text/i))
    })

    it('renders without optional text', () => {
        render(<Banner title="This is my Title" variant="success"></Banner>)
        expect(screen.getByText(/this is my title/i)).toBeInTheDocument()
    })

    // Render classes for each variant
    it('renders the correct class for success', () => {
        render(<Banner title="This is my success Title" variant="success"></Banner>)
        const banner = screen.getByTestId('banner')
        expect(banner).toHaveClass('bg-green-100')
        expect(banner).toHaveClass('text-green-500')
        
    })

    it('renders the correct class for warning', () => {
        render(<Banner title="This is my warning Title" variant="warning"></Banner>)
        const banner = screen.getByTestId('banner')
        expect(banner).toHaveClass('bg-yellow-100')
        expect(banner).toHaveClass('text-yellow-500')
        
    })

    it('renders the correct class for error', () => {
        render(<Banner title="This is my error Title" variant="error"></Banner>)
        const banner = screen.getByTestId('banner')
        expect(banner).toHaveClass('bg-red-100')
        expect(banner).toHaveClass('text-red-500')
        
    })

    it('renders the correct class for neutral', () => {
        render(<Banner title="This is my neutral Title" variant="neutral"></Banner>)
        const banner = screen.getByTestId('banner')
        expect(banner).toHaveClass('bg-blue-100')
        expect(banner).toHaveClass('text-blue-500')
        
    })

    // TEST ICONS
    // Success
    it('renders the correct icon for success', () => {
        render(<Banner title="This is my success Title" variant="success"/>)
        const icon = screen.getByTestId('banner-icon')
        expect(icon).toBeInTheDocument()
        expect(icon).toHaveClass('text-green-500')
    })

    // Warning
    it('renders the correct icon for warning', () => {
        render(<Banner title="This is my warning Title" variant="warning"/>)
        const icon = screen.getByTestId('banner-icon')
        expect(icon).toBeInTheDocument()
        expect(icon).toHaveClass('text-yellow-500')
    })

    // Error
    it('renders the correct icon for error', () => {
        render(<Banner title="This is my error Title" variant="error"/>)
        const icon = screen.getByTestId('banner-icon')
        expect(icon).toBeInTheDocument()
        expect(icon).toHaveClass('text-red-500')
    })

    // Neutral
    it('renders the correct icon for neutral', () => {
        render(<Banner title="This is my neutral Title" variant="neutral"/>)
        const icon = screen.getByTestId('banner-icon')
        expect(icon).toBeInTheDocument()
        expect(icon).toHaveClass('text-blue-500')
    })
    
})