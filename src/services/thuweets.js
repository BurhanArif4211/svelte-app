// src/services/thuweets.js
let THUWEETS_BASE_PATH = '/data/thuweets/';

// Get all available months
export async function getThuweetMonths() {
  try {
    
    return [
      { filename: '12-2025.json', display: 'December 2025' },
      { filename: '8-2025.json', display: 'August 2025' },

    ];
  } catch (error) {
    console.error('Error fetching thuweet months:', error);
    return [];
  }
}

// Get thuweets for a specific month
export async function getThuweetsByMonth(monthFile) {
  try {
    // In a real implementation, this would fetch from the specified file
    const response = await fetch(`${THUWEETS_BASE_PATH}/${monthFile}`);
    const data = await response.json();
    return data.thuweets || [];
  } catch (error) {
    console.error(`Error fetching thuweets for ${monthFile}:`, error);
    return [];
  }
}

// Get all thuweets (for the latest thuweets component)
export async function getAllThuweets(limit = 5) {
  try {
    const months = await getThuweetMonths();
    let allThuweets = [];
    
    // Get thuweets from the most recent months first
    for (const month of months) {
      const monthThuweets = await getThuweetsByMonth(month.filename);
      allThuweets = [...allThuweets, ...monthThuweets];
      
      // Stop if we've reached the limit
      if (allThuweets.length >= limit) {
        break;
      }
    }
    
    // Sort by date (newest first) and apply limit
    return allThuweets
      // .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching all thuweets:', error);
    return [];
  }
}

// For future API integration
export function setApiBaseUrl(baseUrl) {
  // This will be used when you switch to API calls
  THUWEETS_BASE_PATH = baseUrl;
}
