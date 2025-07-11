export const selectors = {
  elementsCard:
    "//div[@class='card mt-4 top-card']//div[@class='card-body']/h5[text()='Elements']",
  menu: '//div[@class="element-group"][3]',
  nestedframe: "//span[text()='Nested Frames']",
  parentframe: '//iframe[@id="frame1"]',
  childframe: 'iframe[srcdoc*="Child Iframe"]',
};
