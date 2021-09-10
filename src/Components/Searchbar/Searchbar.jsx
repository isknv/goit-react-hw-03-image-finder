import React from "react";
import PropTypes from "prop-types";

class Searchbar extends React.Component {
  state = { search: "" };

  onChangeInpt = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value.toLowerCase() });
  };

  onSubmitForm = event => {
    event.preventDefault();

    if (this.state.search === "") {
      return alert("Search field must not be empty");
    }
    this.props.submitFunction(this.state);
    this.setState({ search: "" });
  };

  render() {
    const { search } = this.state;
    return (
      <header className="Searchbar">
        <form onSubmit={this.onSubmitForm} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChangeInpt}
            name="search"
            value={search}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  submitFunction: PropTypes.func.isRequired,
};
export default Searchbar;
