import { Component, OnInit, HostBinding } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { slideInDownAnimation } from '../../animations';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [ProjectService],
  animations: [ slideInDownAnimation ]
})
export class ProjectDetailsComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';

  project: Project;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    const projectId = this.route.snapshot.params['id'];
    this.projectService.getProjectById(projectId)
                       .then((project: Project) => {
                         this.project = project;
                       });
  }

}
