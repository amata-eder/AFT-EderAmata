/**
 * Author: Eder Amata
 *prints the Persons from the json files to the Appointments
 *
 * Person.js
 */
class Person{
    #name;
    #svnr;

    /**
     * creates an instance of Person
     * @param name
     * @param svnr
     */
    constructor(name,svnr){
        this.#name = name;
        this.#svnr = svnr;
    }

    get name(){
        return this.#name;
    }

    get svnr(){
        return this.#svnr;
    }

    /**
     * prints the Persons of the Appointment
     * @param appointment
     * @param parent
     */
    print(){
        let td ="<div><input type=\"checkbox\"/>" + this.#name +" " + this.#svnr + "</div><br>";
        //console.log(td);
        return td;
    }
}