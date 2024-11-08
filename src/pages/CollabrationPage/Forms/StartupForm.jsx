import React, { useState } from "react";
import emailjs from "emailjs-com";
import { countryList } from "../../../utils/CountryList";
import { useForm } from "react-hook-form";
import { startupTemplate } from "../../../utils/forms-formats/StartupFormat";

const StartupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);

    const formattedData = startupTemplate(data);

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
    <>
      {loading && (
        <div className="flex items-center justify-center h-64">
          <div className="loader">Loading...</div>
        </div>
      )}

      {!loading && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-full p-6 mx-auto space-y-6 bg-white rounded shadow-md"
          encType="multipart/form-data"
        >
          <input type="hidden" value="startups" {...register("type")} />

          {/* Startup Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name of the Startup*
            </label>
            <input
              type="text"
              className={`form-input w-full p-2 border ${
                errors.startup_name ? "border-red-500" : "border-gray-300"
              } rounded`}
              placeholder="Name of the Startup*"
              {...register("startup_name", { required: true })}
            />
            {errors.startup_name && (
              <p className="mt-1 text-xs text-red-500">This field is required</p>
            )}
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name*
            </label>
            <input
              type="text"
              className={`form-input w-full p-2 border ${
                errors.firstname ? "border-red-500" : "border-gray-300"
              } rounded`}
              placeholder="First Name*"
              {...register("firstname", { required: true })}
            />
            {errors.firstname && (
              <p className="mt-1 text-xs text-red-500">This field is required</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name*
            </label>
            <input
              type="text"
              className={`form-input w-full p-2 border ${
                errors.lastname ? "border-red-500" : "border-gray-300"
              } rounded`}
              placeholder="Last Name*"
              {...register("lastname", { required: true })}
            />
            {errors.lastname && (
              <p className="mt-1 text-xs text-red-500">This field is required</p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country*
            </label>
            <select
              className={`form-select w-full p-2 border ${
                errors.country ? "border-red-500" : "border-gray-300"
              } rounded`}
              {...register("country", { required: true })}
            >
              <option value="" disabled>
                Country*
              </option>
              {countryList.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="mt-1 text-xs text-red-500">This field is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email*
            </label>
            <input
              type="email"
              className={`form-input w-full p-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded`}
              placeholder="Email*"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">This field is required</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone*
            </label>
            <input
              type="number"
              className={`form-input w-full p-2 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded`}
              placeholder="Phone*"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">This field is required</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address*
            </label>
            <input
              type="text"
              className={`form-input w-full p-2 border ${
                errors.address ? "border-red-500" : "border-gray-300"
              } rounded`}
              placeholder="Address*"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <p className="mt-1 text-xs text-red-500">This field is required</p>
            )}
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City*
            </label>
            <input
              type="text"
              className={`form-input w-full p-2 border ${
                errors.city ? "border-red-500" : "border-gray-300"
              } rounded`}
              placeholder="City*"
              {...register("city", { required: true })}
            />
            {errors.city && (
              <p className="mt-1 text-xs text-red-500">This field is required</p>
            )}
          </div>

          {/* State/Province */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              State/Province*
            </label>
            <input
              type="text"
              className={`form-input w-full p-2 border ${
                errors.state ? "border-red-500" : "border-gray-300"
              } rounded`}
              placeholder="State/Province*"
              {...register("state", { required: true })}
            />
            {errors.state && (
              <p className="mt-1 text-xs text-red-500">This field is required</p>
            )}
          </div>

          {/* Postal Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Postal Code*
            </label>
            <input
              type="text"
              className={`form-input w-full p-2 border ${
                errors.postal ? "border-red-500" : "border-gray-300"
              } rounded`}
              placeholder="Postal Code*"
              {...register("postal", { required: true })}
            />
            {errors.postal && (
              <p className="mt-1 text-xs text-red-500">This field is required</p>
            )}
          </div>

          {/* How did you hear about us? */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              How did you hear about us?
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded form-input"
              placeholder="How did you hear about us?"
              {...register("hearAbout")}
            />
          </div>

          {/* Idea or Initiation Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Idea or Initiation Year*
            </label>
            <input
              type="text"
              className={`form-input w-full p-2 border ${
                errors.year ? "border-red-500" : "border-gray-300"
              } rounded`}
              placeholder="Idea or Initiation Year*"
              {...register("year", { required: true })}
            />
            {errors.year && (
              <p className="mt-1 text-xs text-red-500">This field is required</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description*
            </label>
            <textarea
              className={`form-textarea w-full p-2 border ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded`}
              placeholder="Description*"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <p className="mt-1 text-xs text-red-500">This field is required</p>
            )}

          </div>

<div>
<label className="block text-sm font-medium text-gray-700">
How many individuals in your team?*
            </label>
          <select
              className={`p-2 border ${
                errors.team_count ? "border-red-500" : "border-gray-300"
              } rounded`}
              {...register("team_count", { required: true })}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            {errors.team_count && (
              <p className="text-red-500">This field is required</p>
            )}
</div>

            <div className="flex items-center mb-4">
              <p className="mr-4">Are you looking for funding opportunity?</p>
              <label className="flex items-center mr-4">
                <input
                  type="radio"
                  value="no"
                  {...register("funding", { required: true })}
                />{" "}
                No
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="yes"
                  {...register("funding", { required: true })}
                />{" "}
                Yes
              </label>
            </div>
            {errors.funding && (
              <p className="text-red-500">This field is required</p>
            )}

            <textarea
              placeholder="What problem are you aiming to solve?"
              className="w-full p-2 mt-2 border border-gray-300 rounded form-textarea"
              {...register("problem")}
            />
            <textarea
              placeholder="What audience you are cater to?"
              className="w-full p-2 mt-2 border border-gray-300 rounded form-textarea"
              {...register("audience")}
            />
            <textarea
              placeholder="What kind of support or collabrations you are looking for?"
              className="w-full p-2 mt-2 border border-gray-300 rounded form-textarea"
              {...register("support")}
            />
            <textarea
              placeholder="How can we help you in your plan?"
              className="w-full p-2 mt-2 border border-gray-300 rounded form-textarea"
              {...register("help")}
            />

            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                {...register("agreement", { required: true })}
              />{" "}
              I accept the terms and conditions.
            </label>
            {errors.agreement && (
              <p className="text-red-500">You must accept the terms</p>
            )}

{loading && <p className="text-blue-500">Submitting...</p>}
{error && <p className="text-red-500">{error}</p>}


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Submit
          </button>

          {error && (
            <p className="mt-2 text-xs text-center text-red-500">{error}</p>
          )}
        </form>
      )}
    </>
  );
};

export default StartupForm;
