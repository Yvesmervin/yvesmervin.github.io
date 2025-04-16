function updateGalleryGridColumns() {
    const grid = document.querySelector('.gallery-grid');
    if (!grid) return; // Exit if the element is not found

    const containerWidth = grid.clientWidth;
    const columnMinWidth = 250;
    const maxColumns = 4;

    // Calculate how many columns fit based on min width
    const calculatedColumns = Math.floor(containerWidth / columnMinWidth);
    let finalColumnCount = Math.max(1, Math.min(calculatedColumns, maxColumns));

    // MOBILE OVERRIDE: Force 2 columns on narrow viewports
    const mobileBreakpoint = 600; // in CSS pixels
    if (window.innerWidth < mobileBreakpoint) {
      finalColumnCount = 2;
    }

    // Apply to the grid
    grid.style.gridTemplateColumns = `repeat(${finalColumnCount}, 1fr)`;
  }

  // Debounce to avoid rapid firing on resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateGalleryGridColumns, 100);
  });

  // Initialize on DOM content loaded
  window.addEventListener('DOMContentLoaded', updateGalleryGridColumns);
