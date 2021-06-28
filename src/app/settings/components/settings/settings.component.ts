import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BackendError } from '../../../shared/types/backend-error.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent
  implements OnInit {

  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  errors$: Observable<BackendError | null>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
