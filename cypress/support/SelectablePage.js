export class SelectablePage {
  visit() {
    cy.visit('https://demoqa.com/selectable');
  }

  clickGridTab() {
    cy.get('#demo-tab-grid').click();
  }

  clickGridItem(itemText) {
    cy.contains('.list-group-item', itemText).click();
  }

  getGridItem(itemText) {
    return cy.contains('.list-group-item', itemText);
  }

  isHighlighted(itemText) {
    return this.getGridItem(itemText).should('have.class', 'active');
  }

  isNotHighlighted(itemText) {
    return this.getGridItem(itemText).should('not.have.class', 'active');
  }
}