import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent, waitForElement} from '@testing-library/react'
import renderer from 'react-test-renderer'
import {
    USERNAME_VALIDATION_ERROR_MESSAGE,
    PASSWORD_VALIDATION_ERROR_MESSAGE,
} from './LoginForm.helper';
import LoginForm from './LoginForm'

describe('Login', () => {
    describe('LoginForm', () => {

        const USERNAME = 'USERNAME'
        const PASSWORD = 'PASSWORD'

        it('renders correctly', () => {
            const tree = renderer
                .create(<LoginForm onSubmitCallBack={() => {}} />)
                .toJSON();
            expect(tree).toMatchSnapshot();
        })

        it('login form triggers onSubmitCallBack when clicked with proper args', () => {
            const submitCb = jest.fn();
            const { getByRole, getByLabelText } = render(<LoginForm onSubmitCallBack={submitCb} />)

            const inputNodeUsername = getByLabelText(/username/i);
            fireEvent.change(inputNodeUsername, { target: { value: USERNAME } });

            const inputNodePassword = getByLabelText(/password/i);
            fireEvent.change(inputNodePassword, { target: { value: PASSWORD } });

            fireEvent.click(getByRole('button'))
            expect(submitCb.mock.calls.length).toEqual(1)
            expect(submitCb).toBeCalledWith(USERNAME, PASSWORD);
        })

        it('login form shows validation error message for username and does not trigger callback', async () => {
            const submitCb = jest.fn();
            const { getByRole, getByLabelText, findByText } = render(<LoginForm onSubmitCallBack={submitCb} />)

            const inputNodeUsername = getByLabelText(/username/i);
            fireEvent.change(inputNodeUsername, { target: { value: '' } });

            fireEvent.click(getByRole('button'))

            const validationErrorNode = await waitForElement( () => findByText(USERNAME_VALIDATION_ERROR_MESSAGE))
            expect(validationErrorNode).toBeInTheDocument()

            expect(submitCb.mock.calls.length).toEqual(0)
        })

        it('login form shows validation error message for password and does not trigger callback', async () => {
            const submitCb = jest.fn();
            const { getByRole, getByLabelText, findByText } = render(<LoginForm onSubmitCallBack={submitCb} />)

            const inputNodePassword = getByLabelText(/password/i);
            fireEvent.change(inputNodePassword, { target: { value: '' } });

            fireEvent.click(getByRole('button'))

            const validationErrorNode = await waitForElement( () => findByText(PASSWORD_VALIDATION_ERROR_MESSAGE))
            expect(validationErrorNode).toBeInTheDocument()

            expect(submitCb.mock.calls.length).toEqual(0)
        })
    })
})
