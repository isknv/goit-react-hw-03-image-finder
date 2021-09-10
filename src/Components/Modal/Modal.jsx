import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", event => {
      if (event.code === "Escape") {
        this.props.closeModal();
      }
    });
  }

  closeBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div onClick={this.closeBackdrop} className="Overlay">
        <div className="Modal">{this.props.children}</div>
      </div>,
      document.querySelector("#modal-root")
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
