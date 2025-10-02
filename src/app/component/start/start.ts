import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Api } from '@app/service/api';
import { Select } from '@app/directive/select';

import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-start',
  imports: [RouterModule, Select, NgIf, NgFor],
  templateUrl: './start.html',
  styleUrl: './start.scss'
})
export class Start {

  private api = inject(Api);

  // now just expose a function returning a Promise
  loadMacbook = () => this.api.getObject<any>('https://api.restful-api.dev/objects/7');

  objectKeys = Object.keys;


}
