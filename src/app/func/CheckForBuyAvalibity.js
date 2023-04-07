import vals from "./def_vals";

function startChecking(code) {
    let codeToRun = ""
    console.log(code)
    codeToRun.concat(code + ";\n")
    console.log(codeToRun)

    const storedTime = localStorage.getItem('intervalTime');
    const currentTime = new Date().getTime();

    if (storedTime && currentTime - storedTime > 1000) {
        clearInterval(localStorage.getItem('intervalCheckForAv'));
        localStorage.removeItem('intervalCheckForAv');
    }

    if (!localStorage.getItem('intervalCheckForAv')) {
        const intervalID = setInterval(function() {
            //To this goes code
        }, 1000);

        localStorage.setItem('intervalCheckForAv', intervalID);
        localStorage.setItem('intervalTime', currentTime);
    }
}

window.onbeforeunload = function() {
    clearInterval(localStorage.getItem('intervalCheckForAv'));
    localStorage.removeItem('intervalID');
    localStorage.removeItem('intervalTime');
}

export default startChecking
