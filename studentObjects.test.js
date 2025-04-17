const fs = require('fs');
const path = require('path');

describe('Student Objects Structure Tests', () => {
  const requiredKeys = ['name', 'status', 'powerlevel'];

  test('Student objects should contain all required keys', () => {
    // This assumes the file exists and follows the structure
    // you described with a bobby object
    const filePath = path.resolve(__dirname, 'studentObject.js');

    // Verify file exists
    expect(fs.existsSync(filePath)).toBe(true);

    // Load the student's code module
    const studentModule = require('./studentObject.js');

    // Validate object structure
    requiredKeys.forEach(key => {
      expect(studentModule).toHaveProperty(key);
    });

    // Verify values aren't null or undefined
    requiredKeys.forEach(key => {
      expect(studentModule[key]).not.toBe(undefined);
      expect(studentModule[key]).not.toBe(null);
    });
  });
});