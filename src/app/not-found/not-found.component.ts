import { Component } from '@angular/core';

@Component({
    template:`
    <div class="jumbotron text-center" style="margin-top: 81px;
    margin-bottom: 0;">
    <h1>404 Not Found</h1>
    <p>You may be lost. Follow the breadcrumbs back <a routerLink="/">Home</a> </p>
    `
})

export class NotFoundComponent {}