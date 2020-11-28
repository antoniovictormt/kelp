import React from 'react';
import { PageNotFoundContainer } from './styles';

class PageNotFound extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <PageNotFoundContainer>
        Page Not Found
      </PageNotFoundContainer>
    )
  }
}

export default PageNotFound;
