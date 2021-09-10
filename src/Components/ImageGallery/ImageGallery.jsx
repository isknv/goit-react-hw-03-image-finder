import React from "react";
import PropTypes from "prop-types";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Api from "../../services/Api";
import ImageGalleryItem from "./ImageGalleryItem";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

class ImageGallery extends React.Component {
  state = {
    img: [],
    imgModal: "",
    pending: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.search !== this.props.search) {
      Api.query(this.props.search);
      Api.reset();
      this.saveImg();
      this.setState({ img: [] });
    }

    if (prevState.img.length && prevState.img !== this.state.img) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  closeModal = () => {
    this.setState({ imgModal: "" });
  };

  loadMore = () => {
    Api.loadMoreImg();
    this.saveImg();
  };

  largeImgClick = id => {
    const largeImageURL = this.state.img.find(
      event => event.id === id
    ).largeImageURL;
    this.setState({ imgModal: largeImageURL });
  };

  saveImg() {
    this.setState({ pending: true });

    Api.fetchArticles()
      .then(({ hits }) =>
        this.setState(({ img }) => ({
          img: [...img, ...hits],
        }))
      )
      .catch(error => console.log(error))
      .finally(() => this.setState({ pending: false }));
  }

  render() {
    const { img, imgModal, pending } = this.state;
    return (
      <>
        <ul className="ImageGallery">
          {img.map(({ id, webformatURL, tags }) => (
            <ImageGalleryItem
              webformatURL={webformatURL}
              alt={tags}
              id={id}
              key={id}
              largeImgClick={this.largeImgClick}
            />
          ))}
        </ul>

        {imgModal && (
          <Modal closeModal={this.closeModal}>
            <img src={imgModal} alt="Modal" />
          </Modal>
        )}

        <div className="container-btn">
          {!!img.length && !pending && <Button loadMore={this.loadMore} />}
        </div>

        <div className="container-loader">
          {pending && (
            <Loader type="Puff" color="#00BFFF" height={200} width={200} />
          )}
        </div>
      </>
    );
  }
}

ImageGallery.propTypes = {
  search: PropTypes.string,
};

export default ImageGallery;
