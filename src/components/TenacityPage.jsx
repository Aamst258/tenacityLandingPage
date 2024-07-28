import React from 'react';
import AboutTenacity from './AboutTenacity';
import ImageSection from './ImageSection';
import TextSection from './TextSection';

const TenacityPage = () => {
  const sections = [
    { title: 'Mission', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/29a043c7a31ab7145fb52392ad62ec5cdd64020417648bb0ed9148558e59a389?apiKey=303f4e9c2e3548e9bc5a09fc673fa272&&apiKey=303f4e9c2e3548e9bc5a09fc673fa272' },
    { title: 'Values', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/29a043c7a31ab7145fb52392ad62ec5cdd64020417648bb0ed9148558e59a389?apiKey=303f4e9c2e3548e9bc5a09fc673fa272&&apiKey=303f4e9c2e3548e9bc5a09fc673fa272' },
    { title: 'Impact', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/29a043c7a31ab7145fb52392ad62ec5cdd64020417648bb0ed9148558e59a389?apiKey=303f4e9c2e3548e9bc5a09fc673fa272&&apiKey=303f4e9c2e3548e9bc5a09fc673fa272' }
  ];
 
  /*      
https://cdn.builder.io/api/v1/image/assets/TEMP/de4961c570a710346b5149473337cafdaa0b7b1a210235d13f0f110d29677778?apiKey=303f4e9c2e3548e9bc5a09fc673fa272&&apiKey=303f4e9c2e3548e9bc5a09fc673fa272


  */


  return (
    <main className="flex flex-col py-20 bg-black">
      <div className="flex flex-col items-center pr-10 pl-4 mt-6 w-full max-md:pr-5 max-md:max-w-full">
        <img loading="lazy" src="/public/image 1.png" alt="Tenacity banner" className="w-full aspect-[1.28] max-w-[1264px] max-md:max-w-full" />
        
        {sections.map((section, index) => (
        <section key={index} className="mt-28 w-full max-w-[1359px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {index % 2 === 0 ? (
            <>
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <TextSection title={section.title} content={section.content} />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <ImageSection imageSrc={section.imageSrc} altText={`${section.title} illustration`} />
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <ImageSection imageSrc={section.imageSrc} altText={`${section.title} illustration`} />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <TextSection title={section.title} content={section.content} />
              </div>
              </>
              )}
            </div>
          </section>
        ))}

      
      </div>
  
    </main>
  );
};

export default TenacityPage;