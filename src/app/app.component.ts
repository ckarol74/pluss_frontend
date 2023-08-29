import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { LoaderService } from './core/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked {
  title = 'Pluss';

  constructor(
    public $loader: LoaderService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }
}
