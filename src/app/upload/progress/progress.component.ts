import { Component, OnInit, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  @Input() progress = 0;

  constructor(private translate: TranslateService,) { 
    translate.setDefaultLang('pl');
  }

  ngOnInit() {
  }

}
