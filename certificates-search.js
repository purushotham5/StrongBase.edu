document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const searchInput = document
      .getElementById("searchInput")
      .value.toLowerCase();

    // Define a mapping of search queries to destination pages
    const courseMapping = {
      "purushotham kandheri": "Purushotham-Kandheri.pdf",
      py22501: "Purushotham-Kandheri.pdf",

      // Add more mappings as needed
    };

    // Check if the search query has a corresponding destination page
    if (courseMapping.hasOwnProperty(searchInput)) {
      const destinationPage = courseMapping[searchInput];
      window.location.href = destinationPage; // Redirect to the destination page
    } else {
      alert("Student not found"); // Show an alert if the course is not found
    }
  });
