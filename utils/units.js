const units = {
  ZPZ: "EA",
  UN: "EA",
  KT: "KT",
  XPK: "XPK",
};

const getSATUnit = (SAPunit) => {
  const unit = units[SAPunit];
  return unit;
};

export default getSATUnit;
