import { Helmet } from "react-helmet";
import preview from "../../assets/og/preview.png";

const Title = ({ title, subtitle }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={subtitle} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={subtitle} />
    <meta property="og:image" content={preview} />
  </Helmet>
);

export default Title;
