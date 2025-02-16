import { ISearchInputProps, SearchInput } from './SearchInput';

/*
 *   DisabledSearchInput extends from SearchInput
 *   by LSP, supertype {SearchInput} should be substitued by subtype {DisabledSearchInput}
 */
export const DisabledSearchInput = (props: ISearchInputProps) => {
    const { value, onChange, ...restProps } = props;
    return (
        <SearchInput
            value={value}
            onChange={onChange}
            placeholder="search"
            disabled
            {...restProps}
        />
    );
};
