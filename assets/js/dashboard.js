/**
 * Author: Amata Eder
 * the whole dashboard application
 * filled with appointments loaded from the json file
 *
 * Dashboard.js
 */
class Dashboard{
    /**
     * Kommis ned vagessn
     * Initialisierungslogik hier
     */
    //protected property (Admin which extends from Dashboard can also use appointmentList)
   //AppointmentList holds all the appointments
    _appointmentList;

    /**
     * Creates an instance of Dashboard
     * @constructor
     */
    constructor(){
        this._appointmentList = [];//AppointmentList();
    }

    /**
     * before loading, UI has to be initialized
     */
    init(){
        this.#loadFromJSON();
        this.#addButtonclick();
    }

    /**
     * when #add button is clicked, the given values for the new appointment are read out and printed like a tr
     */
    #addButtonclick(){
        $("#add").click(function(){
            let Appdate = $("#newAppdate").val();
            //console.log(Appdate);
            let Apptime = $("#newApptime").val();
            let Appplace = $("#newAppplace").val();
            let Appvaccine = $("#newAppvaccine").val();
            let Appfreeplaces = $("#newAppfreeplaces").val();

            dashboard.addAppointment(Appdate, Apptime, Appplace, Appvaccine, Appfreeplaces);
        });
    }


    /**
     *loads appointments data from json file and prints them out
     * without jQuery
     * note for me: ersten fünf zeilen können immer verwendet werden zum Auslesen aus JSON file
     */
    #loadFromJSON(){
        fetch("json/appointments.json").
        then((response)=>{
            return response.json();
        }).then(data =>{
            //console.log(data);

            for(let app of data.appointments){
                //untypsierte JSON Objekte in Termin-Objekte (Klasse Termin) umwandeln
                let appointment = new Appointment(app.id, app.date, app.time, app.place, app.vaccine, 0, app.maxplaces);
                //console.log(appointment);
                //Termin zur Terminliste hinzufügen
                this._appointmentList.push(appointment);//.addAppointment(appointment);
                //Personen zu Impfterminen hinzufügen
                this.#addPersonToAppointment(appointment,app);
            }
            //this._appointmentList.print();  //dann erstmal die AppointmentList ausdrucken
            for(let appointment of this._appointmentList.values()){
                appointment.print();
            }
        });
    }

    /**
     *loads the persons from json file to the appointment
     * @param appointment
     * @param jsonAppointment
     */
    #addPersonToAppointment(appointment,jsonAppointment){
        for(let pers of jsonAppointment.persons){
            let person = new Person(pers.name, pers.svnr);
            appointment.addPerson(person);
            //console.log(person);
        }
    }

    /**
     * prints the new Dashboard
     */
    makenewDashboard(){
        //this.newDashboard();
        //$("#insert tr").remove();
        for(let app of this._appointmentList){
            app.print();
        }
    }
}