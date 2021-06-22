import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { InitStateValue } from '../../interfaces/initStateValue.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent
  implements OnInit, InitStateValue {

  @Input() limit: number = 0;

  @Input() total: number = 0;

  @Input() url: string = '';

  @Input() currentPage: number = 0;

  pagesCount: number;
  pages: number[] = [];

  constructor(
    private utilsService: UtilsService,
  ) {
  }

  ngOnInit(): void {
    this.initializeValue();
  }

  initializeValue(): void {
    this.pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.utilsService.range(1, this.pagesCount);
  }

}
