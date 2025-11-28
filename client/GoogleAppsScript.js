function doGet(e) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName('DevSkills-Certificates');
  
  // If not found, try the first sheet
  if (!sheet) {
    sheet = spreadsheet.getSheets()[0];
  }
  
  if (!sheet) {
    const allSheets = spreadsheet.getSheets().map(s => s.getName());
    return ContentService.createTextOutput(JSON.stringify({
      verified: false,
      message: 'Sheet not found',
      availableSheets: allSheets
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  const srno = e.parameter.srno;
  const dob = e.parameter.dob;
  
  if (!srno || !dob) {
    return ContentService.createTextOutput(JSON.stringify({
      verified: false,
      message: 'Missing parameters'
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  // Get all data from the sheet
  const data = sheet.getDataRange().getValues();
  
  // Skip header row and search for matching certificate
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const sheetSrNo = row[0] ? row[0].toString().trim().toUpperCase() : '';
    const sheetDOB = row[2] ? formatDate(row[2]) : '';
    
    // Debug logging (will appear in Apps Script logs)
    Logger.log('Comparing - Sheet SrNo: ' + sheetSrNo + ' | Input SrNo: ' + srno.toUpperCase());
    Logger.log('Comparing - Sheet DOB: ' + sheetDOB + ' | Input DOB: ' + dob);
    
    // Compare SrNo and DOB
    if (sheetSrNo === srno.toUpperCase() && sheetDOB === dob) {
      return ContentService.createTextOutput(JSON.stringify({
        verified: true,
        name: row[1] || '',
        position: row[3] || '',
        status: row[4] || 'Active',
        issueDate: sheetDOB
      })).setMimeType(ContentService.MimeType.JSON);
    }
  }
  
  // No match found - return debug info
  return ContentService.createTextOutput(JSON.stringify({
    verified: false,
    message: 'Certificate not found or DOB mismatch',
    debug: {
      receivedSrNo: srno,
      receivedDOB: dob,
      totalRows: data.length - 1
    }
  })).setMimeType(ContentService.MimeType.JSON);
}

// Helper function to format date as MM/DD/YYYY
function formatDate(dateValue) {
  if (!dateValue) return '';
  
  let date;
  if (dateValue instanceof Date) {
    date = dateValue;
  } else if (typeof dateValue === 'string') {
    date = new Date(dateValue);
  } else {
    return '';
  }
  
  if (isNaN(date.getTime())) return '';
  
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  
  return `${month}/${day}/${year}`;
}   
