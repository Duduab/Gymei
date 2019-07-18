import { NgModule } from '@angular/core';

import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card'
@NgModule({
  exports: [FormsModule, MatDialogModule, MatCardModule, MatFormFieldModule, MatSnackBarModule, MatButtonModule, MatInputModule]
})
export class MaterialModule {}
