import { Helmet } from "react-helmet";

const Title = ({ title, subtitle }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={subtitle} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={subtitle} />
  </Helmet>
);

export default Title;
