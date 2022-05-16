/**
 * Author: Eder Amata
 *manages the Admin activities
 * including adding and deleting an Appointment
 *
 * class Admin extends from Dashboard to have access to all appointments
 * Admin.js
 */
class Admin extends Dashboard{

    /**
     *creates an instance of Admin
     */
    constructor(){
        super();
    }


    /**
     *deletes an Appointment when the delete Button is clicked
     * and there are no registrations yet
     */
    deleteAppointment(id) {
        if(confirm("Diesen Impftermin löschen?")){
            let cnt = 0;
            let deletebyId = document.getElementById(id);

            for(let app of this._appointmentList){
                if(app.id === id){
                    if(app.registrations != 0){
                        alert("Dieser Termin kann nicht gelöscht werden, da bereits Personen angemeldet sind!");
                    }
                    else{
                        deletebyId.parentElement.parentElement.remove();    //löscht Html Element tr
                        this._appointmentList.splice(cnt,1);    //ein Element an der Position cnt soll gelöscht werden
                    }
                    return;
                }
                cnt++;
            }
        }
    }

    /**
     *adds the new Appointment to the _appointmentList by creating a new Appointment with the biggest id available + 1
     * and the new values given in the input fields
     * @param Appdate
     * @param Apptime
     * @param Appplace
     * @param Appvaccine
     * @param Appfreeplaces
     */
    addAppointment(Appdate, Apptime, Appplace, Appvaccine, Appfreeplaces){
        //id um eins erhöhen
        let id = this._appointmentList[this._appointmentList.length - 1].id +1;
        let newAppointment = new Appointment(id, Appdate, Apptime, Appplace, Appvaccine, 0, Appfreeplaces);
        this._appointmentList.push(newAppointment);
        newAppointment.print();
    }

    /**
     * Person chooses Appointment by Date, Time and Place.
     * @param date
     * @param time
     * @param place
     */
    addPersonToAppointment(person, date, time, place){
        for(let a of this._appointmentList){
            if(a.date === date && a.time === time && a.place == place){
                a.addPerson(person);
            }
        }
    }
}