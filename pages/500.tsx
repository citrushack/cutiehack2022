import React from 'react'

const error500: React.FC = () => {
  return (
    <div className="h-screen p-16 flex flex-col px-5 mx-auto justify-center items-center">
      <h1 className="mb-10 font-extrabold text-8xl">500</h1>
      <p className="font-semibold text-2xl">Uh oh. Something broke on our end. Check back later.</p>
    </div>
  );
};

export default error500