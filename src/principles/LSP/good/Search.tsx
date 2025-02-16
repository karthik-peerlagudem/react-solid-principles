import { DisabledSearchInput } from './DisabledSearchInput';
import { SearchInput } from './SearchInput';

export const Search = () => {
    return (
        <>
            <SearchInput isLarge={true} />
            <DisabledSearchInput isLarge={true} />
        </>
    );
};
