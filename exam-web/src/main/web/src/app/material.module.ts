import { NgModule } from "@angular/core";
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
    } from "@angular/material"

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
    ],
    // providers: [
    //     { provide: MatPaginatorIntl, useValue: myPaginator()}
    // ]
})
export class SharedMaterialModule {}