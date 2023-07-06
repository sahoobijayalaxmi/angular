import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http'
// import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from 'src/login/login.module';
import { DirectiveComponent } from './components/directive/directive.component';
import { ProductsComponent } from './components/products/products.component';
import { EmpDataComponent } from './components/emp-data/emp-data.component';
import { NumberonlyDirective } from './directives/numberonly.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { ZoomDirective } from './directives/zoom.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { RemainingPipe } from './custom-pipes/remaining.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { MathComponent } from './components/math/math.component';
import { EmployeeListComponent } from './compoments/employee-list/employee-list.component';
import { EmployeeAddComponent } from './compoments/employee-add/employee-add.component';
import { ProductDataComponent } from './components/product-data/product-data.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsDataComponent } from './components/products-data/products-data.component';
import { EmpCrudComponent } from './components/emp-crud/emp-crud.component';
import { Observabledemo1Component } from './components/observabledemo1/observabledemo1.component';
import { Subjectdemo1Component } from './components/subjectdemo1/subjectdemo1.component';
import { SendMessageComponent } from './componects/send-message/send-message.component';
import { ReceiveMessageComponent } from './components/receive-message/receive-message.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoList1Component } from './components/todo-list1/todo-list1.component';
import { FormDemo1Component } from './components/form-demo1/form-demo1.component';
import { TemplateDriven1Component } from './components/template-driven1/template-driven1.component';
import { TemplateDriven2Component } from './components/template-driven2/template-driven2.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ModelDrivenFormComponent } from './components/model-driven-form/model-driven-form.component';
import { ModelDrivenForm2Component } from './components/model-driven-form2/model-driven-form2.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PermanentJobsComponent } from './components/permanent-jobs/permanent-jobs.component';
import { TemporaryJobsComponent } from './components/temporary-jobs/temporary-jobs.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    BodyComponent,
    ContactComponent,
    CategoriesComponent,
    CardsComponent,
    DirectiveComponent,
    ProductsComponent,
    EmpDataComponent,
    NumberonlyDirective,
    HighlightDirective,
    ZoomDirective,
    PipesComponent,
    RemainingPipe,
    ParentComponent,
    Child1Component,
    Child2Component,
    MathComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    ProductDataComponent,
    UsersComponent,
    ProductsDataComponent,
    EmpCrudComponent,
    Observabledemo1Component,
    Subjectdemo1Component,
    SendMessageComponent,
    ReceiveMessageComponent,
    AddTodoComponent,
    TodoList1Component,
    FormDemo1Component,
    TemplateDriven1Component,
    TemplateDriven2Component,
    RegistrationFormComponent,
    ModelDrivenFormComponent,
    ModelDrivenForm2Component,
    HomeComponent,
    AboutusComponent,
    CareersComponent,
    ServiceComponent,
    ContactsComponent,
    PhotoDetailsComponent,
    PhotosComponent,
    ProductDetailsComponent,
    PermanentJobsComponent,
    TemporaryJobsComponent
  ],
  imports: [ BrowserModule,AppRoutingModule,FormsModule,LoginModule,NgxPaginationModule,HttpClientModule, ReactiveFormsModule],
  // Ng2SearchPipeModule
  // NgbModule.forRoot(),
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
