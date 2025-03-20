import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserdetailsPageRoutingModule } from './user-details-routing.module';

import { UserDetailsPage } from './user-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserdetailsPageRoutingModule
  ],
  declarations: [UserDetailsPage],
})
export class UserdetailsPageModule {}
