/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import List from 'components/newList';
import './style.scss';

export default class MultiStepperPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  UNSAFE_componentWillMount() {
    this.props.getConfig();
  }

  render() {
    const {
      loading,
      error,
      activeSteppers,
      stepperConfig,
      handleClick
    } = this.props;

    return (
      <div className="feature-page">
        <Helmet>
          <title>MultiStepper Page</title>
          <meta name="description" content="Multi Stepper Application" />
        </Helmet>
        {loading && <div>loading</div>}
        {error && <div>Error Occured</div>}
        {!loading && !error && Array.isArray(stepperConfig) && (
          <div>
            <List
              config={stepperConfig}
              activeList={activeSteppers.list}
              handleClick={handleClick}
            />
            <div>active : {activeSteppers.content}</div>
          </div>
        )}
      </div>
    );
  }
}

MultiStepperPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  getConfig: PropTypes.func
};
