import { Injectable } from '@angular/core';

import { Router, NavigationStart } from '@angular/router';

import { Subject } from 'rxjs/Subject';

@Injectable()

export class AlertService {

    private subject = new Subject<any>();

    private keepAfterNavigationChange = false;

    message$ = this.subject.asObservable();

    constructor(private router: Router) {

        router.events.subscribe(event => {

            if (event instanceof NavigationStart) {

                if (this.keepAfterNavigationChange) {

                    this.keepAfterNavigationChange = false;

                } else {

                    this.subject.next();

                }

            }

        });

    }

    success(title: string, message: string, keepAfterNavigationChange = false) {

        this.keepAfterNavigationChange = keepAfterNavigationChange;

        this.subject.next({ type: 'success', title: title, text: message, icon : 'checkmark' });

    }

    error(title: string, message: string, keepAfterNavigationChange = false) {

        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', title: title, text: message, icon : 'warning' });

    }

    info(title: string, message: string, keepAfterNavigationChange = false) {

        this.keepAfterNavigationChange = keepAfterNavigationChange;

        this.subject.next({ type: 'info', title: title, text: message, icon : 'info' });

    }

    warning(title: string, message: string, keepAfterNavigationChange = false) {

        this.keepAfterNavigationChange = keepAfterNavigationChange;

        this.subject.next({ type: 'warning', title: title, text: message, icon : 'warning sign' });

    }

    webmasterAlert(keepAfterNavigationChange = false) {
        this.error("Erreur innatendu :", "Une erreur est survenu. Veuillez contacter le responsable DSI.", keepAfterNavigationChange);
    }

}