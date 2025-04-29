
const content = {
    en: {
        main: "<h2>Welcome to EmpowerED Horizons</h2><p>We are a PAN India charitable trust working to educate, heal, empower, and protect communities.</p>"
    },
    hi: {
        main: "<h2>एम्पावरईडी होराइजन्स में आपका स्वागत है</h2><p>हम एक अखिल भारतीय चैरिटेबल ट्रस्ट हैं जो शिक्षा, स्वास्थ्य, सशक्तिकरण और सुरक्षा पर कार्य कर रहे हैं।</p>"
    }
};

function setLanguage(lang) {
    document.getElementById("content").innerHTML = content[lang].main;
}

window.onload = () => setLanguage('en');
