/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import './style.scss';

const getSingleConfig = (config, activeLi) => ({
  index: config.findIndex((e) => e.title === activeLi),
  value: config.find((e) => e.title === activeLi) || []
});

const MultiList = ({
  config = [],
  activeList = [],
  handleClick = (args) => {
    console.log(args);
  }
}) => {
  const innerHandleClick = (e) => {
    const code = e.target.getAttribute('code');
    const { innerText } = e.target;
    handleClick({ code, innerText });
  };

  const firstLevel = config.map((e, index) => (
    <li
      key={index}
      code={index}
      onClick={innerHandleClick}
      className={activeList[0] === e.title ? 'active' : ''}
    >
      {e.title}
    </li>
  ));

  let newConfig = config;
  let codePrefix = '';

  const dynamicLevels = activeList.map((activeLi, index) => {
    newConfig = getSingleConfig(newConfig, activeLi);
    codePrefix =
      codePrefix.length > 1
        ? `${codePrefix}-${newConfig.index}`
        : `${newConfig.index}`;
    newConfig = newConfig.value.subSteps || [];

    const singleList =
      (newConfig &&
        newConfig.map((activeConfig, i) => (
          <li
            key={`${codePrefix}-${i}`}
            code={`${codePrefix}-${i}`}
            onClick={innerHandleClick}
            className={
              activeList[index + 1] === activeConfig.title ? 'active' : ''
            }
          >
            {activeConfig.title}
          </li>
        ))) ||
      [];
    return singleList.length > 0 && <ul>{singleList}</ul>;
  });
  return (
    <div className="list-wrapper">
      <ul>{firstLevel}</ul>
      {dynamicLevels.filter((e) => e)}
    </div>
  );
};

export default MultiList;

// <List config={stepperConfig} activeList={activeSteppers.list} />
