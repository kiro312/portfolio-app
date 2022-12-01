import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { DesignComponent } from './components/design/design.component';
import { SkillComponent } from './components/skill/skill.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'about-me', component: AboutComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'design', component: DesignComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
