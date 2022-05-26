import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './add-students/add-students.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { UiComponent } from './ui/ui.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { GChartComponent } from './g-chart/g-chart.component';
import { CameraComponent } from './camera/camera.component';
import { OrgchartComponent } from './orgchart/orgchart.component';
const routes: Routes = [
  {
    path: 'login',
    component: BlankLayoutComponent,
    children: [{ component: LoginComponent, path: '' }],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { component: UiComponent, path: '', canActivate: [AuthGuard] },
      {
        component: AddStudentsComponent,
        path: 'add',
        canActivate: [AuthGuard],
      },
      {
        component: ListStudentsComponent,
        path: 'Lists',
        canActivate: [AuthGuard],
      },
      {
        component: GChartComponent,
        path: 'graphs',
        canActivate: [AuthGuard],
      },
      {
        component: OrgchartComponent,
        path: 'orgchart',
        canActivate: [AuthGuard],
      },
      {
        component: CameraComponent,
        path: 'camera',
        canActivate: [AuthGuard],
      },
      {
        component: AddStudentsComponent,
        path: 'update/:id',
        canActivate: [AuthGuard],
      },
    ],
  },
  // {component:LoginComponent,path:"login"},
  // {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
}
