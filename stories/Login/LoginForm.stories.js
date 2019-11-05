import React from 'react';
import { action } from '@storybook/addon-actions';
import LoginForm from '../../src/components/Login/LoginForm';

export const Form = () => <LoginForm onSubmitCallBack={action('login submit callback')} />;

export default {
    title: 'Login',
};
