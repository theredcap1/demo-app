import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserdetailsPageRoutingModule } from './user-details-routing.module';

import { UserDetailsPage } from './user-details.page';
import {GenderPipe} from "../gender.pipe";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UserdetailsPageRoutingModule,
        GenderPipe
    ],
  declarations: [UserDetailsPage],
})
export class UserdetailsPageModule {}
