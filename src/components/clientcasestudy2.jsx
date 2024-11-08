import React from "react";

const ClientCaseStudy2 = ({ title, imageUrl, description, stats }) => {
  return (
    <div className="container p-4 mx-auto mb-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white">Client Case Studies</h2>
        <div className="w-20 h-1 mx-auto my-4 bg-yellow-500"></div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
        <img
          src={'https://cdn3d.iconscout.com/3d/free/thumb/free-meta-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-social-media-app-pack-logos-icons-8250233.png?f=webp'}
          alt={title}
          className="rounded-lg shadow-md lg:w-1/3"
        />

        <div className="text-left lg:w-2/3">
          <h3 className="text-2xl font-bold text-white">Boosting Social Media Presence</h3>
          <p className="mt-2 text-gray-700 text-white">
            Our SMM team successfully enhanced {title}'s online engagement and brand visibility through targeted social media campaigns. By leveraging influencer collaborations, interactive content, and data-driven strategies, we significantly increased their follower base and audience interaction across major platforms.
          </p>

          <div className="flex justify-between mt-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-bold text-yellow-500">{stat.value}</h4>
                <p className="text-gray-500 text-white">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCaseStudy2;
