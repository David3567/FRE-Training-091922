import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-selectall',
  templateUrl: './selectall.component.html',
  styleUrls: ['./selectall.component.scss'],
})
export class SelectallComponent implements OnInit, OnDestroy {
  itemlist: string[] = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ];
  form!: FormGroup;
  selectedValues: string[] = [];
  private notifier = new Subject();

  get options(): FormGroup {
    return this.form.get('options') as FormGroup;
  }
  get selectall(): FormControl {
    return this.form.get('selectall') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      selectall: false,
      options: this.fb.group(
        this.itemlist.reduce((acc: any, cur) => {
          acc[cur] = false;
          return acc;
        }, {})
      ),
    });
    this.trackallitem();
    this.selectAllHandler();
  }
  ngOnDestroy(): void {
    this.stopObs();
  }

  //* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ helper
  private selectAllHandler() {
    this.selectall.valueChanges
      .pipe(takeUntil(this.notifier))
      .subscribe((val) => {
        this.setAllItemsValue(val);
      });
  }
  private trackallitem() {
    this.itemlist.forEach((item: string) => {
      this.options
        .get(item)
        ?.valueChanges.pipe(takeUntil(this.notifier))
        .subscribe((val: any) => {
          if (val && !this.selectedValues.includes(item)) {
            this.selectedValues.push(item);
          } else if (!val) {
            this.selectedValues = this.selectedValues.filter(
              (str) => str !== item
            );
          }

          this.selectall.setValue(
            this.selectedValues.length === this.itemlist.length,
            { emitEvent: false }
          );
        });
    });
  }
  private setAllItemsValue(boo: boolean) {
    Object.values(this.options.controls).forEach((control: AbstractControl) => {
      control.setValue(boo);
    });
  }
  private stopObs() {
    this.notifier.next(null);
    this.notifier.complete();
  }
}
