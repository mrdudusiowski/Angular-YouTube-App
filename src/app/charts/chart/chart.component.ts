import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/canvasjs.min';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Number of subscribers"
		},
		data: [{
			type: "column",
			dataPoints: [
				{ y: 102000000, label: "PewDiePie" },
				{ y: 354000, label: "TVNTurbo" },
				{ y: 3330000, label: "KubzScouts" },
				{ y: 125000000, label: "T-Series" },
			]
		}]
	});
		
	chart.render();
    }

}
