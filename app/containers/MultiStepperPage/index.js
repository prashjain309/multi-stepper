import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { getConfig, setSelection } from './actions';
import { config, getActiveContent } from './selectors';
import reducer from './reducer';
import saga from './saga';
import MultiStepperPage from './MultiStepperPage';

const mapDispatchToProps = (dispatch) => ({
  getConfig: () => dispatch(getConfig()),
  handleClick: (payload) => dispatch(setSelection(payload))
});

const mapStateToProps = createStructuredSelector({
  stepperConfig: config(),
  activeSteppers: getActiveContent(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'multiStepperApp', reducer });
const withSaga = injectSaga({ key: 'multiStepperApp', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(MultiStepperPage);
export { mapDispatchToProps };
