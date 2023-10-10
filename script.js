document.getElementById('contentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting
  
    // Get the values from the input fields
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
  
    // Create a new content item
    var contentItem = document.createElement('div');
    contentItem.innerHTML = '<h2>' + title + '</h2><p>' + content + '</p>';
  
    // Append the content item to the content list
    document.getElementById('contentList').appendChild(contentItem);
  
    // Clear the input fields
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
  });