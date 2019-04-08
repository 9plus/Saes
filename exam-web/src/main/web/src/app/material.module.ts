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
        MatPaginatorModule
    ]
})
export class SharedMaterialModule {}