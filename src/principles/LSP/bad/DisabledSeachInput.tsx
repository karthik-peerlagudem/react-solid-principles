import { ISearchInputProps, SearchInput } from './SearchInput';

/*
 *   DisabledSearchInput extends from SearchInput
 *   by LSP, supertype {SearchInput} should be substitued by subtype {DisabledSearchInput}
 *   which clearly voilates because value is hardcoded and onchange return {}
 *   Hence, subtype can be used inplace of supertype
 */
export const DisabledSearchInput = (props: ISearchInputProps) => {
    return (
        <SearchInput value="Disabled" onChange={() => {}} disabled {...props} />
    );
};
