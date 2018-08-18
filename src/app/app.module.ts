import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
// import { xdLocalStorage } from 'xdlocalstorage';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { BooksComponent } from './books/books.component';

const appRoutes:Routes = [
  {path : '', component:PagesComponent},
  {path : 'pages', component:PagesComponent},
  {path : 'new-page', component:NewPageComponent},
  {path : 'books', component:BooksComponent},

];
// xdLocalStorage.init(
//   {
//     iframeUrl:'../src/iframe.html'
//   }).then(function () {
//     //an option function to be called once the iframe was loaded and ready for action
//     console.log('Got iframe ready');
// });

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    NewPageComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
