import { Directive, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSelect]',
  standalone: true,
})
export class Select<T> {
  private templateRef = inject(TemplateRef<any>);
  private viewContainerRef = inject(ViewContainerRef);

  // Instead of requiring DataSource, accept any Promise-returning function
  // Using alias 'appSelectFrom' to enable microsyntax: *appSelect="let obj from source"
  selectFrom = input.required<() => Promise<T>>({ alias: 'appSelectFrom' });

  async ngOnInit() {
    const data = await this.selectFrom()();
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      $implicit: data,
    });
  }
}
