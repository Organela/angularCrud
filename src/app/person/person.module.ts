import { NgModule } from '@angular/core';
import { PersonRoutingModule } from './person-routing.module';
<<<<<<< HEAD
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
=======
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
>>>>>>> 6600e1825fe91c4091ba2677ee66f7b3dbc5b513

import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonComponent } from './person/person.component';



@NgModule({
    imports: [
        PersonRoutingModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        CommonModule,
        MatTableModule,
<<<<<<< HEAD
        MatIconModule,
        FormsModule

=======
        MatIconModule
>>>>>>> 6600e1825fe91c4091ba2677ee66f7b3dbc5b513
    ],
    declarations: [
        PersonComponent,
        PersonEditComponent,
        PersonListComponent
    ]
})
export class PersonModule {
}