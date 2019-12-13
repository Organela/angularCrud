import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  persons: any;
  displayedColumns: string[] = ['name', 'telephone', 'email', 'state', 'city', 'action'];

  applyFilter(filterValue: string) {
    this.persons.filter = filterValue.trim().toLowerCase();
  }
  constructor(readonly personService: PersonService) {
       personService.getAll().subscribe(persons => {
        this.persons = new MatTableDataSource(persons);
    });
  }

  ngOnInit() {
  }

}
