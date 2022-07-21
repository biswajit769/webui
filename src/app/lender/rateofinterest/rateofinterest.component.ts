import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LenderserviceService } from '../../services/lenderservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-rateofinterest',
  templateUrl: './rateofinterest.component.html',
  styleUrls: ['./rateofinterest.component.css']
})
export class RateofinterestComponent implements OnInit {
  @ViewChild('rateintrest') rateintrest: ElementRef;
  statePreferences = [
    { id: 'Andhra Pradeshadesh', genre: 'Andhra Pradeshadesh' },
    { id: 'Arunachal Pradesh', genre: 'Arunachal Pradesh' },
    { id: 'Assam', genre: 'Assam' },
    { id: 'Bihar', genre: 'Bihar' },
    { id: 'Chhattisgarh', genre: 'Chhattisgarh' },
    { id: 'Goa', genre: 'Goa' },
    { id: 'Gujarat', genre: 'Gujarat' },
    { id: 'Haryana', genre: 'Haryana' },
    { id: 'Himachal Pradesh', genre: 'Himachal Pradesh' },
    { id: 'Jammu and Kashmir', genre: 'Jammu and Kashmir' },
    { id: 'Jharkhand', genre: 'Jharkhand' },
    { id: 'Karnataka', genre: 'Karnataka' },
    { id: 'Kerala', genre: 'Kerala' },
    { id: 'Madya Pradesh', genre: 'Madya Pradesh' },
    { id: 'Manipur', genre: 'Manipur' },
    { id: 'Meghalaya', genre: 'Meghalaya' },
    { id: 'Mizoram', genre: 'Mizoram' },
    { id: 'Nagaland', genre: 'Nagaland' },
    { id: 'Orissa', genre: 'Orissa' },
    { id: 'Punjab', genre: 'Punjab' },
    { id: 'Rajasthan', genre: 'Rajasthan' },
    { id: 'Sikkim', genre: 'Sikkim' },
    { id: 'Tamil Nadu', genre: 'Tamil Nadu' },
    { id: 'Telagana', genre: 'Telagana' },
    { id: 'Tripura', genre: 'Tripura' },
    { id: 'Uttaranchal', genre: 'Uttaranchal' },
    { id: 'Uttar Pradesh', genre: 'Uttar Pradesh' },
    { id: 'West Bengal', genre: 'West Bengal' },
  ];
  get rateForm() { return this.RateOfInterstForm.controls; }
  stateForm: FormGroup;
  RateOfInterstForm: FormGroup;
  submitted = false;
  updaterateinterestloader = false
  updated = false

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router,
    private rateofinterstservice: LenderserviceService, ) {
    // Create a FormControl for each available music preference, initialize them as unchecked, and put them in an array
    const formControls = this.statePreferences.map(control => new FormControl(false));

    // Create a FormControl for the select/unselect all checkbox
    const selectAllControl = new FormControl(false);

    // Simply add the list of FormControls to the FormGroup as a FormArray, add the selectAllControl separetely
    this.stateForm = this.fb.group({
      statePreferences: new FormArray(formControls),
      selectAll: selectAllControl
    });
  }
  public rateofinterests = ['0.5', '0.8', '1.0', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2.0', '2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '2.8', '2.9', '3.0']

  ngOnInit() {
    this.onChanges();
    this.RateOfInterstForm = this.fb.group({
      rateinterest: ['', Validators.required],
    });
  }
  ok() {
    $(this.rateintrest.nativeElement).modal('hide');
  }
  saveinterest(RateOfInterstForm: any): void {
    this.updaterateinterestloader = true;
    console.log(RateOfInterstForm.value);
    var data = { rateofinterest: RateOfInterstForm.value.rateinterest };
    this.submitted = true;
    if (this.RateOfInterstForm.invalid) {
      return;
    }

    this.rateofinterstservice.rateofinterestsave(data).subscribe(data => {
      console.log("dataaaaaaaa", data)
      this.router.navigate(['lender']);
      this.updaterateinterestloader = false;
      this.updated = true;

    });
  }
  onChanges(): void {
    // Subscribe to changes on the selectAll checkbox
    this.stateForm.get('selectAll').valueChanges.subscribe(bool => {
      this.stateForm
        .get('statePreferences')
        .patchValue(Array(this.statePreferences.length).fill(bool), { emitEvent: false });
    });
    // Subscribe to changes on the music preference checkboxes
    this.stateForm.get('statePreferences').valueChanges.subscribe(val => {
      const allSelected = val.every(bool => bool);
      if (this.stateForm.get('selectAll').value !== allSelected) {
        this.stateForm.get('selectAll').patchValue(allSelected, { emitEvent: false });
      }
    });
  }
  selectStates() {
    // Filter out the unselected ids
    const selectedPreferences = this.stateForm.value.statePreferences
      .map((checked, index) => checked ? this.statePreferences[index].id : null)
      .filter(value => value !== null);
    console.log(selectedPreferences);
    this.rateofinterstservice.selectrateState(selectedPreferences).subscribe(data =>
      console.log("datanew", data)
    );
    console.log(selectedPreferences);
  }

}