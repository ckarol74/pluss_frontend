import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/common/dialog/dialog.component';
import { SnackbarService } from 'src/app/common/snackbar/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm!: FormGroup;
  public hide: boolean = true;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private $snackbar: SnackbarService
  ) {
    this.loginForm = new FormGroup({
      usuario: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      contrasena: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Formulario correcto');
    } else {
      this.$snackbar.openWarning(
        'Error en el Formulario',
        'El Formulario no es válido, asegúrese de haber llenado el formulario de manera correcta'
      );
    }
  }
}
