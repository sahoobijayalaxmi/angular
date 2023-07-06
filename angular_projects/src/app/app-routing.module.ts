import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PermanentJobsComponent } from './components/permanent-jobs/permanent-jobs.component';
import { TemporaryJobsComponent } from './components/temporary-jobs/temporary-jobs.component';
import { authGuard } from './guards/auth.guard';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'careers',component:CareersComponent ,
    children:[
      {path:'permanent-jobs',component:PermanentJobsComponent },
      {path:'temporary-jobs',component:TemporaryJobsComponent },
    ]
  },
  {path:'service',component:ServiceComponent},
  {path:'contact',component:ContactComponent},
  {path:'photos',component:PhotosComponent},
  {path:'photo-details/:id',component:PhotoDetailsComponent},
  {path:'products',component:ProductsComponent ,canActivate:[authGuard]},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'',component:HomeComponent},
  { path: 'grocery', loadChildren: () => import('./grocery/grocery.module').then(m => m.GroceryModule) },
  { path: 'travel', loadChildren: () => import('./travel/travel.module').then(m => m.TravelModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
