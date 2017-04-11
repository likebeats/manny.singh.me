import { Injectable } from '@angular/core';
import { Project } from './project';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService {

  private projectsURL = '/api/projects';

  constructor (private http: Http) {}

  // get("/api/projects")
  getProjects(): Promise<Project[]> {
    return this.http.get(this.projectsURL)
                    .toPromise()
                    .then(response => response.json() as Project[])
                    .catch(this.handleError);
  }

  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }
}
