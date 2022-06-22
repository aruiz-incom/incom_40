import ContentLoader from "react-content-loader";

const Loader = () => (
  <ContentLoader
    viewBox="0 0 400 50"
    height={50}
    width={400}
    backgroundColor="transparent"
  >
    <circle cx="150" cy="25" r="8" />
    <circle cx="194" cy="25" r="8" />
    <circle cx="238" cy="25" r="8" />
  </ContentLoader>
);

export default Loader;
