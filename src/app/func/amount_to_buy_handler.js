import $ from 'jquery';
import def_vals from "./def_vals";
import genScript from "./genScript";

export default function click_listener() {
    $(document).keydown(function (event) {
        if (event.ctrlKey) {
            def_vals.amount_to_add = 10
            document.getElementById('howMuchToAdd').innerText = def_vals.amount_to_add
        }

        if (event.ctrlKey && event.altKey) {
            def_vals.amount_to_add = 100
            document.getElementById('howMuchToAdd').innerText = def_vals.amount_to_add
        }

        genScript.updateCounter()
    }).keyup(function (event) {
        if (!event.ctrlKey && event.altKey) {
            def_vals.amount_to_add = 10
            document.getElementById('howMuchToAdd').innerText = def_vals.amount_to_add
        }
        def_vals.amount_to_add = 1
        document.getElementById('howMuchToAdd').innerText = def_vals.amount_to_add
        genScript.updateCounter()
    });
}
