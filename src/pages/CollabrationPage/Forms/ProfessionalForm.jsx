import React, { useEffect, useRef, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import emailjs from "emailjs-com";
import { countryList } from "../../../utils/CountryList";
import { professionalTemplate } from "../../../utils/forms-formats/ProfessionalForm";

const ProfessionalForm = () => {

  const { register, control, handleSubmit, reset, formState: { errors } } = useForm();
  const { fields: educationFields, append: addEducation } = useFieldArray({
    control,
    name: "educations"
  });
  const { fields: experienceFields, append: addExperience } = useFieldArray({
    control,
    name: "experiences"
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);

    const formattedData = professionalTemplate(data);
console.log(formattedData)
    try {
      const response = await emailjs.send(
        "service_8hdasd9",
        "template_2dn1ftd",
        { message: formattedData },
        "E0y6p0_LBMpPkmoYG"
      );
      console.log("SUCCESS!", response.status, response.text);
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error("FAILED...", err);
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  
  const initialized = useRef(false);
  
  useEffect(() => {
    if (!initialized.current) {
      if (educationFields.length === 0) {
        addEducation({ degree: "", institute: "", year: "" });
      }
      if (experienceFields.length === 0) {
        addExperience({ title: "", company: "", duration: "" });
      }
      initialized.current = true;
    }
  }, [addEducation, addExperience, educationFields.length, experienceFields.length]);

  if (submitted) {
    return (
      <div className="max-w-xl p-6 mx-auto text-center bg-white rounded shadow-md">
        <h3 className="text-2xl font-semibold text-green-600">
          Thank you for your submission!
        </h3>
        <p className="mt-4 text-gray-700">
          We will review your application and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div>
       {loading && (
        <div className="flex items-center justify-center h-64">
          <div className="loader">Loading...</div>
        </div>
      )}

      {!loading &&  (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-full p-6 mx-auto bg-white rounded shadow-md">
          {/* Personal Information Section */}
          <h2 className="mb-4 text-xl font-semibold">Personal Information:</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Title</label>
              <select {...register("title", { required: "Title is required" })} className="w-full p-2 border">
                <option value="">Select Title</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
              </select>
              {errors.title && <span className="text-red-500">{errors.title.message}</span>}
            </div>
            <div>
              <label>First Name</label>
              <input {...register("firstname", { required: "First Name is required" })} className="w-full p-2 border" />
              {errors.firstname && <span className="text-red-500">{errors.firstname.message}</span>}
            </div>
            <div>
              <label>Last Name</label>
              <input {...register("lastname", { required: "Last Name is required" })} className="w-full p-2 border" />
              {errors.lastname && <span className="text-red-500">{errors.lastname.message}</span>}
            </div>
            <div>
              <label>Country</label>
              <select {...register("country", { required: "Country is required" })} className="w-full p-2 border">
                <option value="">Select Country</option>
                {countryList.map((country, index) => <option key={index} value={country}>{country}</option>)}
              </select>
              {errors.country && <span className="text-red-500">{errors.country.message}</span>}
            </div>
            <div>
              <label>Email</label>
              <input {...register("email", { required: "Email is required" })} type="email" className="w-full p-2 border" />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            <div>
              <label>Phone</label>
              <input {...register("phone", { required: "Phone is required" })} type="tel" className="w-full p-2 border" />
              {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
            </div>
            <div>
              <label>Address</label>
              <input {...register("address", { required: "Address is required" })} className="w-full p-2 border" />
              {errors.address && <span className="text-red-500">{errors.address.message}</span>}
            </div>
            <div>
              <label>City</label>
              <input {...register("city", { required: "City is required" })} className="w-full p-2 border" />
              {errors.city && <span className="text-red-500">{errors.city.message}</span>}
            </div>
            <div>
              <label>State/Province</label>
              <input {...register("state", { required: "State is required" })} className="w-full p-2 border" />
              {errors.state && <span className="text-red-500">{errors.state.message}</span>}
            </div>
            <div>
              <label>Postal Code</label>
              <input {...register("postal", { required: "Postal Code is required" })} className="w-full p-2 border" />
              {errors.postal && <span className="text-red-500">{errors.postal.message}</span>}
            </div>
          </div>

          {/* Questions Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Questions:</h2>
            {["age", "crime", "terminated"].map((field, index) => (
              <div className="mb-4" key={field}>
                <p>{field === "age" ? "Are you at least 18 years of age?" : field === "crime" ? "Have you ever been convicted of a crime?" : "Have you ever been terminated from a job?"}</p>
                <div>
                  <label>
                    <input type="radio" {...register(field, { required: true })} value="yes" />
                    Yes
                  </label>
                  <label className="ml-4">
                    <input type="radio" {...register(field, { required: true })} value="no" />
                    No
                  </label>
                </div>
                {errors[field] && <span className="text-red-500">This question is required</span>}
              </div>
            ))}
          </div>

          {/* How Did You Hear About Us */}
          <div className="mb-4">
            <label>How did you hear about us?</label>
            <input {...register("hearAbout", { required: "This field is required" })} className="w-full p-2 border" />
            {errors.hearAbout && <span className="text-red-500">{errors.hearAbout.message}</span>}
          </div>

          {/* Academic Qualifications Section */}
          <h2 className="mt-8 mb-4 text-xl font-semibold">Academic Qualifications:</h2>
          {educationFields.map((field, index) => (
            <div key={field.id} className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label>Degree*</label>
                <input {...register(`educations.${index}.degree`, { required: "Degree is required" })} className="w-full p-2 border" />
                {errors.educations?.[index]?.degree && <span className="text-red-500">{errors.educations[index].degree.message}</span>}
              </div>
              <div>
                <label>Institute's Name*</label>
                <input {...register(`educations.${index}.institute`, { required: "Institute's Name is required" })} className="w-full p-2 border" />
                {errors.educations?.[index]?.institute && <span className="text-red-500">{errors.educations[index].institute.message}</span>}
              </div>
              <div>
                <label>Year*</label>
                <input type="number" {...register(`educations.${index}.year`, { required: "Year is required" })} className="w-full p-2 border" />
                {errors.educations?.[index]?.year && <span className="text-red-500">{errors.educations[index].year.message}</span>}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addEducation({ degree: "", institute: "", year: "" })}
            className="p-2 mb-4 text-white bg-blue-500 rounded"
          >
            Add Education
          </button>

          {/* Work Experience Section */}
          <h2 className="mt-8 mb-4 text-xl font-semibold">Work Experience:</h2>
          {experienceFields.map((field, index) => (
            <div key={field.id} className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label>Job Title*</label>
                <input {...register(`experiences.${index}.title`, { required: "Job Title is required" })} className="w-full p-2 border" />
                {errors.experiences?.[index]?.title && <span className="text-red-500">{errors.experiences[index].title.message}</span>}
              </div>
              <div>
                <label>Company Name*</label>
                <input {...register(`experiences.${index}.company`, { required: "Company Name is required" })} className="w-full p-2 border" />
                {errors.experiences?.[index]?.company && <span className="text-red-500">{errors.experiences[index].company.message}</span>}
              </div>
              <div>
                <label>Duration*</label>
                <input {...register(`experiences.${index}.duration`, { required: "Duration is required" })} className="w-full p-2 border" />
                {errors.experiences?.[index]?.duration && <span className="text-red-500">{errors.experiences[index].duration.message}</span>}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addExperience({ title: "", company: "", duration: "" })}
            className="p-2 mb-4 text-white bg-blue-500 rounded"
          >
            Add Experience
          </button>

          {/* Interests Section */}
          <div className="mb-4">
            <label>Interests</label>
            <textarea {...register("interest")} className="w-full p-2 border" rows="3"></textarea>
          </div>

          {/* Availability Section */}
          <h2 className="mt-8 mb-4 text-xl font-semibold">Availability:</h2>
          <div className="mb-4">
            <label>Available Start Date</label>
            <input type="date" {...register("startDate")} className="w-full p-2 border" />
          </div>
          <div className="mb-4">
            <label>Available End Date</label>
            <input type="date" {...register("endDate")} className="w-full p-2 border" />
          </div>

          {/* Agreement Section */}
          <div className="mb-4">
            <label>
              <input type="checkbox" {...register("agreement", { required: "You must accept the terms" })} />
              I agree to the terms and conditions
            </label>
            {errors.agreement && <span className="text-red-500">{errors.agreement.message}</span>}
          </div>

          {/* Additional Comments Section */}
          <div className="mb-4">
            <label>Additional Comments</label>
            <textarea {...register("comments")} className="w-full p-2 border" rows="3"></textarea>
          </div>

          {loading && <p className="text-blue-500">Submitting...</p>}
{error && <p className="text-red-500">{error}</p>}


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ProfessionalForm;
