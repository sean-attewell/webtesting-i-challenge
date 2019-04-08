module.exports = {
  succeed,
  fail,
  repair,
  get,
};



function succeed(item) {
  if (item.enhancement < 20) {
    const upgradedEnhancement = ++item.enhancement
    return { ...item, enhancement: upgradedEnhancement };
  } else {
    return { ...item };
  }
};

function fail(item) {
  let { enhancement, durability } = item;
  switch (true) {
    case enhancement < 15:
      return {
        ...item,
        durability: durability - 5,
      };
    case enhancement === 15 || enhancement === 16:
      return {
        ...item,
        durability: durability - 10
      };
    case enhancement > 16:
      return {
        ...item,
        durability: durability - 10,
        enhancement: --enhancement
      };
  }
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}

