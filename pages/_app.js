import "../styles/globals.css";
import { Layout } from "../components";
import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout className="App">
      <span className="helpText">
        <div>
          go to `/user/<code>[GITHUB_USERNAME]</code>`
        </div>
        <div>
          for example <Link href="/user/ruthority">/user/ruthority</Link>
        </div>
      </span>
      <Component {...pageProps} className="App" />
    </Layout>
  );
}
