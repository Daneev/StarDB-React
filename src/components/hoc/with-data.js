import React, {Component} from 'react';
import { Spinner } from '../spinner/spinner';


export const withData = (getData) => (View) => {
  return class extends Component {
    state = {
      data: null
    };

    componentDidMount() {
      this.update();
    }

    update() {
      getData()
      .then((data) => this.setState({ data }));
    }

  render() {
    const { data } = this.state;

    if (!data) {
      return <Spinner />;
    }
      return <View {...this.props} data={data}/>;
    };
  };
}

