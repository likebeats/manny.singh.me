import { Component, Input, HostBinding } from '@angular/core';
import { Project } from '../project';
import { slideInDownAnimation } from '../../animations';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  animations: [ slideInDownAnimation ]
})
export class ProjectDetailsComponent {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';

  @Input()
  project: Project;

  constructor() {}

}
