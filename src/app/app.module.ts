import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AddStudentsComponent } from './add-students/add-students.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './shared/token-interceptor.service';
import { MatCardModule } from '@angular/material/card';
import { NgxCaptchaModule } from 'ngx-captcha';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { UiComponent } from './ui/ui.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { GChartComponent } from './g-chart/g-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from './camera/camera.component';
import { OrgchartComponent } from './orgchart/orgchart.component';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { CamComponent } from './cam/cam.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    ListStudentsComponent,
    UpdateStudentComponent,
    NavComponent,
    LoginComponent,
    UiComponent,
    BlankLayoutComponent,
    MainLayoutComponent,
    FooterComponent,
    GChartComponent,
    CameraComponent,
    OrgchartComponent,
    CamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    NgxCaptchaModule,
    GooglePlaceModule,
    MatTabsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    GoogleChartsModule,
    WebcamModule,
    NgxOrgChartModule,
    MatDividerModule,
    MatMenuModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule, MatFormFieldModule],
})
export class AppModule {}
