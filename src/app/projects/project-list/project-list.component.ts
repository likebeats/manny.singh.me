import { Component, OnInit, HostBinding } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { slideInDownAnimation } from '../../animations';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService],
  animations: [ slideInDownAnimation ]
})

export class ProjectListComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';

  projects: Project[];
  selectedProject: Project;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.projectService
        .getProjects()
        .then((projects: Project[]) => {
          this.projects = projects;
        });
  }

  selectProject(project: Project) {
    this.selectedProject = project;

    this.router.navigate([project._id], { relativeTo: this.route });
  }

}
