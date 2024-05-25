const tracks = {
  rsh: "RSHR",
  pdt: "PRDV",
  ptg: "PROT",
};

const cardColors = [
  {
    primary: "#fee4cb",
    secondary: "#fff4ea",
  },
  {
    primary: "#e9e7fd",
    secondary: "#f6f5fe",
  },
  {
    primary: "#dbf6fd",
    secondary: "#f6f5fe",
  },
  {
    primary: "#ffd3e2",
    secondary: "#f1fbfe",
  },
  {
    primary: "#c8f7dc",
    secondary: "#e9fcf1",
  },
  {
    primary: "#d5deff",
    secondary: "#eef2ff",
  },
];

const projectContainer = document.getElementById("fb-project-container");

// get query parameters
var urlParams = new URLSearchParams(window.location.search);

// get track
const track = tracks[urlParams.get("t")];

if (urlParams.get("t") == null || track == undefined) {
  window.location.href = "https://internhubajce.in";
}

firebase
  .database()
  .ref("intern-hub/tracks/" + track)
  .once("value")
  .then((snapshot) => {
    const data = snapshot.val();

    let buckets = "";
    for (const [key, bucket] of Object.entries(data.buckets)) {
      buckets += `<div class="project-box-wrapper" id="bucket_${key}">
      <div class="project-box" style="background-color: #fee4cb">
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
            <div class="days-left" style="color: #ff942e">Apply</div>
          </a>
        </div>
      </div>
    </div>`;
    }
    projectContainer.innerHTML = buckets;
  });
