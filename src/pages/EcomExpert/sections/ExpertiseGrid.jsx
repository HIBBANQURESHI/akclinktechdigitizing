import React from 'react';

const ExpertiseGrid = () => {
  const animationServices = [
    {
      title: "2D Animations",
      description: "From comics to cartoons, we can help you get the best 2D animation work done by professionals.",
      image: "https://via.placeholder.com/400x300.png?text=2D+Animations", // Placeholder image
    },
    {
      title: "Explainer Video",
      description: "From comics to cartoons, we can help you get the best 2D animation work done by professionals.",
      image: "https://via.placeholder.com/400x300.png?text=Explainer+Video", // Placeholder image
    },
    {
      title: "Whiteboard Animations",
      description: "We create engaging and informative whiteboard animations to help explain complex ideas clearly.",
      image: "https://via.placeholder.com/400x300.png?text=Whiteboard+Animations", // Placeholder image
    },
    {
      title: "3D Animations",
      description: "We create engaging and informative whiteboard animations to help explain complex ideas clearly.",
      image: "https://via.placeholder.com/400x300.png?text=3D+Animations", // Placeholder image
    },
    {
      title: "Whiteboard Animations",
      description: "We create engaging and informative whiteboard animations to help explain complex ideas clearly.",
      image: "https://via.placeholder.com/400x300.png?text=Whiteboard+Animations", // Placeholder image
    },
    {
        title: "Explainer Video",
        description: "From comics to cartoons, we can help you get the best 2D animation work done by professionals.",
        image: "https://via.placeholder.com/400x300.png?text=Explainer+Video", // Placeholder image
      },
    // Add more services if needed
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-6 text-4xl font-bold text-center">Our Animation Expertise</h2>
        <p className="mb-10 text-center text-gray-600">We offer an extensive range of animation services to help you reach your branding goals effectively.</p>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {animationServices.map((service, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg shadow-md">
              <img src={service.image} alt={service.title} className="object-cover w-full h-48"/>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseGrid;
