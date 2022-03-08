import Layput from "../Components/Layout/Layput";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layput>
      <Component {...pageProps} />
    </Layput>
  );
}

export default MyApp;
