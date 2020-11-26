import React from 'react';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ShortenerService from '../../services/shortenerService';

import { RedirectContainer } from './styles';

class RedirectPage extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      url: '',
      errorMessage: '',
    }
  };

  async componentDidMount() {
    const { code } = this.props.match.params;

    try {
      const service = new ShortenerService();
      const { url } = await service.getLink(code);

      window.location = url;
    } catch (error) {
      this.setState({
        isLoading: false,
        errorMessage: 'Oops, the requested url does not exist'
      });
    }
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <Container>
        {errorMessage ? (
          <>
            <Header>
              Your new url shortener
            </Header>
            <RedirectContainer className="text-center">
              <FontAwesomeIcon size="3x" color="#f8d7da" icon="" />
              <p className="m-3">{errorMessage}</p>
              <a className="btn btn-primary" href="/">Shorten new URL</a>
            </RedirectContainer>
          </>
        ) : (
            <Header className="text-center">Redirecting...</Header>
          )
        }
      </Container>
    )
  }
};

export default RedirectPage;
