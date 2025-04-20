import { SelectablePage } from '../support/SelectablePage';

const selectable = new SelectablePage();

describe('Selectable Grid Test', () => {
  it('should select specific grid items and validate highlighted items', () => {

    selectable.visit(); // Open link

    selectable.clickGridTab(); // Click “Grid”

    ['Two', 'Four', 'Six', 'Eight'].forEach(item => { // Click “Two”, “Four”, “Six”, “Eight”
      selectable.clickGridItem(item);
    });

    ['Two', 'Four', 'Six', 'Eight'].forEach(item => { // Validate selected items are highlighted
      selectable.isHighlighted(item);
    });


    ['One', 'Three', 'Five', 'Seven', 'Nine'].forEach(item => { // Validate other items are not highlighted
      selectable.isNotHighlighted(item);
    });
  });
});
