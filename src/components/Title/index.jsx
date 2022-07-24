import { Helmet } from "react-helmet";

const Title = ({ title, subtitle }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="title" property="og:title" content={title} />
  </Helmet>
);

export default Title;
