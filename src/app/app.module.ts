import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { YoutubeApiService } from './youtube-api.service';
import { MainCardsModule } from './main/main-cards/main-cards.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MapComponent} from './contact-form/map/map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadFilesComponent } from './upload-files/upload-files.component';

const appRouter=[
  {
      path:'',component:MainComponent
  },
  {
      path:'main',component:MainComponent
  },
  {
    path:'contact',component: ContactFormComponent
  },
  {
    path:'upload',component: UploadFilesComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactFormComponent,
    MapComponent,
    UploadFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouter),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
  }),
  MainCardsModule,
  FormsModule,
  ReactiveFormsModule
  ],
  providers: [YoutubeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
