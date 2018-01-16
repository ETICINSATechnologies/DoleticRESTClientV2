import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'doletic-chart',
    templateUrl: '../../html/chart.component.html',
    providers: []
})

export class ChartComponent implements OnInit{

    single: any[];
    multi: any[];



    view: any[] = [700, 400];

    // options
    showLegend = true;

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    // pie
    showLabels = true;
    explodeSlices = false;
    doughnut = false;

    constructor() {
        var single = [
            {
                "name": "Germany",
                "value": 8940000
            },
            {
                "name": "USA",
                "value": 5000000
            },
            {
                "name": "France",
                "value": 7200000
            }
        ];

        var multi = [
            {
                "name": "Germany",
                "series": [
                    {
                        "name": "2010",
                        "value": 7300000
                    },
                    {
                        "name": "2011",
                        "value": 8940000
                    }
                ]
            },

            {
                "name": "USA",
                "series": [
                    {
                        "name": "2010",
                        "value": 7870000
                    },
                    {
                        "name": "2011",
                        "value": 8270000
                    }
                ]
            },

            {
                "name": "France",
                "series": [
                    {
                        "name": "2010",
                        "value": 5000002
                    },
                    {
                        "name": "2011",
                        "value": 5800000
                    }
                ]
            }
        ];
        Object.assign(
            this,
            {
                single,
                multi
            }
        )
    }

    onSelect(event) {
        console.log(event);
    }

    ngOnInit(): void {

    }
}