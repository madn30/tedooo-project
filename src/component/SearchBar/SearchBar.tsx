import React from 'react';
import './SearchBar.css';
import { FiSearch as SearchIcon } from 'react-icons/fi';

const SearchBar = () => (
	<div className="search-bar-container">
		<SearchIcon className="search-icon" /> {/* Add the search icon */}
		<input type="text" placeholder="Search" className="search-input" />
	</div>
);

export default SearchBar;
