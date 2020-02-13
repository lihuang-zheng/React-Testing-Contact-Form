import React from 'react'

// Import render and fireEvent for testing
import { render, fireEvent } from "@testing-library/react"

// Import contactForm for testing
import ContactForm from "../ContactForm"

// label testing
test('firstName, lastName, email, message input render', () => {
    const { getByLabelText } = render(<ContactForm />)

    getByLabelText(/firstName/i)
    getByLabelText(/lastName/i)
    getByLabelText(/email/i)
    getByLabelText(/message/i)
})

// // Fire Event
// test('species, age, notes inputs are rendered', () => {
//     const { getByLabelText, getByText } = render(<ContactForm />)

//     // querying for all the input nodes
//     const firstNameInput = getByLabelText(/firstName/i)
//     const lastNameInput = getByLabelText(/lastName/i)
//     const emailInput = getByLabelText(/email/i)
//     const messageInput = getByLabelText(/message/i)

//     // use the change event to add text to each input
//     // fire event is that it runs thing in the virtual DOM (page).
//     fireEvent.change(firstNameInput, { target: { value: 'Test First Name' } })
//     fireEvent.change(lastNameInput, { target: { value: 'Test Last Name' } })
//     fireEvent.change(emailInput, { target: { value: 'Test Email' } })
//     fireEvent.change(messageInput, { target: { value: 'Test Message' } })

//     expect(firstNameInput.value).toBe('Test First Name')
//     expect(lastNameInput.value).toBe('Test Last Name')
//     expect(emailInput.value).toBe('Test Email')
//     expect(messageInput.value).toBe('Test Message')

//     //click on the button!
//     fireEvent.click(getByText(/submit/i))
// });