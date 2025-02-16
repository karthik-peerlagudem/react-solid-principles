import { cn } from '../../../../lib/util';

export interface ISearchInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    isLarge?: boolean;
}

export const SearchInput = (props: ISearchInputProps) => {
    const { value, onChange, isLarge, ...restProps } = props;

    return (
        <input
            className={cn(
                'block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark-border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none',
                isLarge && 'text-3xl'
            )}
            type="text"
            placeholder="search for the right one.."
            value={value}
            onChange={onChange}
            {...restProps}
        />
    );
};
