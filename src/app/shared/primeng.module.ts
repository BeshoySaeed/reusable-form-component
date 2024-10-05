import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, InputTextModule, FloatLabelModule, ButtonModule],
  exports: [CommonModule, InputTextModule, FloatLabelModule, ButtonModule],
})
export class PrimengModule {}
