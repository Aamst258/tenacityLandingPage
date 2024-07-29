import React from 'react';
import ImageSection from '../components/ImageSection';
import TextSection from '../components/TextSection';
import Footer from './../components/Footer';

const Home = () => {
  const sections = [
    {
      title: 'Mission',
      content: 'Empower students to reach their full potential through learning, mentorship, and collaboration.',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/29a043c7a31ab7145fb52392ad62ec5cdd64020417648bb0ed9148558e59a389?apiKey=303f4e9c2e3548e9bc5a09fc673fa272'
    },
    {
      title: 'Values',
      content: 'Foster inclusivity, growth, and mutual support in a diverse community.',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/29a043c7a31ab7145fb52392ad62ec5cdd64020417648bb0ed9148558e59a389?apiKey=303f4e9c2e3548e9bc5a09fc673fa272'
    },
    {
      title: 'Impact',
      content: 'Create meaningful connections and opportunities that inspire personal and academic growth.',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/29a043c7a31ab7145fb52392ad62ec5cdd64020417648bb0ed9148558e59a389?apiKey=303f4e9c2e3548e9bc5a09fc673fa272'
    }
  ];

  return (
    <>
      <main className="bg-black py-5">
        <div className="container">
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/de4961c570a710346b5149473337cafdaa0b7b1a210235d13f0f110d29677778?apiKey=303f4e9c2e3548e9bc5a09fc673fa272"
            alt="Tenacity banner"
            className="img-fluid rounded mx-auto d-block"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />

          {sections.map((section, index) => (
            <section key={index} className="row mt-4">
              {index % 2 === 0 ? (
                <>
                  <div className="col-md-6 mb-3">
                    <TextSection title={section.title} content={section.content} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <ImageSection imageSrc={section.imageSrc} altText={`${section.title} illustration`} />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6 mb-3">
                    <ImageSection imageSrc={section.imageSrc} altText={`${section.title} illustration`} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <TextSection title={section.title} content={section.content} />
                  </div>
                </>
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
