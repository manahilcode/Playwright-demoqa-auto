export const selectors = {
    elementsCard: "//div[@class='card mt-4 top-card']//div[@class='card-body']/h5[text()='Elements']",
    menu:'//div[@class="element-group"][1]',
    webTablesMenu: "//span[text()='Web Tables']",
    addNewRecordButton: '//button[@id="addNewRecordButton"]',
    firstNameInput: '//input[@placeholder="First Name"]',
    lastNameInput: '//input[@placeholder="Last Name"]',
    emailInput: '//input[@placeholder="name@example.com"]',
    ageInput: '//input[@placeholder="Age"]',
    salaryInput: '//input[@placeholder="Salary"]',
    departmentInput: '//input[@placeholder="Department"]',
    submitButton: '//button[@id="submit"]',
    delete: "//div[@id='fixedban']",
    editButtonForJohn: '//div[text()="John"]/following-sibling::div//span[contains(@id, "edit-record")]'
  };
  