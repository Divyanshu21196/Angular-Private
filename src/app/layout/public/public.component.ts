import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
