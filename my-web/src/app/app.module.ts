import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
