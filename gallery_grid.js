// gallery-grid.js

(function() {
  // --- Configuration ---
  const columnMinWidth = 250;  // minimum width per column in CSS‑px
  const maxColumns     = 4;    // maximum number of columns
  const mobileBP       = 600;  // viewport width (CSS‑px) below which we force 2 columns

  /**
   * Calculate and apply the correct number of columns
   * for a single .gallery-grid element.
   *
   * @param {HTMLElement} grid
   */
  function updateOneGrid(grid) {
    // How wide is this grid, in CSS pixels?
    const w = grid.clientWidth;

    // How many columns can we fit at our min width?
    let cols = Math.floor(w / columnMinWidth);

    // Clamp between 1 and maxColumns
    cols = Math.max(1, Math.min(cols, maxColumns));

    // If we're on a narrow (mobile) viewport, force 2 columns
    if (window.innerWidth < mobileBP) {
      cols = 2;
    }

    // Apply the CSS grid-template-columns rule
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  }

  /**
   * Find every .gallery-grid on the page and update it.
   */
  function updateAllGrids() {
    const all = document.querySelectorAll('.gallery-grid');
    all.forEach(updateOneGrid);
  }

  // Debounced resize handling
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateAllGrids, 100);
  });

  // Initial setup on DOMContentLoaded
  window.addEventListener('DOMContentLoaded', updateAllGrids);
})();
