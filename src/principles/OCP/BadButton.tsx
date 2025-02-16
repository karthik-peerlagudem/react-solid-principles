import {
    HiOutlineArrowNarrowRight,
    HiOutlineArrowNarrowLeft,
} from 'react-icons/hi';

interface IBadButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
    text: string;
    role?: 'home' | 'forward' | 'back';
}

export const BadButton = (props: IBadButtonProps) => {
    const { text, role } = props;

    return (
        <button
            className="flex items-center px-4 py-4 outline-none rounded-2xl bg-gray-200 text-black"
            {...props}
        >
            {text}
            <div className="m-2">
                {role === 'home' && <HiOutlineArrowNarrowRight />}
                {role === 'back' && <HiOutlineArrowNarrowLeft />}
            </div>
        </button>
    );
};
