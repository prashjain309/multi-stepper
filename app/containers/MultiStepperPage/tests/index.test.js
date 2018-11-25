import React from 'react';
import { shallow } from 'enzyme';

import MultiStepperPage from '../index';

describe('<MultiStepperPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<MultiStepperPage />);
    expect(renderedComponent.contains(<h1>Features</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<MultiStepperPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
