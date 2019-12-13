import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from './person.model';



@Injectable({
    providedIn: 'root'
})
export class PersonService {
    private persons: Person[] = [
        {
            id: 1,
            name: 'Naruto',
            telephone: '799',
            email: 'naruto@gmail.com',
            state: 'RJ',
            city: 'Niterói'
        },
        {
            id: 2,
            name: 'André',
            telephone: '699',
            email: 'andre@gmail.com',
            state: 'RJ',
            city: 'Niterói'
        },
        {
            id: 3,
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

    updatePerson(personData: Person) {

        this.persons[personData.id - 1] = personData;

    }

}
