
const muralDiv = document.getElementById("mural");
let currentMural = 0;

function changeMural(title, author, source) {
    let titleElement = document.getElementById("title");
    titleElement.className = "muralTitle";
    titleElement.innerHTML = title;

    let authorElement = document.getElementById("author");
    authorElement.className = "muralAuthor";
    authorElement.innerHTML = `by ${author}.`;

    let iframeElement = document.getElementById("muralIframe");
    iframeElement.src = source;

    window.history.pushState("", "", `#${currentMural}`);
    window.location.hash = currentMural;
}

let muralList = [
    {
        title: "Arctic Freezer",
        author: "Gauthier G",
        source: "https://jeeezzus.github.io/MDT_Three.JS/"
    },
    {
        title: "Solar Oven",
        author: "Yohann C",
        source: "https://yocoss.github.io/SolarOven/"
    },
    {
        title: "Luma Visualizer",
        author: "Claudio O",
        source: "https://claudio9701.github.io/ift-mdt-three/"
    },
    {
        title: "3D Speech-Driven Animation",
        author: "Hugo Da",
        source: "https://hugodmn.github.io/ThreeJsProject/"
    },
    {
        title: "BIOS",
        author: "Thaïs G",
        source: "https://thaisgauthier.github.io/3D-projet/"
    },
    {
        title: "GCode Viewer",
        author: "Marc-Adrien M",
        source: "https://ram6ces.github.io/gcode-viewer/"
    },
    {
        title: "Whistle Babe",
        author: "Mathis T",
        source: "https://matlamenasse.github.io/whistle_babe/"
    },
    {
        title: "Tiny Marsh",
        author: "Noé G",
        source: "https://antoinoe.github.io/threejs/"
    },
    {
        title: "Relaxing Waves",
        author: "Diane B",
        source: "https://dianubv.github.io/RelaxingWaves/"
    },
    {
        title: "Voice Interaction",
        author: "Nathan V",
        source: "https://arcadia24.github.io/voice-interaction-three/"
    },
    {
        title: "HeartBit",
        author: "Marine R",
        source: "https://marinereynaud25.github.io/HeartBit-ThreeJS/"
    },
    {
        title: "Point Cloud Visualisation",
        author: "Etienne P",
        source: "https://etienne248.github.io/TreeJs_Point_Cloud_visualisation/"
    },
    {
        title: "Plant Mural",
        author: "Hugo J",
        source: "https://hugo-jrlnd.github.io/MDT_project/"
    },
    {
        title: "Internet of Plants",
        author: "Matthieu S",
        source: "https://matthieu-sgi.github.io/Internet-of-Plants-threejs/"
    },
    {
        title: "EEG Visualisation",
        author: "Hippolyte B",
        source: "https://hippobo.github.io/3js_eeg_viz/"
    },
    {
        title: "BIOS",
        author: "Claire L",
        source: "https://petitkiwi.github.io/BIOS-3D-Animation/"
    },
    {
        title: "Turbocompressor",
        author: "Augustin B",
        source: "https://petitkiwi.github.io/BIOS-3D-Animation/"
    },
    {
        title: "Candle",
        author: "Gaëtan C",
        source: "https://candle-drab.vercel.app/",
        github: "https://github.com/GaetanCrd/Candle"
    },
    {
        title: "Thoughts in Motion",
        author: "Hugo De",
        source: "https://hdevoille.github.io/ThreeJS_MDT/",
    }
]


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
    changeMural(muralList[currentMural].title, muralList[currentMural].author, muralList[currentMural].source);
    triggerAnimation();
}

let previousButton = document.getElementById("muralPreviousButton");
previousButton.onclick = () => {
    currentMural = (currentMural - 1 + muralList.length) % muralList.length;
    changeMural(muralList[currentMural].title, muralList[currentMural].author, muralList[currentMural].source);
    triggerAnimation();
}


if (window.location.hash) {
    let hash = window.location.hash.substring(1);
    currentMural = parseInt(hash);
}

changeMural(muralList[currentMural].title, muralList[currentMural].author, muralList[currentMural].source);
