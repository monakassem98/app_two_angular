import { Component, Input } from '@angular/core';
import { Widget } from '../../widget';

@Component({
  selector: 'app-widget',
  imports: [],
  template: `
    <div [class]="widget_data.widget_class" >
      <span>{{ widget_data.widget_title }}</span>
      <span>{{ widget_data.widget_value }}</span>
    </div>
  `,
})
export class WidgetComponent {
  @Input() widget_data: Widget = {} as Widget;
}
