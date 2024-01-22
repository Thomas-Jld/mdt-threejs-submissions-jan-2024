
const muralDiv = document.getElementById("mural");

const muralList = [
    {
        title: "Aquapony",
        author: "Violette A",
        source: "https://violetteanicet.github.io/threejs_aquapony/",
    },
    {
        title: "Turbocompressor",
        author: "Augustin B",
        source: "https://augus02.github.io/Portfolio_3D/"
    },
    {
        title: "EEG Visualisation",
        author: "Hippolyte B",
        source: "https://hippobo.github.io/3js_eeg_viz/"
    },
    {
        title: "Relaxing Waves",
        author: "Diane B",
        source: "https://dianubv.github.io/RelaxingWaves/"
    },
    {
        title: "Candle",
        author: "Gaëtan C",
        source: "https://candle-drab.vercel.app/",
        github: "https://github.com/GaetanCrd/Candle"
    },
    {
        title: "Solar Oven",
        author: "Yohann C",
        source: "https://yocoss.github.io/SolarOven/"
    },
    {
        title: "3D Speech-Driven Animation",
        author: "Hugo Da",
        source: "https://hugodmn.github.io/ThreeJsProject/"
    },
    {
        title: "Thoughts in Motion",
        author: "Hugo De",
        source: "https://hdevoille.github.io/ThreeJS_MDT/",
    },
    {
        title: "Art Life",
        author: "Paul E",
        source: "https://paul-even.github.io/threejs_class/"
    },
    {
        title: "BIOS",
        author: "Thaïs G",
        source: "https://thaisgauthier.github.io/3D-projet/"
    },
    {
        title: "Arctic Freezer",
        author: "Gauthier G",
        source: "https://jeeezzus.github.io/MDT_Three.JS/"
    },
    {
        title: "Tiny Marsh",
        author: "Noé G",
        source: "https://antoinoe.github.io/threejs/"
    },
    {
        title: "Plant Mural",
        author: "Hugo J",
        source: "https://hugo-jrlnd.github.io/MDT_project/"
    },
    {
        title: "Drone Display",
        author: "Nicolas L",
        source: "https://nleboucher.github.io/DroneDiplay/",
    },
    {
        title: "BIOS",
        author: "Claire L",
        source: "https://petitkiwi.github.io/BIOS-3D-Animation/"
    },
    {
        title: "Bioreactor",
        author: "Tom L",
        source: "https://tooww.github.io/threejs-bioreactor/"
    },
    {
        title: "Dancing",
        author: "Cyprien M",
        source: "https://cyprienmarque.github.io/mdt_3Dproject/"
    },
    {
        title: "GCode Viewer",
        author: "Marc-Adrien M",
        source: "https://ram6ces.github.io/gcode-viewer/"
    },
    {
        title: "Luma Visualizer",
        author: "Claudio O",
        source: "https://claudio9701.github.io/ift-mdt-three/"
    },
    {
        title: "Point Cloud Visualisation",
        author: "Etienne P",
        source: "https://etienne248.github.io/TreeJs_Point_Cloud_visualisation/"
    },
    {
        title: "3D Printing",
        author: "Tristan R",
        source: "https://titou0606.github.io/Threejs-3D-printing/"
    },
    {
        title: "HeartBit",
        author: "Marine R",
        source: "https://marinereynaud25.github.io/HeartBit-ThreeJS/"
    },
    {
        title: "Internet of Plants",
        author: "Matthieu S",
        source: "https://matthieu-sgi.github.io/Internet-of-Plants-threejs/"
    },
    {
        title: "Personal Portfolio",
        author: "Nicolas S",
        source: "https://stasnicolas.com/",
        github: "https://github.com/COLVERTYETY/portfolio",
    },
    {
        title: "Whistle Babe",
        author: "Mathis T",
        source: "https://matlamenasse.github.io/whistle_babe/"
    },
    {
        title: "Voice Interaction",
        author: "Nathan V",
        source: "https://arcadia24.github.io/voice-interaction-three/"
    },
]

let currentMural = Math.floor(Math.random() * muralList.length);

if (window.location.hash) {
    let hash = window.location.hash.substring(1);
    currentMural = parseInt(hash);
}

console.log(currentMural);

function changeMural(title, author, source, hash) {
    let titleElement = document.getElementById("title");
    titleElement.className = "muralTitle";
    titleElement.innerHTML = title;

    let authorElement = document.getElementById("author");
    authorElement.className = "muralAuthor";
    authorElement.innerHTML = `by ${author}.`;

    let iframeElement = document.getElementById("muralIframe");
    iframeElement.src = source;

    window.history.pushState("", "", `#${hash}`);
    window.location.hash = hash;
}




let viewCode = document.getElementById("muralVisitButton");
viewCode.onclick = () => {
    if (muralList[currentMural].github) {
        window.open(muralList[currentMural].github);
        return;
    }
    let link = document.getElementById('muralIframe').src;
    let username = link.split('.')[0].split('//')[1];
    let repo = link.split('/').slice(-2, -1)[0]
    let url = `https://github.com/${username}/${repo}`;
    window.open(url)
}

let iframeDiv = document.getElementById("iframeDiv");
function triggerAnimation() {
    // remove iframeAnim class
    iframeDiv.classList.remove("iframeAnim");
    // trigger reflow
    void iframeDiv.offsetWidth;
    // add iframeAnim class
    iframeDiv.classList.add("iframeAnim");
}

let nextButton = document.getElementById("muralNextButton");
nextButton.onclick = () => {
    currentMural = (currentMural + 1) % muralList.length;
    changeMural(muralList[currentMural].title, muralList[currentMural].author, muralList[currentMural].source, currentMural);
    triggerAnimation();
}

let previousButton = document.getElementById("muralPreviousButton");
previousButton.onclick = () => {
    currentMural = (currentMural - 1 + muralList.length) % muralList.length;
    changeMural(muralList[currentMural].title, muralList[currentMural].author, muralList[currentMural].source, currentMural);
    triggerAnimation();
}



changeMural(muralList[currentMural].title, muralList[currentMural].author, muralList[currentMural].source, currentMural);
