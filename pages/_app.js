import "tailwindcss/tailwind.css";
import "../styles.css";

export default function App({ Component, pageProps: { ...pageProps } }) {
  return <Component {...pageProps} />;
}
