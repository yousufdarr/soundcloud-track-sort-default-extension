document.addEventListener('DOMContentLoaded', function() {
  const sortOptionSelect = document.getElementById('sortOption');
  const saveBtn = document.getElementById('saveBtn');
  const status = document.getElementById('status');

  // Load saved preference
  chrome.storage.local.get(['defaultSortOption'], function(result) {
    if (result.defaultSortOption) {
      sortOptionSelect.value = result.defaultSortOption;
    }
  });

  // Save preference when button is clicked
  saveBtn.addEventListener('click', function() {
    const selectedOption = sortOptionSelect.value;
    
    chrome.storage.local.set({ defaultSortOption: selectedOption }, function() {
      // Show success message
      status.textContent = 'Preference saved!';
      status.className = 'status success';
      
      // Hide message after 2 seconds
      setTimeout(function() {
        status.className = 'status';
      }, 2000);
    });
  });
});

