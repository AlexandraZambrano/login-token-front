import React, { useState } from 'react';
import axios from '../../api/axios';

function UserSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        axios.get(`/users/search?q=${searchQuery}`)
            .then(response => setSearchResults(response.data))
            .catch(error => console.error(error));
    };
    
    return (
        <form onSubmit={handleSearchSubmit}>
            <label>
                Search users:
                <input type="text" value={searchQuery} onChange={handleSearchChange} />
            </label>
            <button type="submit">Search</button>
            <ul>
                {searchResults.map(user => (
                    <li key={user.id}>{user.username} ({user.email})</li>
                ))}
            </ul>
        </form>
    );
}

export default UserSearch;