// utils/forms-formats/StartupFormat.js

export const startupTemplate = (data) => {
    return `
      Startup Name: ${data.startup_name}
      First Name: ${data.firstname}
      Last Name: ${data.lastname}
      Country: ${data.country}
      Email: ${data.email}
      Phone: ${data.phone}
      Address: ${data.address}
      City: ${data.city}
      State/Province: ${data.state}
      Postal Code: ${data.postal}
      How did you hear about us: ${data.hearAbout || "Not specified"}
      Initiation Year: ${data.initiation_year || data.year || "Not specified"}
      Description: ${data.description || "Not specified"}
      Team Size: ${data.team_count || 0} 
      Looking for Funding: ${data.funding === "yes" ? "Yes" : "No"}
      Problem to Solve: ${data.problem || "Not specified"}
      Target Audience: ${data.audience || "Not specified"}
      Support Needed: ${data.support || "Not specified"}
      Help Needed: ${data.help || "Not specified"}
    `;
  };
  