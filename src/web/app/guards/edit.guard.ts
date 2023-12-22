import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean;
}

@Injectable({
  providedIn: 'root',
})
export class EditGuard implements CanDeactivate<ComponentCanDeactivate> {
  MESSAGE: string = 'You have unsaved changes. Are you sure to navigate away?';

  canDeactivate(component: ComponentCanDeactivate): boolean {
    if (!component.canDeactivate()) {
      return confirm(this.MESSAGE);
    }
    return true;
  }
}
