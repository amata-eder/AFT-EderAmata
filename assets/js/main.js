/**
 * Author: Amata Eder
 * Start of the Dashboard application
 *
 * The application itself - handles the whole business logic
 * @type {Dashboard}
 * Main.js
 */

let dashboard = new Admin();
$(document).ready(function(){
    dashboard.init();

    /**
     * by clicking on the Button Dashboard aktualisieren,
     * appointments created via the console are also counted and the dashboard updated
     */
    $("#makenewDashboard").click(function() {
        dashboard.makenewDashboard();
    });

});

/**
 * function needed for the dialog pop up fenster creating new appointments
 */
function abrete() {
    $("#dialog").dialog();
}

/**
 * function needed for deleting a table row (means an appointment)
 * @param id
 */
function deletetr(id){
    //console.log(id);
    dashboard.deleteAppointment(id);
}