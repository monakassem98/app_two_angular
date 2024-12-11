import { Component } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';
import { Widget } from '../../widget';
@Component({
  selector: 'app-widgets',
  imports: [WidgetComponent],
  template: `
    <div class="data">
      <div class="page-title">Dashboard</div>

      <!-- widgets  -->
      <!-- inter polation -->
      <!-- <div class="test">{{subject}}</div> -->

      <!-- property binding  -->
      <!-- <div [id]="subject " class="test">Text</div>
    </div> -->

      <div class="widgets">
        <app-widget [widget_data]="widget_1"></app-widget>
        <app-widget [widget_data]="widget_2"></app-widget>
        <app-widget [widget_data]="widget_3"></app-widget>
        <app-widget [widget_data]="widget_4"></app-widget>
        <app-widget [widget_data]="widget_5"></app-widget>
        <app-widget [widget_data]="widget_6"></app-widget>
      </div>
    </div>
  `,
})
export class WidgetsComponent {
  widget_1: Widget = {
    widget_title: 'Clients',
    widget_value: 900,
    widget_class: 'widget-1',
  };

  widget_2: Widget = {
    widget_title: 'Employees',
    widget_value: 1200,
    widget_class: 'widget-2',
  };

  widget_3: Widget = {
    widget_title: 'Employees',
    widget_value: 1200,
    widget_class: 'widget-3',
  };

  widget_4: Widget = {
    widget_title: 'Employees',
    widget_value: 1200,
    widget_class: 'widget-4',
  };

  widget_5: Widget = {
    widget_title: 'Employees',
    widget_value: 1200,
    widget_class: 'widget-5',
  };

  widget_6: Widget = {
    widget_title: 'Employees',
    widget_value: 1200,
    widget_class: 'widget-6',
  };
}
