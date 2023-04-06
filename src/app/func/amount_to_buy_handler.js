import $ from 'jquery';
import def_vals from "./def_vals";

function click_listener() {
    $(document).keydown(function (event) {
        if (event.ctrlKey) {
            def_vals.amount_to_add = 10
            console.log(event.ctrlKey)
            if (event.altKey) {
                def_vals.amount_to_add = 100
                console.log(event.ctrlKey)

            }
        }
    }).keyup(function (event) {
        def_vals.amount_to_add = 1
        console.log(event.ctrlKey)
    });
}


export default click_listener