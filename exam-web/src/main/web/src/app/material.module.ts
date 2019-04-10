import { NgModule } from "@angular/core";
import { myPaginator} from './common/question-paginator';
import { MatButtonModule,
        MatIconModule,
        MatButtonToggleModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatPaginatorIntl,
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
    ],
    // providers: [
    //     { provide: MatPaginatorIntl, useValue: myPaginator()}
    // ]
})
export class SharedMaterialModule {}