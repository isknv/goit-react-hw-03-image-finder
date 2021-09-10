import React from "react";

import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";

class App extends React.Component {
  state = { search: "" };

  query = ({ search }) => this.setState({ search });

  render() {
    const { search } = this.state;

    return (
      <>
        <Searchbar submitFunction={this.query} />
        <ImageGallery search={search} />
      </>
    );
  }
}

export default App;
