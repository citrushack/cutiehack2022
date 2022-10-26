import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang="id">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Cutie Hack, a 12-hour hackathon hosted at University of California, Riverside."
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/favicon-512x512.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="preload" as="image" href="/assets/BigLogo.svg" />
          <link rel="preload" as="image" href="/assets/aboutuslamps.svg" />
          <link rel="preload" as="image" href="/assets/aboutUsStars.svg" />
          <link rel="preload" as="image" href="/assets/BigLogo.svg" />
          <link rel="preload" as="image" href="/assets/blurredLogo.png" />
          <link rel="preload" as="image" href="/assets/hand2.svg" />
          <link rel="preload" as="image" href="/assets/laptop.png" />
          <link rel="preload" as="image" href="/assets/lightbulb.png" />
          <link rel="preload" as="image" href="/assets/mobileLamps2.svg" />
          <link rel="preload" as="image" href="/assets/mobileLampsBlur.png" />
          <link rel="preload" as="image" href="/assets/mountain2blur.png" />
          <link rel="preload" as="image" href="/assets/mountains4.svg" />
          <link rel="preload" as="image" href="/assets/mountains4blur.png" />
          <link rel="preload" as="image" href="/assets/plants.png" />
          <link rel="preload" as="image" href="/assets/sponsors/acm-dark.svg" />
          <link
            rel="preload"
            as="image"
            href="/assets/sponsors/acm-light.svg"
          />
          <link
            rel="preload"
            as="image"
            href="/assets/sponsors/google-cloud.svg"
          />
          <link
            rel="preload"
            as="image"
            href="/assets/sponsors/ieee-dark.svg"
          />
          <link
            rel="preload"
            as="image"
            href="/assets/sponsors/ieee-light.svg"
          />
          <link
            rel="preload"
            as="image"
            href="/assets/sponsors/interview-cake-dark.svg"
          />
          <link
            rel="preload"
            as="image"
            href="/assets/sponsors/interview-cake-light.svg"
          />
          <link
            rel="preload"
            as="image"
            href="/assets/sponsors/redbull-black.svg"
          />
          <link
            rel="preload"
            as="image"
            href="/assets/sponsors/redbull-white.svg"
          />
          <link
            rel="preload"
            as="image"
            href="/assets/sponsors/sketch-dark.svg"
          />
          <link
            rel="preload"
            as="image"
            href="/assets/sponsors/sketch-light.svg"
          />
          <link
            rel="preload"
            as="image"
            href="/assets/sponsors/triad-dark.svg"
          />
          <link
            rel="preload"
            as="image"
            href="/assets/sponsors/triad-light.svg"
          />
          <link
            rel="preload"
            as="image"
            href="/assets/sponsors/wolfram-dark.svg"
          />
          <link
            rel="preload"
            as="image"
            href="/assets/sponsors/wolfram-light.svg"
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
