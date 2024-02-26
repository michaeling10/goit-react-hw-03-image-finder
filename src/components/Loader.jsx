import { Component } from 'react';
import { TailSpin } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <TailSpin color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}

export default Loader;
