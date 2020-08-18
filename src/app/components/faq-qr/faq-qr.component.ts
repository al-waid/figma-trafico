import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq-qr',
  templateUrl: './faq-qr.component.html',
  styleUrls: ['./faq-qr.component.scss']
})
export class FaqQrComponent implements OnInit {

  @Input() id: number;
  @Input() q: "";
  @Input() r: "";
  constructor() { }

  ngOnInit(): void {
  }

}
