import { Routes } from '@angular/router';

import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'projetos', component: ProjectsComponent },
  { path: 'habilidades', component: SkillsComponent },
  { path: 'contato', component: ContactComponent },
  // Wildcard route para página não encontrada ou redirecionamento
  { path: '**', redirectTo: '', pathMatch: 'full' }
];