
export const formSelectors = {
  elementsCard: "//div[@class='card mt-4 top-card']//div[@class='card-body']/h5[text()='Elements']",
  formsGroup: '//div[@class="element-group"][2]',
  practiceForm: '//span[text()="Practice Form"]',
  firstName: "//input[@placeholder='First Name']",
  lastName: "//input[@placeholder='Last Name']",
  email: "//input[@placeholder='name@example.com']",
  mobileNumber: '//input[@placeholder="Mobile Number"]',
  dateOfBirth: '//input[@id="dateOfBirthInput"]',
  subjectsInput: "//input[@id='subjectsInput']",
  currentAddress: '//textarea[@id="currentAddress"]',
  selectState: "//div[text()='Select State']",
  uttarPradesh: "//div[text()='Uttar Pradesh']",
  selectCity: "//div[text()='Select City']",
  agraCity: "//div[text()='Agra']",
  genderRadioLabel: 'label[for="gender-radio-1"]',
  sportsCheckboxLabel: 'label[for="hobbies-checkbox-1"]',
  uploadPicture: '//input[@id="uploadPicture"]',
  submitt:'//button[@id="submit"]',
};
