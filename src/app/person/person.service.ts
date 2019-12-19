import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from './person.model';

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    private persons: Person[] = [
        {
            id: 2,
            name: 'Naruto',
            telephone: '799',
            email: 'naruto@gmail.com',
            state: 'RJ',
            city: 'Niterói'
        },
        {
            id: 9,
            name: 'André',
            telephone: '699',
            email: 'andre@gmail.com',
            state: 'RJ',
            city: 'Niterói'
        },
        {
            id: 12,
            name: 'Bruna',
            telephone: '299',
            email: 'bruna@gmail.com',
            state: 'RJ',
            city: 'Niterói'
        }
    ];

    getAll(): Observable<Person[]> {
        return of(this.persons);
    }

    getById(id: number): Observable<Person> {
        return of(this.persons.find(p => p.id === id));
    }

    save(person: Person) {
        if (person.id) {
            this.updatePerson(person);
        } else {
            this.createPerson(person);
        }
    }

    updatePerson(person: Person) {
        let index = 0;

        this.persons.forEach(p => {
            if (p.id === person.id) {
                this.persons[index] = person;
                return;
            }
            index++;
        });
    }

    createPerson(person: Person) {
        person.id = this.getLastId() + 1;
        this.persons.push(person);
    }

    getLastId(): number {
        let max = 0;
        this.persons.forEach(p => {
            if (max < p.id) {
                max = p.id;
            }
        });
        return max;
    }

    deletePerson(person: Person) {
        if (this.persons.find(p => p.id === person.id)) {
            console.warn('deletePerson' + person.id);
            console.warn(this.persons.indexOf(person));
            this.persons.splice(this.persons.indexOf(person), 1);
        }
        return this.persons;
    }
}
