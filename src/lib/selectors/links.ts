export const selectors = {
 elementsCard:
    "//div[@class='card mt-4 top-card']//div[@class='card-body']/h5[text()='Elements']",
  menu: '//div[@class="element-group"][1]',
  Links: "//span[text()='Links']",
  home: '//a[@id="simpleLink"]',
  hometrf: '//a[@id="dynamicLink"]',
  created: '//a[@id="created"]',
  nocontent: '//a[@id="no-content"]',
  moved: '//a[@id="moved"]',
  badrequest: '//a[@id="bad-request"]',
  unauthorized: '//a[@id="unauthorized"]',
  forbidden: '//a[@id="forbidden"]',
  notFound: '//a[@id="invalid-url"]',
};
