import { BadButton } from './BadButton';

export const BadIndex = () => {
    return (
        <div className="flex space-x-10">
            <BadButton text="Go Home" role="home" />
            <BadButton text="Go Back" role="back" />
        </div>
    );
};
