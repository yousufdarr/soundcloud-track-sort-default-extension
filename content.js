(function() {
  'use strict';

  let hasApplied = false;

  function applySortOption(sortValue) {
    if (hasApplied) {
      return;
    }

    // Find the sort button
    const sortContainer = document.querySelector('.commentsList__sortSelect');
    if (!sortContainer) {
      return;
    }

    const button = sortContainer.querySelector('button.select__dropdownButton');
    if (!button) {
      return;
    }

    // Click the button to open the dropdown
    button.click();

    // Wait for the dropdown to open, then find and click the link
    setTimeout(() => {
      const link = document.querySelector(`a[data-link-id="${sortValue}"]`);
      if (link) {
        link.click();
        hasApplied = true;
      }
    }, 100);
  }

  function init() {
    if (hasApplied) {
      return;
    }

    chrome.storage.local.get(['defaultSortOption'], function(result) {
      if (result.defaultSortOption) {
        // Wait a bit after page load to ensure SoundCloud's content is ready
        setTimeout(() => {
          applySortOption(result.defaultSortOption);
        }, 1500);
      }
    });
  }

  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

