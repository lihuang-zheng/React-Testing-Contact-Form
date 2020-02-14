import React from 'react'

import "mutationobserver-shim"

// Import render and fireEvent for testing
import { render, fireEvent } from "@testing-library/react"

// Import contactForm for testing
import ContactForm from "../ContactForm"

// label testing
test('firstName, lastName, email, message input render', () => {
    const { getByText, getByTestId } = render(<ContactForm />);

    // getByText(/firstname/i);
    getByTestId(/lastName/i)
    // getByText(/message/i);
    getByText(/email/i);
})

// Fire Event
test('species, age, notes inputs are rendered', () => {
    const { getByTestId } = render(<ContactForm />)

    // querying for all the input nodes
    const firstNameInput = getByTestId(/firstName/i)
    const lastNameInput = getByTestId(/lastName/i)
    const emailInput = getByTestId(/email/i)
    const messageInput = getByTestId(/message/i)

    // use the change event to add text to each input
    // fire event is that it runs thing in the virtual DOM(page).
    // fireEvent.change(firstNameInput, { target: { value: 'Test First Name' } })
    // fireEvent.change(lastNameInput, { target: { value: 'Test Last Name' } })
    // fireEvent.change(emailInput, { target: { value: 'Test Email' } })
    // fireEvent.change(messageInput, { target: { value: 'Test Message' } })

    // expect(firstNameInput.value).toBe('Test First Name')
    // expect(lastNameInput.value).toBe('Test Last Name')
    // expect(emailInput.value).toBe('Test Email')
    // expect(messageInput.value).toBe('Test Message')
});