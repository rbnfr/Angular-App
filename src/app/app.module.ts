import { CodeViewerService } from './code.viewer/shared/code-viewer.service';
import { QueueViewerService } from './queue-viewer/shared/queue-viewer.service';
import { AccessService } from './access/shared/access.service';
import { AuthGuardService } from './shared/authentication/auth-guard.service';
import { AuthService } from './shared/authentication/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpModule } from '@angular/http';
import { MyMaterialModule } from './my-maerial.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentDataTableModule, CovalentLayoutModule } from '@covalent/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccessComponent } from './access/access.component';
import { CodeViewerComponent } from './code-viewer/code-viewer.component';
import { QueueViewerComponent } from './queue-viewer/queue-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    CodeViewerComponent,
    QueueViewerComponent
  ],
  imports: [
    BrowserModule,
    CovalentLayoutModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    appRoutes,
    CovalentDataTableModule
  ],
  providers: [
              AuthService,
              AccessService,
              AuthGuardService,
              QueueViewerService,
              CodeViewerService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
