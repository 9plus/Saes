import { NgModule } from "@angular/core";
import { MatButtonModule,
        MatIconModule,
        MatButtonToggleModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule
    } from "@angular/material"

@NgModule({
    exports: [
        MatButtonModule,
        MatIconModule,
        MatButtonToggleModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule
    ]
})
export class SharedMaterialModule {}