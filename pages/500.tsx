import React from 'react'
import { Page } from '@/components/Page/Page'

export default function error500()
{
  return (
    <Page>
      <section className="h-screen p-16 flex flex-col px-5 mx-auto justify-center items-center">
        <h1>500</h1>
        <p>Uh oh. Something broke on our end. Check back later.</p>
      </section>
    </Page>
  );
};
