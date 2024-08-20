import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';

import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { DemoNgZorroAntdModule } from 'src/app/shared/ng-zorro-antd.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LayoutComponent } from './layout.component';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { IconModule } from '@ant-design/icons-angular';
import { SharedModule } from 'src/app/shared/shared.module';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
    [key: string]: IconDefinition;
  };
  const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
  

@NgModule({
    imports: [
        BrowserModule,FormsModule,
        NzIconModule,
        HttpClientModule,
        HttpClientJsonpModule,
        ReactiveFormsModule,
        DemoNgZorroAntdModule,
        BrowserAnimationsModule,
        ScrollingModule,
        DragDropModule,
        NzLayoutModule,
        IconModule,
        SharedModule,
        LayoutComponent
      ],
      declarations: [ LayoutComponent ],
      bootstrap: [ LayoutComponent ],
      providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ]
    })
export class LayoutModule { }
