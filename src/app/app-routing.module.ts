import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { ShellComponent } from './components/shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
  },
  {
    path: 'character/:characterId',
    component: CharacterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
