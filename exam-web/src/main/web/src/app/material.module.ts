import { NgModule } from '@angular/core';
import { MatButtonModule,
        MatIconModule,
        MatButtonToggleModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
    } from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFileUploadModule } from 'angular-material-fileupload';

@NgModule({
    exports: [
        MatButtonModule,
        MatIconModule,
        MatButtonToggleModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFileUploadModule
    ],
    // providers: [
    //     { provide: MatPaginatorIntl, useValue: myPaginator()}
    // ]
})
export class SharedMaterialModule {}