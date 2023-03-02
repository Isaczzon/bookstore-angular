import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-host-dashboard *abpPermission="'Bookstore.Dashboard.Host'"></app-host-dashboard>
    <app-tenant-dashboard *abpPermission="'Bookstore.Dashboard.Tenant'"></app-tenant-dashboard>
  `,
})
export class DashboardComponent {}
