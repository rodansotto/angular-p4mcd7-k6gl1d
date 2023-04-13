import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PrintService } from './print.service';

@Component({
  selector: 'report-component',
  templateUrl: './app.report-component.html',
  styles: [`
    :host {
      font-family: Arial;
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      --surface-ground: white;
      pointer-events: none;
    }
  `]
})
export class ReportComponent { 
  constructor(private primengConfig: PrimeNGConfig, private printService: PrintService) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.printService.onDataReady();
  }
}
