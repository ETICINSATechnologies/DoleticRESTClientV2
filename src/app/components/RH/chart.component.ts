import {Component, OnInit} from '@angular/core';
import {colorSets} from '@swimlane/ngx-charts/release/utils';
import {DivisionService} from '../../services/division.service';
import {DepartmentService} from '../../services/department.service';
import {RecruitmentEventService} from '../../services/recruitment-event.service';


@Component({
    selector: 'doletic-chart',
    templateUrl: '../../html/chart.component.html',
    providers: [DivisionService, DepartmentService, RecruitmentEventService]
})

export class ChartComponent implements OnInit{

    colorTheme = colorSets.filter(color => color.name === 'picnic')[0];
    repartitionPole: Array<any>;
    repartitionConsultant: Array<any>;
    statsRecutement: Array<any>;

    constructor(divisionService: DivisionService, departementService: DepartmentService, recruitmentService: RecruitmentEventService) {

        divisionService.getRepartition().then( res => {
            this.repartitionPole = res;
        });

        departementService.getRepatitionConsultant().then(res => {
            this.repartitionConsultant = res;
        })

        recruitmentService.getStats().then(res =>{
            this.statsRecutement = res;
        })


    }

    onSelect(event) {
        console.log(event);
    }

    ngOnInit(): void {

    }
}