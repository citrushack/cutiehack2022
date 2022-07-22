import React from 'react'

export default function error500()
{
  return (
    <section className="h-screen p-16 flex flex-col px-5 mx-auto justify-center items-center">
      <h1>500</h1>
      <p>Uh oh. Something broke on our end. Check back later.</p>
    </section>
  );
};
