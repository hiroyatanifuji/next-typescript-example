import Document, {Head, Main, NextScript} from 'next/document';
import React                              from 'react';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await super.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return <html>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover"/>
                <link rel="stylesheet" href="/static/reset.css"/>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
            <style jsx>{`
                html, body {
                    height: 100%;
                    font-family: -apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', YuGothic, 'Yu Gothic', '游ゴシック  Medium', Meiryo, sans-serif;
                }
            `}</style>
        </html>;
    }
}
