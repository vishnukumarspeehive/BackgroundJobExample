import { LocationService } from './../../../proxy/locations/location.service';
import { LocationDto } from './../../../proxy/locations/models';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
//import { CriticalService, CriticalDto } from '@proxy/criticals';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  providers: [ListService],
})
export class LocationComponent implements OnInit {
  location: PagedResultDto<{}>;
  Location = { items: [], totalCount: 0 } as PagedResultDto<LocationDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedLocation = {} as LocationDto;

  constructor(public readonly list: ListService,
     private locationService: LocationService,
      private fb: FormBuilder,
      private confirmation: ConfirmationService
      ) {}

  ngOnInit() {
    const locationStreamCreator = (query) => this.locationService.getList(query);

    this.list.hookToQuery(locationStreamCreator).subscribe((response) => {
      this.location = response;
    });
  }
  createLocation() {
    this.selectedLocation = {} as LocationDto;
    this.buildForm();
    this.isModalOpen = true;
  }
  editLocation(id: string) {
    this.locationService.get(id).subscribe((location) => {
      this.selectedLocation = location;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      locationName: [this.selectedLocation.locationName || '', Validators.required],
      
    });
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedLocation.id) {
      this.locationService
        .update(this.selectedLocation.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.locationService.create(this.form.value).subscribe(() => {
        this.isModalOpen = false;
        this.form.reset();
        this.list.get();
      });
    }
  }
  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure')
        .subscribe((status) => {
          if (status === Confirmation.Status.confirm) {
            this.locationService.delete(id).subscribe(() => this.list.get());
          }
	    });
  }
}
