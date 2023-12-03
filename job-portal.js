const jobs = [
  {
    title: "Software Engineer",
    image: "software-engineer.svg",
    skills: "Skills:Java Android,HTML,CSS,JS",
    details:
      "We are hiring for Freshers Java Net Android Web Developer Qualification B Tech B E M C A Experience 0 4Years Skills Fresher Java Android IOS Developer Javascript Jquery CSS HTML PHP Candidate Profile Candidate should have 1 Strong programming skills 2 Excellent problemsolving skills 3 Excellent communication skills 4 Good to have knowledge in Javascript Jquery CSS HTML PHP etc Contact Mr Vasanth hidden mobile",
    openPositions: "2",
    link: "https://in.jobrapido.com/jobpreview/261754190?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
  },

  {
    title: "Software Engineer",
    image: "software-engineer.svg",  
      skills: "Skills:Java,SQL,Python,HTML,CSS,JS",
    details:
      "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
    openPositions: "3",
    link: "https://www.shine.com/jobs/software-engineer-fresher/covai-industrials-recruitment/12778956?utm_source=linkedin-feed&amp;utm_medium=referral&amp;utm_campaign=linkedin-feed&amp;auto_apply=true",
  },

  {
    title: "Python Developer",
    image: "project-manager.svg",
    details:
      "We are looking for a Python freshers to join our team and help us develop and maintain various software products.Freshers only need to apply Also providing placement assistence after internship period on the basis of performance of work.",
    openPositions: "1",
    link: "https://www.simplyhired.co.in/job/daKacOiPFIA11R3aJhnFZTDpdC4xn4VIeO13so0YAeih8Q8SqRprIQ?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
  },

  {
    title: "Product Manager",
    image: "product-manager.svg",
    details:
      "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
    openPositions: "1",
    link: "#",
  },

  {
    title: "Sales Representative",
    image: "sales-representative.svg",
    details:
      "Responsible for reaching out to potential customers and closing sales deals.",
    openPositions: "4",
    link: "#",
  },

  {
    title: "Marketing Manager",
    image: "marketing-manager.svg",
    details:
      "Responsible for creating and executing marketing strategies to promote a company or product.",
    openPositions: "1",
    link: "#",
  },
  {
    title: "Front-End Developer",
    image: "sales-representative.svg",
    details:
      "Responsible for reaching out to potential customers and closing sales deals.",
    openPositions: "40",
    link: "#",
  },

  {
    title: "Backend Developer",
    image: "marketing-manager.svg",
    details:
      "Responsible for creating and executing marketing strategies to promote a company or product.",
    openPositions: "1",
    link: "#",
  },
];

const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

if (jobs.length == 1) {
  jobsHeading.innerHTML = `${jobs.length} Job`;
} else {
  jobsHeading.innerHTML = `${jobs.length} Jobs`;
}

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = job.image;

      let title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      let skills = document.createElement("div");
      skills.innerHTML = job.skills;
      skills.classList.add("skills");

      let details = document.createElement("div");
      details.innerHTML = job.details;
      details.classList.add("details");

      let detailsBtn = document.createElement("a");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "Apply Now";
      detailsBtn.classList.add("details-btn");

      let openPositions = document.createElement("span");
      openPositions.classList.add("open-positions");

      if (job.openPositions == 1) {
        openPositions.innerHTML = `${job.openPositions} open position`;
      } else {
        openPositions.innerHTML = `${job.openPositions} open positions`;
      }

      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(skills);
      jobCard.appendChild(detailsBtn);
      jobCard.appendChild(openPositions);
      jobsContainer.appendChild(jobCard);
    }
  });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;

  createJobListingCards();
});
