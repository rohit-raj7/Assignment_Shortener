// Helper functions
// Date formatting helper
export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Validate date format (MM/DD/YYYY)
export const isValidDate = (dateString) => {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!regex.test(dateString)) return false;
  const dateParts = dateString.split('/');
  const date = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
  return date instanceof Date && !isNaN(date);
};

// Validate certificate serial number
export const isValidSerialNumber = (serialNumber) => {
  return serialNumber && serialNumber.trim().length > 0;
};
