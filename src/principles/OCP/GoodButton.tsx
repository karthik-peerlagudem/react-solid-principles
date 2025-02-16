interface IGoodButtonProps {
    text: string;
    icon?: React.ReactNode;
}

export const GoodButton = (props: IGoodButtonProps) => {
    const { text, icon } = props;

    return (
        <button
            className="flex items-center justify-center p-4 rounded-2xl outline-none bg-gray-200 text-black"
            {...props}
        >
            {' '}
            {text}
            <div className="m-2">{icon}</div>
        </button>
    );
};
