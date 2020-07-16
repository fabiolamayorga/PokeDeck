import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = props => (
  <ContentLoader
    speed={2}
    width={320}
    height={160}
    viewBox="0 0 320 161.5"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="14" rx="5" ry="5" width="320" height="10" />
    <rect x="0" y="45" rx="5" ry="5" width="320" height="10" />
    <rect x="0" y="75" rx="5" ry="5" width="320" height="10" />
    <rect x="0" y="105" rx="5" ry="5" width="320" height="10" />
  </ContentLoader>
);

export default MyLoader;
