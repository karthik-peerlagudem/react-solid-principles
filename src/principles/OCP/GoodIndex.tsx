import {
    HiOutlineArrowNarrowLeft,
    HiOutlineArrowNarrowRight,
} from 'react-icons/hi';
import { GoodButton } from './GoodButton';

export const GoodIndex = () => {
    return (
        <div className="flex space-x-4">
            <GoodButton text="Go Home" icon={<HiOutlineArrowNarrowRight />} />
            <GoodButton text="Go Back" icon={<HiOutlineArrowNarrowLeft />} />
        </div>
    );
};
