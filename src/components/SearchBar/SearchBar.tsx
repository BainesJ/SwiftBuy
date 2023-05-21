import React from 'react';
import s from './searchBar.module.css';

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className={s.searchBar}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search items..."
            />
        </div>
    );
};

export default SearchBar;
