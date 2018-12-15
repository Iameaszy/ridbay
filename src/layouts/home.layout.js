import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/header/index';
import { Footer } from '../components/footer/footer';
import { Route } from 'react-router-dom';
import { SharedStyle } from '../components/styles/shared';
class Home extends React.PureComponent {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(matchProps) => (
          <div className="DefaultLayout">
            <Header />
            <SharedStyle>
              <Component {...matchProps} />
            </SharedStyle>
            <Footer />
          </div>
        )}
      />
    );
  }
}

export default connect()(Home);
