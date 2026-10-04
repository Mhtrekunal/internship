const internships = [
    {
        title: "Python Django Developer Intern",
        company: "Tech Solutions",
        domain: "Python",
        location: "Remote",
        description: "Work on backend development using Python and Django.",
        link: "#"
    },

    {
        title: "Frontend Web Developer Intern",
        company: "Web Creators",
        domain: "Web Development",
        location: "Remote",
        description: "Build responsive websites using HTML, CSS and JavaScript.",
        link: "#"
    },

    {
        title: "C++ Developer Intern",
        company: "Code Labs",
        domain: "C++",
        location: "Mumbai",
        description: "Practice C++ programming and problem solving.",
        link: "#"
    },

    {
        title: "Java Developer Intern",
        company: "Software Hub",
        domain: "Java",
        location: "Pune",
        description: "Learn Java application development in a team.",
        link: "#"
    },

    {
        title: "Data Science Intern",
        company: "Data Works",
        domain: "Data Science",
        location: "Remote",
        description: "Work with Python, data analysis and machine learning.",
        link: "#"
    },

    {
        title: "Python Web Developer Intern",
        company: "Startup Studio",
        domain: "Python",
        location: "Remote",
        description: "Create web applications using Python.",
        link: "#"
    }
];

const searchInput = document.getElementById("search");
const domainSelect = document.getElementById("domain");
const internshipList = document.getElementById("internship-list");
const emptyState = document.getElementById("empty-state");
const errorState = document.getElementById("error-state");

function createCard(internship) {

    const card = document.createElement("article");

    card.className = "internship-card";

    card.innerHTML = `
        <span class="domain">${internship.domain}</span>

        <h3>${internship.title}</h3>

        <p>
            <strong>Company:</strong>
            ${internship.company}
        </p>

        <p>
            <strong>Location:</strong>
            ${internship.location}
        </p>

        <p>${internship.description}</p>

        <a class="view-button" href="${internship.link}">
            View Internship
        </a>
    `;

    return card;
}

function displayInternships(list) {

    internshipList.innerHTML = "";

    if (list.length === 0) {
        emptyState.hidden = false;
        return;
    }

    emptyState.hidden = true;

    list.forEach(function(internship) {

        const card = createCard(internship);

        internshipList.appendChild(card);

    });
}

function filterInternships() {

    try {

        const searchText =
            searchInput.value.toLowerCase().trim();

        const selectedDomain =
            domainSelect.value;

        const filtered = internships.filter(function(internship) {

            const matchesSearch =
                internship.title.toLowerCase().includes(searchText) ||
                internship.company.toLowerCase().includes(searchText) ||
                internship.domain.toLowerCase().includes(searchText);

            const matchesDomain =
                selectedDomain === "all" ||
                internship.domain === selectedDomain;

            return matchesSearch && matchesDomain;
        });

        errorState.hidden = true;

        displayInternships(filtered);

    } catch (error) {

        emptyState.hidden = true;

        errorState.hidden = false;

        console.error(error);
    }
}

searchInput.addEventListener("input", filterInternships);

domainSelect.addEventListener("change", filterInternships);

displayInternships(internships);