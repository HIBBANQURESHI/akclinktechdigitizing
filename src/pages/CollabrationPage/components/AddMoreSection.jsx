import React from 'react';
import InputField from './InputField';

const AddMoreSection = ({ fields, sectionTitle, onAddMore, onChange, values }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold">{sectionTitle}</h3>
      {fields.map((field, index) => {
        const value = values && values[index] ? values[index][field.name] : '';
        return (
          <InputField
            key={index}
            label={field.label}
            name={field.name}
            value={value}
            onChange={(e) => onChange(index, e)}
          />
        );
      })}
      <button
        type="button"
        onClick={onAddMore}
        className="mt-2 text-blue-500"
      >
        Add More
      </button>
    </div>
  );
};

export default AddMoreSection;