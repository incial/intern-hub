const tracksMap = {
  rsh: {
    name: "Research",
    code: "RSHR",
  },
  pdt: {
    name: "Process Development/Consultancy",
    code: "PRDV",
  },
  ptg: {
    name: "Prototyping",
    code: "PROT",
  },
};

const cardColors = [
  {
    primary: "#fee4cb",
    secondary: "#ff942e",
  },
  {
    primary: "#e9e7fd",
    secondary: "#4f3ff0",
  },
  {
    primary: "#dbf6fd",
    secondary: "#096c86",
  },
  {
    primary: "#ffd3e2",
    secondary: "#df3670",
  },
  {
    primary: "#c8f7dc",
    secondary: "#34c471",
  },
  {
    primary: "#d5deff",
    secondary: "#4067f9",
  },
];

// HTML elements
const trackNameElement = document.getElementById("fb-track-name");
const projectCountElement = document.getElementById("fb-project-count");
const mentorCountElement = document.getElementById("fb-mentor-count");
const industryCountElement = document.getElementById("fb-industry-count");
const projectContainer = document.getElementById("fb-project-container");

// get query parameters
var urlParams = new URLSearchParams(window.location.search);

// get track code and name
const trackCode = tracksMap[urlParams.get("t")].code;
const trackName = tracksMap[urlParams.get("t")].name;

// check if track code is valid or query parameter is present ow redirect to home page
if (urlParams.get("t") == null || trackCode == undefined) {
  window.location.href = "https://internhubajce.in";
}

// set track name
trackNameElement.innerText = trackName;

// get track details from firebase
firebase
  .database()
  .ref("intern-hub/tracks/" + trackCode)
  .once("value")
  .then((snapshot) => {
    const data = snapshot.val();

    // set project count
    projectCountElement.innerText = data.project_count;
    mentorCountElement.innerText = data.mentor_count;
    industryCountElement.innerText = data.industry_count;
    
    let buckets = "";
    let colorIndex = 0;
    for (const [key, bucket] of Object.entries(data.buckets)) {
      buckets += `<div class="project-box-wrapper" id="bucket_${key}">
      <div class="project-box" style="background-color: ${cardColors[colorIndex].primary}">
        <div class="project-box-header"></div>
        <div class="project-box-content-header">
          <p class="box-content-header">${bucket.bucket_name}</p>
          <div class="creds">
            <p class="box-content-subheader">${bucket.faculty_name}</p>
            <p class="box-content-subheader">${bucket.dept_name}</p>
          </div>
          <p class="box-content-subheader desc">${bucket.bucket_desc}</p>
        </div>
        <div class="project-box-footer">
          <a href="${bucket.form_link}" target="_blank" class="apply-button-link">
          <div class="days-left" style="color: ${cardColors[colorIndex].secondary}">Apply</div>
          </a>
        </div>
      </div>
    </div>`;
      colorIndex = (colorIndex + 1) % cardColors.length;
    }
    projectContainer.innerHTML = buckets;
  });
