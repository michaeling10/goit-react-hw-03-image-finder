import { Component } from 'react';
import './styles/Modal-module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <div className="overlay" onClick={this.handleBackdropClick}>
        <div className="modal">
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
