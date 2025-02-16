interface FilterProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
    priceValue: number | null;
    setPriceValue: (value: number | null) => void;
}

export const Filter = ({
    searchValue,
    setSearchValue,
    priceValue,
    setPriceValue,
}: FilterProps) => {
    return (
        <div className="flex justify-center items-center gap-2">
            <p>Search</p>
            <input
                className="border p-2 rounded px-2 w-1/4"
                placeholder="enter product name"
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <input
                className="border p-2 rounded px-2 w-1/4"
                placeholder="enter price name"
                type="number"
                value={priceValue ?? ''}
                onChange={(e) =>
                    setPriceValue(
                        e.target.value ? Number(e.target.value) : null
                    )
                }
            />
        </div>
    );
};
