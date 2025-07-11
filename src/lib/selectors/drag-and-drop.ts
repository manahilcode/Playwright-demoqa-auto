export const selectors = {
  elementsCard:
    "//div[@class='card mt-4 top-card']//div[@class='card-body']/h5[text()='Elements']",
  menu: '//div[@class="element-group"][5]',
  draganddrop: '//span[text()="Droppable"]',
  drag: '//div[@id="draggable"and text()="Drag me"]',
  drop: '(//div[@id="droppable"])[1]',
};
