import { TestLazyComponent } from './test-lazy/test-lazy.component';
import { SparepartComponent } from '../sparepart/sparepart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';



import { TabstripComponent } from './tabstrip.component';
import { DemoNgZorroAntdModule } from 'src/app/shared/ng-zorro-antd.module';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])



@NgModule({
  declarations: [ TabstripComponent,TestLazyComponent],
  bootstrap: [ TabstripComponent ],
  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ],

  imports: [
    CommonModule,
    BrowserModule,FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    BrowserAnimationsModule,
    ScrollingModule,
    DragDropModule,
    
  ]
})
export class TabstripModule { }
