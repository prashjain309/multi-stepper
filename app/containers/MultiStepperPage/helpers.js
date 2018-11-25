export const handlActiveSlection = (config = []) => {
  let searchAgain = true;
  let newConfig = config;
  const active = { list: [], codeMap: [], content: '' };
  while (searchAgain) {
    const { subSteps, title, content } = newConfig[0] || [];
    if (Array.isArray(subSteps)) {
      active.list.push(title);
      active.codeMap.push(0);
      newConfig = subSteps;
    } else {
      if (title && content) {
        active.list.push(title);
        active.codeMap.push(0);
        active.content = content;
      }
      // dont search again
      searchAgain = false;
    }
  }
  return active;
};

export const getSingleConfig = (config, activeLi) => ({
  index: config.findIndex((e) => e.title === activeLi),
  value: config.find((e) => e.title === activeLi) || []
});

export const getFromActiveList = (config = [], activeList, property) => {
  let newConfig = config;
  let output;
  activeList.forEach((activeLi) => {
    newConfig = getSingleConfig(newConfig, activeLi);
    if (newConfig.value.subSteps) {
      newConfig = newConfig.value.subSteps;
    } else {
      output = newConfig.value[property];
    }
  });
  return output;
};
export const getLevelConfig = (
  config = [],
  positionMapPrefix = '',
  parentPosition = -1
) => {
  const level = config.map((stepObject, index) => {
    const current = {
      parentPosition,
      positionMap: positionMapPrefix + index,
      title: stepObject.title
    };

    return current;
  });

  return [{ level: 0, config: level }];
};

export const getMasterLevelConfig = (config) => {
  while (true) return getLevelConfig(config);
};
