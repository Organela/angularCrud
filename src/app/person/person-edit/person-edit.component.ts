import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
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


}
