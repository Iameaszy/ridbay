import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeStyle } from './home.style';
import { Button } from '../../components/buttons/button.style';
import image from '../../assets/images/alert-image.jpeg';
export class Home extends Component {
  render() {
    return (
      <HomeStyle>
        <div className="row">
          <div className="col-md-6 jumbotron">
            <h1 className="jumbotron-header">
              Vel voluptatem quos praesentium blanditiis nesciunt ut maxime
              aliquid sed.
            </h1>
            <p className="jumbotron-text">
              Ex voluptatem non incidunt. Necessitatibus debitis rerum. Rerum
              dolor quo aut.
            </p>
            <div className="btn-group">
              <Button background="transparent" className="btn">
                View
              </Button>
              <Button className="btn" background="transparent">
                See
              </Button>
            </div>
          </div>
          <div className="col-md-6  jumbotron-img-wrapper">
            <img src={image} alt="" />
          </div>
        </div>
      </HomeStyle>
    );
  }
}
const mapStatesToProps = (states) => {
  return {};
};
const mapDispatchWithProps = (dispatch) => {
  return {};
};

export default connect(
  mapStatesToProps,
  mapDispatchWithProps,
)(Home);
