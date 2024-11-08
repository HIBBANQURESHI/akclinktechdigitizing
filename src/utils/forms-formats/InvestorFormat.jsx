export const investorTemplate = (data) => {
    return `
      Investor's Name: ${data.investor_name}\n
      Organization: ${data.organization}\n
      Country: ${data.country}\n
      Email: ${data.email}\n
      Phone: ${data.phone}\n
      Address: ${data.address}\n
      City: ${data.city}\n
      State/Province: ${data.state}\n
      Postal Code: ${data.postal}\n
      How did you hear about us?: ${data.hear_about || 'N/A'}\n
      Organizational Website Link: ${data.org_link || 'N/A'}\n
      Team Size: ${data.team_count}\n
      Investment Plan Fit: ${data.plan || 'N/A'}
    `;
  };
  