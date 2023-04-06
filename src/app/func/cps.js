import def_vals from "./def_vals";
import genScript from "./genScript";
import vals from "./def_vals";

function startInterval() {
    // Check if the page has been refreshed
    const storedTimestamp = localStorage.getItem('intervalTimestamp')
    const currentTimestamp = new Date().getTime()
    if (storedTimestamp && currentTimestamp - storedTimestamp > 1000) {
        // If the stored timestamp is more than 1 second old, clear the stored interval
        clearInterval(localStorage.getItem('intervalCPS'))
        localStorage.removeItem('intervalCPS')
    }

    // Start the interval if it's not already running
    if (!localStorage.getItem('intervalCPS')) {
        const intervalCPS = setInterval(function () {
            if (def_vals.clickPower > 1) {
                def_vals.i = def_vals.i + Math.floor(vals.clickPower / 2)
                genScript.updateCounter()
            }

        }, 1000)

        // Store the interval ID and timestamp in local storage
        localStorage.setItem('intervalCPS', intervalCPS)
        localStorage.setItem('intervalTimestamp', currentTimestamp)
    }
}

// Stop the interval when the window is unloaded (e.g. refresh or close)
window.onbeforeunload = function () {
    clearInterval(localStorage.getItem('intervalCPS'))
    localStorage.removeItem('intervalCPS')
    localStorage.removeItem('intervalTimestamp')
}

export default startInterval