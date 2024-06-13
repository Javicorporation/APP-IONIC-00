import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataTimePageRoutingModule } from './data-time-routing.module';

import { ComponentsModule } from "../../components/components.module";
import { DataTimePage } from './data-time.page';

@NgModule({
    declarations: [DataTimePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DataTimePageRoutingModule,
        ComponentsModule
    ]
})
export class DataTimePageModule {}
