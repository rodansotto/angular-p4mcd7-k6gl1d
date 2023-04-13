import { Component } from '@angular/core';
import { PrintService } from '../print.service';

@Component({
    selector: 'button-basic-demo',
    templateUrl: './button-basic-demo.html'
})
export class ButtonBasicDemo { 

    constructor(private printService: PrintService) { }

    onPrintReport(): void {
        this.printService.printDocument('report-component', null);
    }

}