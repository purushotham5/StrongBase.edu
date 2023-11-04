document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const searchInput = document
      .getElementById("searchInput")
      .value.toLowerCase();

    // Define a mapping of search queries to destination pages
    const courseMapping = {


      // front-end certificates

      "a r rajammal": "A R Rajammal.pdf",
      "aswini enukonda": "Aswini Enukonda.pdf",
      "athuru chandana prasuna": "Athuru Chandana prasuna.pdf",
      "avvaru guru saranya": "Avvaru Guru Saranya.pdf",
      "bindhu duggineni": "DUGGINENI BINDHU.pdf",
      "arkonam chaitanya": "Arkonam  chaitanya.pdf",
      "chandu": "P.chandu.pdf",
      "tejaswini ": "C Tejaswini.pdf",
      "dasu sobhana": "DASU SOBHANA.pdf",
      "deepika": "A.V.Deepika.pdf",
      "boosireddy deesritha ": "Boosireddy Deesritha.pdf",
      "kondapuram devi sree": "KONDAPURAM DEVI SREE.pdf",
      "eswari dimple": "R Eswari Dimple.pdf",
      "budigi divya": "Budigi Divya.pdf",
      "muni bala ganesh ": "P Muni bala ganesh.pdf",
      "geethalakshmi": "P.chandu.pdfk.Geethalakshmi.pdf",
      "chandu": "P.chandu.pdf",
      "chandu": "P.chandu.pdf",
      "chandu": "P.chandu.pdf",
      "chandu": "P.chandu.pdf",
      "chandu": "P.chandu.pdf",
      "chandu": "P.chandu.pdf",
      "chandu": "P.chandu.pdf",
      "chandu": "P.chandu.pdf",
      "chandu": "P.chandu.pdf",
      "chandu": "P.chandu.pdf",
      "chandu": "P.chandu.pdf",
      "chandu": "P.chandu.pdf",
      "chandu": "P.chandu.pdf",
      "chandu": "P.chandu.pdf",
      "chandu": "P.chandu.pdf",

      

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
