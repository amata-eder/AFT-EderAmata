/**
 * Author: Eder Amata
 * manages the appointments like printing them out and adding persons
 *
 * Appointment.js
 */
class Appointment{
    #id;
    #date;
    #time;
    #place;
    #vaccine;
    #registrations;
    #maxplaces;
    #persons;

    /**
     * creates an instance of Appointment
     * @param id
     * @param date
     * @param time
     * @param place
     * @param vaccine
     * @param registrations
     * @param freeplaces
     */
    constructor(id,date,time,place,vaccine,registrations,maxplaces) {
        this.#id = id;
        this.#date = date;
        this.#time = time;
        this.#place = place;
        this.#vaccine = vaccine;
        this.#registrations = registrations;
        this.#maxplaces = maxplaces;
        this.#persons = [];
    }

    //getter damit darauf zugegriffen werden kann
    get id(){
        return this.#id;
    }
    get date() {
        return this.#date;
    }
    get time() {
        return this.#time;
    }
    get place() {
        return this.#place;
    }
    get vaccine() {
        return this.#vaccine;
    }
    get registrations() {
        return this.#registrations;
    }
    get freeplaces() {
        return this.#maxplaces - this.#registrations;
    }

    /**
     *prints an Appointment as a <tr>
     */
    print(){
        //setting the color of the vaccine
        let vaccineClass = this.#vaccine;
        //console.log(vaccineClass);

        if(vaccineClass == "Biontech/Pfizer"){
            vaccineClass = "vaccinepfizer";
        }
        else if(vaccineClass == "Moderna"){
            vaccineClass = "vaccinemoderna";
        }
        else if(vaccineClass == "Johnson&Johnson"){
            vaccineClass = "vaccinejohnson";
        }
        else if(vaccineClass == "AstraZeneca"){
            vaccineClass = "vaccineastra";
        }


        //printing the table row tr
        //let tdPerson = this.#persons.print();
        let printp = "";
        for(let p of this.#persons){
            //console.log(p);
            printp += p.print();
        }

        let appointment = $(`
            <tr>
                <th scope="row">${this.#date}</th>
                <td>${this.#time}</td>
                <td>${this.#place}</td>
                <td class="${vaccineClass}">${this.#vaccine}</td>
                <td>${this.#registrations}</td>
                <td>${this.#maxplaces - this.#registrations}</td>
                <td><button class="btn btn-primary">Bearbeiten</button></td>
                <td><button class="btn btn-danger" onclick="deletetr(${this.#id})" id=${this.#id}>Löschen</button></td>
                <td>${printp}</td>
            </tr>
        `);
        //immer vorne einfügen
        $("#insert").prepend(appointment);
        //console.log(appointment);


    }

    /**
     *adds the person given from the json file to the correct appointment
     * and raises the number of registrations by one
     * @param pers
     */
    addPerson(pers){
        this.#persons.push(pers);
        this.#registrations++;
        //console.log(pers);
    }

}


