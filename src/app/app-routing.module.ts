import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DesignComponent } from './components/design/design.component';
import { SkillComponent } from './components/skill/skill.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about-me', component: AboutComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'design', component: DesignComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
