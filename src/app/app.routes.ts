import { Routes } from '@angular/router';
import { WidgetsComponent } from './component/widgets/widgets.component';
import { TableComponent } from './component/table/table.component';
import { ItemsComponent } from './component/items/items.component';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { FormsComponent } from './component/forms/forms.component';
import { EmptyComponent } from './component/empty/empty.component';
export const routes: Routes = [
  {
    path: 'dashboard',
    component: WidgetsComponent,
  },

  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'items',
    component: ItemsComponent,
  },

  {
    path: 'invoice',
    component: InvoiceComponent,
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },

  {
    path: '**',
    component: EmptyComponent,
  },
];
