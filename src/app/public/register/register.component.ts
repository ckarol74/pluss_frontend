import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/common/dialog/dialog.component';
import { SnackbarService } from 'src/app/common/snackbar/snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registerForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private $snackbar: SnackbarService
  ) {
    this.registerForm = new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      primerApellido: new FormControl(''),
      segundoApellido: new FormControl(''),
      celular: new FormControl(''),
      genero: new FormControl(''),
      numeroDocumento: new FormControl(''),
      idLugarEmisionDocumento: new FormControl(''),
      correo: new FormControl('', [Validators.email]),
    });
  }
}
