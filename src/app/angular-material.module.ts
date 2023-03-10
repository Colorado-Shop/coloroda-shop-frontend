import { NgModule } from "@angular/core";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from "@angular/material/icon";
import {MatBadgeModule} from '@angular/material/badge';


//Note that angular implicitly imports our provided modules (which can also be explicitly imported with no errors) so we explicitly export it
//to our app.module.ts
//This is just to ease debugging and maintenance, however, they can be imported directly in app.module.ts
@NgModule({
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    MatBadgeModule
  ]
})

export class AngularMaterialModule {}
