import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SucursalService } from '../../../core/services/sucursales.service';
import { Sucursal } from '../../../core/models/user.model';
import { Router } from '@angular/router';
import { sharedImports } from '../../../shared/shared.imports';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
    standalone: true,
    imports: [sharedImports],
    selector: 'app-sucursal-list',
    templateUrl: './sucursal-list.component.html',
    styleUrls: ['./sucursal-list.component.scss']
})
export class SucursalListComponent implements OnInit {
    dataSource = new MatTableDataSource<Sucursal>([]);
    displayedColumns: string[] = ['id_sucursal', 'nombre_sucursal', 'direccion', 'telefono', 'mesas_count', 'actions'];
    isLoading = true;
    error = '';

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        private sucursalService: SucursalService,
        private dialog: MatDialog,
        private snackBar: MatSnackBar,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loadBranches();
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    loadBranches() {
        this.isLoading = true;
        this.sucursalService.getBranches().subscribe(
            (branches) => {
                this.dataSource.data = branches;
                this.isLoading = false;
            },
            (error) => {
                this.error = 'Error al cargar sucursales';
                console.error('Error loading branches', error);
                this.isLoading = false;
            }
        );
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    addBranch() {
        this.router.navigate(['/branches/new']);
    }

    editBranch(branch: Sucursal) {
        this.router.navigate(['/branches/edit', branch.id_sucursal]);
    }

    viewTables(branch: Sucursal) {
        this.router.navigate(['/branches', branch.id_sucursal, 'tables']);
    }

    deleteBranch(branch: Sucursal) {
        const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
            data: {
                title: 'Confirmar eliminación',
                message: `¿Está seguro de eliminar la sucursal ${branch.nombre_sucursal}?`
            }
        });

        confirmDialog.afterClosed().subscribe(result => {
            if (result) {
                this.sucursalService.deleteBranch(branch.id_sucursal).subscribe(
                    () => {
                        this.dataSource.data = this.dataSource.data.filter(b => b.id_sucursal !== branch.id_sucursal);
                        this.snackBar.open('Sucursal eliminada exitosamente', 'Cerrar', {
                            duration: 3000
                        });
                    },
                    (error) => {
                        this.snackBar.open('Error al eliminar sucursal', 'Cerrar', {
                            duration: 3000
                        });
                        console.error('Error deleting branch', error);
                    }
                );
            }
        });
    }
}