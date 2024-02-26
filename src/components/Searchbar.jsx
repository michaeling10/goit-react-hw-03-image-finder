import { Component } from 'react';
import './styles/Searchbar-module.css';

class Searchbar extends Component {
  state = { query: '' };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query === '') {
      alert('Please enter a search query.');
      return;
    }
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            className="input_form"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn-form">
            <span className="button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
