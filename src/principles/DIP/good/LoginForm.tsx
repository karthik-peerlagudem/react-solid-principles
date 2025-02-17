import axios from 'axios';
import { Form } from './Form';

export const LoginForm = () => {
    const onSubmit = async (email: string, password: string) => {
        await axios.post('http://example.api.com', {
            email,
            password,
        });
    };

    return <Form onSubmit={onSubmit} />;
};
