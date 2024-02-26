import { Component } from 'react';
import './styles/Button-module.css';

class Button extends Component {
  render() {
    return (
      <div className="btn-load-container">
        <button className="load-more" onClick={this.props.onClick}>
          Load more
        </button>
      </div>
    );
  }
}

export default Button;
