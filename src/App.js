import React from 'react'
import './App.css';
import Login from './components/login/login';
import Register from './components/registro/register';
import UsersList from './components/dashboard/usersList';
import UserSearch from './components/searchBar/SearchBar';
import UserSearchBar from './components/searchBar/SearchBar';
import UserView from './components/UserView/UserView';
import AuthProvider from './context/AuthProvider';;


function App() {
  return (
    <div className="App">
    <AuthProvider>
      {/* <UserSearch /> */}
      <Login />
      <Register />
      {/* <UserSearchBar /> */}
      {/* <UserSearch />
      <UserView /> */}
      <UsersList />
    </AuthProvider>

    </div>
  );
}

export default App;
