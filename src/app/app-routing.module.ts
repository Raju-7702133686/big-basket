import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CreateStudentComponent } from './pages/admin/create-student/create-student.component';
import { AllStudentsComponent } from './pages/admin/all-students/all-students.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',component: LoginComponent 
   },
   {path:'', component:LayoutComponent,
    children:[
      {path:'products',component: ProductsComponent},
      {path:'create-student/:id', component: CreateStudentComponent},
      {path:'all-students',component: AllStudentsComponent}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
