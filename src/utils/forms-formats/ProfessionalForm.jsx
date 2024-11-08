export const professionalTemplate = (data) => {
    return `
      Title: ${data.title || "Not specified"}
      First Name: ${data.firstname}
      Last Name: ${data.lastname}
      Country: ${data.country}
      Email: ${data.email}
      Phone: ${data.phone}
      Address: ${data.address}
      City: ${data.city}
      State/Province: ${data.state}
      Postal Code: ${data.postal}
      Age (18 or older): ${data.age === "yes" ? "Yes" : "No"}
      Criminal Record: ${data.crime === "yes" ? "Yes" : "No"}
      Terminated from Job: ${data.terminated === "yes" ? "Yes" : "No"}
      How did you hear about us: ${data.hearAbout || "Not specified"}
      
      Academic Qualifications:
      ${data.educations && data.educations.length > 0
          ? data.educations.map((edu) => `
          Degree: ${edu.degree || "Not specified"}
          Institute's Name: ${edu.institute || "Not specified"}
          Year: ${edu.year || "Not specified"}
        `).join("\n")
          : "No qualifications provided."}

      Work Experience:
      ${data.experiences && data.experiences.length > 0
          ? data.experiences.map((exp) => `
          Job Title: ${exp.title || "Not specified"}
          Company Name: ${exp.company || "Not specified"}
          Duration: ${exp.duration || "Not specified"}
        `).join("\n")
          : "No work experience provided."}

      Interest: ${data.interest || "Not specified"}
      Start Date: ${data.startDate || "Not specified"}
      End Date: ${data.endDate || "Not specified"}
      Agreement: ${data.agreement ? "Yes" : "No"}
      Comments: ${data.comments || "Not specified"}
    `;
};
