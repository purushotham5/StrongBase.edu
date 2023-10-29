document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const searchInput = document
      .getElementById("searchInput")
      .value.toLowerCase();

    // Define a mapping of search queries to destination pages
    const courseMapping = {
     'a r rajammal': "A R Rajammal.pdf",
     'aswini enukonda': "Aswini Enukonda.pdf",
     'chandana prasuna': "Athuru Chandana prasuna.pdf",
     'a r rajammal': "A R Rajammal.pdf",
     'a r rajammal': "A R Rajammal.pdf",
     'a r rajammal': "A R Rajammal.pdf",
     'a r rajammal': "A R Rajammal.pdf",
     'a r rajammal': "A R Rajammal.pdf",
     'a r rajammal': "A R Rajammal.pdf",
     'a r rajammal': "A R Rajammal.pdf",

      fed019001: "A R Rajammal.pdf",
      fed019002: "Aswini Enukonda.pdf",
     

      // Add more mappings as needed
    };

    // Check if the search query has a corresponding destination page
    if (courseMapping.hasOwnProperty(searchInput)) {
      const destinationPage = courseMapping[searchInput];
      window.location.href = destinationPage; // Redirect to the destination page
    } else {
      alert("Course not found"); // Show an alert if the course is not found
    }
  });
