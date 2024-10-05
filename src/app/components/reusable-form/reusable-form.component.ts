import { CommonModule } from '@angular/common';
import { Component, inject, SkipSelf } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { PrimengModule } from '../../shared/primeng.module';

@Component({
  selector: 'app-reusable-form',
  standalone: true,
  imports: [ReactiveFormsModule, PrimengModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (parent: ControlContainer) => parent,
      deps: [[new SkipSelf(), ControlContainer]],
    },
  ],
  templateUrl: './reusable-form.component.html',
  styleUrl: './reusable-form.component.css',
})
export class ReusableFormComponent {
  parentContainer = inject(ControlContainer);
  controlNames: string[] = [];

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    // Extract control names from the parent form group
    this.controlNames = Object.keys(this.parentFormGroup.controls);
  }

  getControlType(controlName: string): string {
    if (controlName.toLowerCase().includes('email')) {
      return 'email';
    } else if (controlName.toLowerCase().includes('password')) {
      return 'password';
    }
    return 'text';
  }
}
