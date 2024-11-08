import React from 'react';

const InputField = ({ label, name, value, onChange, type = 'text', checked, options = [] }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-sm font-semibold">{label}</label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="p-2 mt-1 border-2 rounded-md"
        />
      ) : type === 'checkbox' ? (
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="mt-1"
        />
      ) : type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="p-2 mt-1 border-2 rounded-md"
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="p-2 mt-1 border-2 rounded-md"
        />
      )}
    </div>
  );
};

export default InputField;
