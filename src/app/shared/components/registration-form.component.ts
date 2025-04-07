import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],

  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})
export class RegistrationFormComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      documentType: ['', Validators.required],
      documentNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulario enviado', this.formulario.value);
      // Aquí puedes hacer lo que necesites (guardar, enviar, etc.)
    } else {
      this.formulario.markAllAsTouched(); // Marca todo como tocado para que salgan los errores
    }
  }
}