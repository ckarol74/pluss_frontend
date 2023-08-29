import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Column } from 'src/app/core/models/column';
import { IFilter } from 'src/app/core/models/filter';
import { IPaginatedData } from 'src/app/core/models/pagination';
import { TrayService } from './tray.service';

@Component({
  selector: 'app-tray',
  templateUrl: './tray.component.html',
  styleUrls: ['./tray.component.scss'],
})
export class TrayComponent implements OnInit, OnDestroy {
  @Input() url!: string;
  @Input() tableColumns!: Array<Column>;
  @Input() filters!: Array<IFilter>;

  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  public displayedColumns: Array<string> = [];
  public filtersVisible: boolean = false;
  public formFilters!: FormGroup;
  public pageData: IPaginatedData = { data: [], links: {}, meta: {} };

  private onDestroy$ = new Subject();
  private filterState: any;

  constructor(
    private $tray: TrayService,
    private _router: Router,
    private _activetedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._router.events
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((event: any) => {
        if (event instanceof NavigationEnd) this.initValues();
      });
    this.initValues();
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
  }

  initValues() {
    this.formFilters = new FormGroup({});
    for (const filtro of this.filters) {
      this.formFilters.addControl(
        filtro.name,
        new FormControl('', { updateOn: 'change' })
      );
    }
    this.formFilters.valueChanges.subscribe((value) => this.getData());
    this.getData();
  }

  getData(pageEvent?: PageEvent) {
    this.filterState = this._activetedRoute.snapshot.params['state'];
    this.$tray
      .getDataTray(
        `${this.url}/${this.filterState}`,
        {
          page: pageEvent ? pageEvent.pageIndex + 1 : 1,
          limit: pageEvent ? pageEvent.pageSize : 10,
        },
        this.formFilters.value
      )
      .subscribe({
        next: (data: IPaginatedData) => {
          this.pageData = Object.assign({}, data);
          this.dataSource = new MatTableDataSource(this.pageData.data);
        },
      });
  }

  clearFilters() {
    this.formFilters.reset();
  }

  ngOnDestroy() {
    this.onDestroy$.next(null);
    this.onDestroy$.complete();
  }
}
