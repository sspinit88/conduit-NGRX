import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ArticleInput } from '../../types/article-input.interface';
import { BackendError } from '../../../shared/types/backend-error.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent
  implements OnInit {

  @Input('initialValues') initialValuesProps: ArticleInput;
  @Input('isSubmitting') isSubmittingProps: boolean;
  @Input('errors') errorsProps: BackendError | null;

  @Output('articleSubmit') articleSubmitEvent: EventEmitter<ArticleInput> = new EventEmitter<ArticleInput>();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      title: [this.initialValuesProps.title],
      description: [this.initialValuesProps.description],
      body: [this.initialValuesProps.body],
      tagList: this.initialValuesProps.tagList.join(' '),
    });
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }

}
