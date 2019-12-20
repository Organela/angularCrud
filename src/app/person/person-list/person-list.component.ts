import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatTableDataSource } from '@angular/material/table';


import { PersonService } from '../person.service';
import { Person } from '../person.model';
=======
import { PersonService } from '../person.service';
import { MatTableDataSource } from '@angular/material/table';
>>>>>>> 6600e1825fe91c4091ba2677ee66f7b3dbc5b513

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  persons: any;
  displayedColumns: string[] = ['name', 'telephone', 'email', 'state', 'city', 'action'];

<<<<<<< HEAD

=======
>>>>>>> 6600e1825fe91c4091ba2677ee66f7b3dbc5b513
  applyFilter(filterValue: string) {
    this.persons.filter = filterValue.trim().toLowerCase();
  }
  constructor(readonly personService: PersonService) {
<<<<<<< HEAD


    personService.getAll().subscribe(persons => {
      this.persons = new MatTableDataSource(persons);
    });


=======
       personService.getAll().subscribe(persons => {
        this.persons = new MatTableDataSource(persons);
    });
>>>>>>> 6600e1825fe91c4091ba2677ee66f7b3dbc5b513
  }

  ngOnInit() {
  }

<<<<<<< HEAD
  onDelete(person: Person) {
    this.persons = new MatTableDataSource(this.personService.deletePerson(person));
  }

=======
>>>>>>> 6600e1825fe91c4091ba2677ee66f7b3dbc5b513
}
