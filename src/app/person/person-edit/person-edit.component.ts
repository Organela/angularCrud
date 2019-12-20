<<<<<<< HEAD
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { PersonService } from '../person.service';
import { Person } from '../person.model';
=======
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';
>>>>>>> 6600e1825fe91c4091ba2677ee66f7b3dbc5b513

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
<<<<<<< HEAD
export class PersonEditComponent {
  personForm: FormGroup;

  constructor(private personService: PersonService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');

      this.personForm = this.formBuilder.group({
        id,
        name: [ null, [Validators.required, Validators.minLength(4)] ],
        telephone: null,
        email: null,
        state: null,
        city: null
      });

      personService.getById(id).subscribe(person => {
        if (person !== undefined && person !== null) {
          this.personForm.patchValue(person);
        }
      });
    });
  }

  save() {
    this.personService.save(this.personForm.value);
    this.router.navigate(['person', 'list']);
  }
=======
export class PersonEditComponent implements OnInit {

  person: Person;
  checkoutForm;
  personId;



  constructor(private service: PersonService,

    private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {

    this.route.paramMap.subscribe(params => {
      const personId = +params.get('id'); // Parametro da rota url
      this.personId = personId;
      service.getById(personId).subscribe(person => {
        this.person = person;

      });

      this.checkoutForm = this.formBuilder.group({
        id: personId,
        name: '',
        telephone: '',
        email: '',
        state: '',
        city: ''

      });
    });


  }

  newAuthenticate() {

    return this.router.url === '/person/new';
  }
  editAuthenticate() {
    return this.router.url === '/person/' + this.personId + '/edit';
  }


  onSubmit(personData) {

    this.service.updatePerson(personData);
    console.log('Your data has been updated');
    this.checkoutForm.reset();

  }


  ngOnInit() {
  }


>>>>>>> 6600e1825fe91c4091ba2677ee66f7b3dbc5b513
}
