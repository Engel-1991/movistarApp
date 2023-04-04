import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { ContactComponent } from '../../contact/contact.component';
import { HomeComponent } from '../../home/home.component';
import { SkillsComponent } from '../../skills/skills.component';
import { AuthGuard } from '../../helpers/auth.guard';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'home', component: HomeComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'home', component: HomeComponent },
    ]),
  ],

  exports: [RouterModule],
})
export class RoutingModule {}
