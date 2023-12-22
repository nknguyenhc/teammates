import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class TrackEditService {
  private editingFields: Set<string> = new Set<string>();

  /**
   * Marks a field as being edited. The fields must be unique,
   * or this service will not work properly.
   * @param field The unique ID of the field.
   */
  addField(field: string) {
    this.editingFields.add(field);
  }

  /**
   * Marks a field as not being edited.
   * @param field The unique ID of the field.
   */
  removeField(field: string) {
    this.editingFields.delete(field);
  }

  /**
   * Checks if any field is being edited.
   */
  isAnyFieldBeingEdited(): boolean {
    return this.editingFields.size > 0;
  }

  /**
   * Marks all fields as not being edited.
   */
  removeAllFields() {
    this.editingFields = new Set<string>();
  }
}
