export const collaboratorTemplate = (data) => {
    return `
      Organization: ${data.organization}\n
      Focal Person: ${data.focalPerson}\n
      Country: ${data.country}\n
      Email: ${data.email}\n
      Phone: ${data.phone}\n
      Address: ${data.address}\n
      City: ${data.city}\n
      State: ${data.state}\n
      Postal Code: ${data.postal}\n
      Organizational Website Link: ${data.org_link || 'N/A'}\n
      Team Size: ${data.team_count}\n
      How did you hear about us: ${data.hear_about || 'N/A'}\n
      Exploring Operational Domain Collaboration: ${data.collaboration_explore}\n
      Partner On Products/Services: ${data.partner_products}\n
      Reasons for Exploring Collaboration: ${data.exploring || 'N/A'}\n
      Plans for Collaboration: ${data.plans || 'N/A'}
    `;
  };
  