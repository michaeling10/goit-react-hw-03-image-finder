import { Component } from 'react';
import './styles/ImageGalleryItem-module.css';

class ImageGalleryItem extends Component {
  render() {
    const { image, onImageClick } = this.props;
    return (
      <li
        className="gallery-item"
        onClick={() => onImageClick(image.largeImageURL)}
      >
        <img className="gallery-item-img" src={image.webformatURL} alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
