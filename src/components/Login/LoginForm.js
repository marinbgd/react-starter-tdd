import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import _isEqual from 'lodash/isEqual'
import {
    USERNAME_VALIDATION_ERROR_MESSAGE,
    PASSWORD_VALIDATION_ERROR_MESSAGE,
} from './LoginForm.helper'
import styles from './LoginForm.scss'

const LoginForm = ({onSubmitCallBack}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const initialValidationErrors = {
        username: '',
        password: '',
    };
    const [validationErrors, setValidationErrors] = useState(initialValidationErrors)

    const isFormValid = (username, password) => {
        let isFormValid = true

        if (!username || !password) {
            isFormValid = false
        }

        return isFormValid
    }

    const setValidationErrorMessages = (username, password) => {
        let newValidationErrors = { ...initialValidationErrors }

        if (!username) {
            newValidationErrors.username = USERNAME_VALIDATION_ERROR_MESSAGE
        }

        if (!password) {
            newValidationErrors.password = PASSWORD_VALIDATION_ERROR_MESSAGE
        }

        if (!_isEqual(validationErrors, newValidationErrors)) {
            setValidationErrors(newValidationErrors)
        }
    }

    const submit = event => {
        event.preventDefault()

        setValidationErrorMessages(username, password)

        if (isFormValid(username, password)) {
            onSubmitCallBack(username, password)
        }
    }

    useEffect(() => {}, [validationErrors])

    return (
        <form onSubmit={submit} autoComplete="off" autoCorrect="off" autoCapitalize="off">
            <label className={styles.FormRow}>
                <span className={[styles.FormCell, styles.FormCell33].join(' ')}>Username:</span>
                <input
                    className={[styles.FormCell, styles.FormCell33].join(' ')}
                    type="text"
                    value={username}
                    onChange={event => {setUsername(event.currentTarget.value)}}
                    autoComplete="off"
                />
                <span className={[styles.FormCell, styles.FormCell33, styles.ErrorStyle].join(' ')}>
                    {validationErrors.username}
                </span>
            </label>

            <label className={styles.FormRow}>
                <span className={[styles.FormCell, styles.FormCell33].join(' ')}>Password:</span>
                <input
                    className={[styles.FormCell, styles.FormCell33].join(' ')}
                    type="password"
                    value={password}
                    onChange={event => {setPassword(event.currentTarget.value)}}
                    autoComplete="off"
                />
                <span className={[styles.FormCell, styles.FormCell33, styles.ErrorStyle].join(' ')}>
                    {validationErrors.password}
                </span>
            </label>

            <button
                className={[styles.FormSubmitButton].join(' ')}
                type="submit">
                Login
            </button>
        </form>
    )
}

LoginForm.propTypes = {
    onSubmitCallBack: PropTypes.func.isRequired,
}

export default LoginForm
