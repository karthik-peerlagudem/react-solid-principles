import { useState } from 'react';

interface IFormProps {
    onSubmit: (email: string, password: string) => void;
}

export const Form = ({ onSubmit }: IFormProps) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        onSubmit(email, password);
    };

    return (
        <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <h1 className="font-bold text-2xl mb-4">Sign into your account</h1>
            <form className="mt-2" onSubmit={handleSubmit}>
                <div>
                    <div className="flex flex-col items-start mb-6">
                        <label htmlFor="email">Email</label>
                        <input
                            className="border text-black p-2 w-full"
                            type="email"
                            placeholder="jhon@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col items-start mb-6">
                        <label htmlFor="password">Password</label>
                        <input
                            className="border text-black p-2 w-full"
                            type="password"
                            placeholder="*******"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center gap-4 mb-6">
                        <input type="checkbox" />
                        <label htmlFor="remember me">Remember me</label>
                        <a
                            className="font-medium text-blue-500 hover:underline"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <button className="w-full rounded-2xl outline-none bg-blue-500 mb-4 p-2 text-white">
                        Sign in
                    </button>
                    <div>
                        <label
                            className="text-muted-foreground text-gray-400"
                            htmlFor="dont have account"
                        >
                            Don't have an account yet?
                        </label>
                        <a
                            className="font-medium text-blue-500 hover:underline"
                            href="#"
                        >
                            {' '}
                            sign up
                        </a>
                    </div>
                </div>
            </form>
        </div>
    );
};
