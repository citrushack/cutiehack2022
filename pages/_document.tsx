import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <html lang="id">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Citrus Hack, a 24-hour hackathon hosted at University of California, Riverside."
          />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="preload" as="image" href="/assets/logo.svg" />
          <link rel="preload" as="image" href="/assets/aboutuslamps.svg" />
          <link rel="preload" as="image" href="/assets/aboutUsStars.svg" />
          <link rel="preload" as="image" href="/assets/BigLogo.svg" />
          <link rel="preload" as="image" href="/assets/blurredLogo.png" />
          <link rel="preload" as="image" href="/assets/hand2.svg" />
          <link rel="preload" as="image" href="/assets/laptop.svg" />
          <link rel="preload" as="image" href="/assets/lightbulb.svg" />
          <link rel="preload" as="image" href="/assets/mobileLamps2.svg" />
          <link rel="preload" as="image" href="/assets/mobileLampsBlur.png" />
          <link rel="preload" as="image" href="/assets/mountain2blur.png" />
          <link rel="preload" as="image" href="/assets/mountains4.svg" />
          <link rel="preload" as="image" href="/assets/mountains4blur.png" />
          <link rel="preload" as="image" href="/assets/plants.svg" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
