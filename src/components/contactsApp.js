import React, { Component } from 'react';
import LoadingHOC from './HOC/loadingHOC';
import SearchBar from './searchBar';
import ContactList from './contactList';
import './contactApp.css';

//@LoadingHOC('contacts')
class ContactsApp extends Component {
    state = {
        filterText: ''
    }

    handleUserInput = (searchTerm) => {
        this.setState({filterText: searchTerm});
    }

    render() {
        const { loadingTime } = this.props;

        return(
            <div className='contactApp'>
                <p>Loading time {loadingTime} seconds</p>
                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput} />
                <ContactList contacts={this.props.contacts} filterText={this.state.filterText} />
            </div>
        )
    }
}

export default LoadingHOC('contacts')(ContactsApp);
