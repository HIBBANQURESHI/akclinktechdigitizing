const FormTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Professionals', 'For startups', 'For collaborators', 'For investors'];

  return (
    <div className="flex flex-col items-center justify-center space-y-2 border-b-2 md:flex-row md:space-y-0 md:space-x-4">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`px-4 py-2 text-sm md:text-base font-semibold focus:outline-none transition-all duration-300 ${
            activeTab === tab ? 'border-b-4 border-black text-black' : 'text-gray-600 hover:text-black'
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FormTabs;
