import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/67210eb62480f5b4f595bdd2/1ibci2ueo';
    script.async = true;
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up on component unmount
    };
  }, []);

  return null;
};

export default Chatbot;
