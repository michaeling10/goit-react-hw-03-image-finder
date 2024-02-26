import { Component } from 'react';
import axios from 'axios';
import Searchbar from '../components/Searchbar';
import ImageGallery from '../components/ImageGallery';
import Button from '../components/Button';
import Loader from '../components/Loader';
import Modal from '../components/Modal';

class App extends Component {
  state = {
    images: [],
    loading: false,
    query: '',
    page: 1,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    const apiKey = '40939556-45ae640df6958a2bad92a04f4';
    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ loading: true });

    axios
      .get(url)
      .then(response => {
        const images = response.data.hits;
        this.setState(prevState => ({
          images: page > 1 ? [...prevState.images, ...images] : images,
          loading: false,
        }));
      })
      .catch(error => console.error('Error al obtener las imágenes:', error))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchSubmit = query => {
    if (query !== this.state.query) {
      this.setState({ query, page: 1, images: [] }, this.fetchImages);
    } else {
      console.log('Same search!');
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleImageClick = largeImageURL => {
    this.setState({ largeImageURL, showModal: true });
  };

  render() {
    const { images, loading, showModal, largeImageURL } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {loading && <Loader />}
        {images.length > 0 && !loading && (
          <Button onClick={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
