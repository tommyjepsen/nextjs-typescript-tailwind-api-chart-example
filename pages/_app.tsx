import { Provider } from "react-redux";
import store from "../store/store";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <DefaultSeo defaultTitle="Veo" description="Veo descr" />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
