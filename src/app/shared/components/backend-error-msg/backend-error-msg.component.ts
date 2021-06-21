import { Component, Input, OnInit } from '@angular/core';
import { BackendError } from '../../types/backend-error.interface';

@Component({
  selector: 'app-backend-error-msg',
  templateUrl: './backend-error-msg.component.html',
  styleUrls: ['./backend-error-msg.component.scss']
})
export class BackendErrorMsgComponent
  implements OnInit {

  errorMessages: string[] = [];

  // TODO пример использования алиаса для @Input
  @Input('backendErrors') backendErrorsProps: BackendError;

  constructor() {
  }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): void {
    this.errorMessages = Object
      .keys(this.backendErrorsProps)
      .map((name: string) => {
        const msg = this.backendErrorsProps[name]
          .join(', ');

        return `${name} ${msg}`
      });
  }

}
