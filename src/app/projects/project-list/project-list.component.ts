import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})

export class ProjectListComponent implements OnInit {

  projects: Project[];
  selectedProject: Project;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService
        .getProjects()
        .then((projects: Project[]) => {
          this.projects = projects;
        });
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }

}
