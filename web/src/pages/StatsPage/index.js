import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  parseISO,
  formatRelative
} from 'date-fns';
import enUS from 'date-fns/locale/en-US';

import Header from '../../components/Header';
import ShortenerService from '../../services/shortenerService';
import vars from '../../configs/vars';

import {
  StatsBox,
  StatsBoxTitle,
  StatsContainer,
  StatsRow
} from './styles';

class StatsPage extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      shortenedURL: {},
      errorMessage: '',
    }
  };

  async componentDidMount() {
    const { code } = this.props.match.params;

    try {
      const service = new ShortenerService();
      const shortenedURL = await service.getStats(code);

      const parsedDate = parseISO(shortenedURL.updatedAt);
      const currentDate = new Date();

      const relativeData = formatRelative(parsedDate, currentDate, {
        locale: enUS,
      });

      shortenedURL.relativeData = relativeData;

      this.setState({
        isLoading: false,
        shortenedURL
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        errorMessage: 'Oops, the requested url does not exist',
      });
    }
  };

  render() {
    const { errorMessage, shortenedURL } = this.state;

    return (
      <Container>
        <Header>Statistics:</Header>
        {errorMessage ? (
          <StatsContainer className="text-center">
            <FontAwesomeIcon size="3x" color="#f8d7da" icon="" />
            <p className="m-3">{errorMessage}</p>
            <a className="btn btn-primary" href="/">Shorten new URL</a>
          </StatsContainer>
        ) : (
            <StatsContainer className="text-center">
              <p>
                <b>
                  {vars.HOST_APP + shortenedURL.code};
                </b>
              </p>
              <p>
                Redirect to:<br />
                {shortenedURL.url}
              </p>
              <StatsRow>
                <StatsBox>
                  <StatsBoxTitle>
                    Visits
                  </StatsBoxTitle>
                  <b>
                    {shortenedURL.hits}
                  </b>
                </StatsBox>
                <StatsBox>
                  <StatsBoxTitle>
                    Last Visit
                  </StatsBoxTitle>
                  <b>
                    {shortenedURL.relativeData}
                  </b>
                </StatsBox>
              </StatsRow>
              <a className="btn btn-primary" href="/">Shorten new URL</a>
            </StatsContainer>
          )}
      </Container>
    )
  }
}

export default StatsPage;
