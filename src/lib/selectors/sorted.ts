export const selectors = {
  elementsCard:
    "//div[@class='card mt-4 top-card']//div[@class='card-body']/h5[text()='Elements']",
  menu: '//div[@class="element-group"][5]',
  sort: '//span[text()="Sortable"]',
  sortone:
    '(//div[@class="list-group-item list-group-item-action" and text()="One"])[1]',
  sorttwo:
    '(//div[@class="list-group-item list-group-item-action" and text()="Two"])[1]',
  sortthree:
    '(//div[@class="list-group-item list-group-item-action" and text()="Three"])[1]',
  sortfour:
    '(//div[@class="list-group-item list-group-item-action" and text()="Four"])[1]',
  sortfive:
    '(//div[@class="list-group-item list-group-item-action" and text()="Five"])[1]',
  sortsix:
    '(//div[@class="list-group-item list-group-item-action" and text()="Six"])[1]',
};
