import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { BrandsService } from 'src/app/services/brands/brands.service';
import { PayloadService } from 'src/app/services/payload/payload.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class CrudListComponent implements OnInit {
  payloadDialog: boolean;
  payloadData: any;
  payloads: any[];
  moment: any = moment;
  payload: any;
  selectedPayloads: any[];
  selectedMedias = [];
  submitted: boolean;
  selectedCategories: any[];
  mediaCheckedTest = false;
  medias: any[];
  brands: any[];
  value: boolean = false;

  constructor(
    private payloadService: PayloadService,
    private messageService: MessageService,
    private brandsService: BrandsService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.medias = [
      {
        mediaId: 1,
        name: 'LABELING_PACKAGING',
        value: 'Labeling/Packaging',
        checked: false,
      },
      {
        mediaId: 2,
        name: 'NEW_PRODUCT_INNOVATION',
        value: 'New Product/innovation',
        checked: false,
      },
      {
        mediaId: 3,
        name: 'OOH',
        value: 'OOH',
        checked: false,
      },
      {
        mediaId: 4,
        name: 'Radio',
        value: 'Radio',
        checked: false,
      },
      {
        mediaId: 5,
        name: 'Print',
        value: 'Print',
        checked: false,
      },
      {
        mediaId: 6,
        name: 'PROMOTIONS',
        value: 'Promotions',
        checked: false,
      },
      {
        mediaId: 7,
        name: 'RADIO',
        value: 'Radio',
        checked: false,
      },
      {
        mediaId: 12,
        name: 'COLLABORATION',
        value: 'Collaboration',
        checked: false,
      },
    ];
    this.brandsService.getBrands().then((data) => {
      this.brands = data;
    });
    this.payloadService.getPayloads().then((data: any) => {
      this.payloadData = data;
      this.payloads = data.requests;
      this.payloads.forEach((element) => {
        if (element.createdDate) {
          element.createdDate = new Date(element.createdDate);
        }
        if (element.updatedDate) {
          element.updatedDate = new Date(element.updatedDate);
        }
      });
    });
  }

  openNew() {
    this.payload = {};
    this.medias.forEach((element) => {
      element.checked = false;
    });
    this.submitted = false;
    this.payloadDialog = true;
  }

  deleteselectedPayloads() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected payloads?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.payloads = this.payloads.filter(
          (val) => !this.selectedPayloads.includes(val)
        );
        this.selectedPayloads = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Payloads Deleted',
          life: 3000,
        });
      },
    });
  }

  filter(event) {
    if (event.value === null) {
      this.payloadService.getPayloads().then((data: any) => {
        this.payloads = data.requests;
      });
    } else {
      this.payloads = this.payloads.filter(function (obj) {
        return obj.brand.name == event.value.name;
      });

      console.log(this.payloads);
    }
  }

  editPayload(payload: any) {
    this.payload = { ...payload };
    if (this.payload.media.length > 0) {
      this.payload.media.forEach((element) => {
        console.log('element', element);
        let getObj = this.medias.filter(function (obj) {
          return obj.mediaId === element.mediaId;
        });
        getObj[0].checked = true;
      });
    }
    this.payloadDialog = true;
  }

  deletePayload(payload: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + payload.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log('aezaeza', payload);

        this.payloads = this.payloads.filter(
          (val) => val.requestId !== payload.requestId
        );
        this.payload = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Payload Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.payloadDialog = false;
    this.submitted = false;
  }

  savePayload() {
    this.submitted = true;

    this.medias.forEach((element) => {
      if (element.checked === true) {
        this.mediaCheckedTest = true;
      }
    });

    if (this.payload.campaignName?.trim() && this.mediaCheckedTest) {
      this.payloads[this.findIndexById(this.payload.requestId)] = this.payload;
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Payload Updated',
        life: 3000,
      });

      this.payloads = [...this.payloads];
      this.payloadDialog = false;
      this.payload = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.payloads.length; i++) {
      if (this.payloads[i].requestId === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  addMedia($event, media) {
    if ($event.checked === true) {
      this.selectedMedias = this.selectedMedias.concat(media);
    } else {
      this.selectedMedias = this.selectedMedias.filter(function (value: any) {
        return value.mediaId != media.mediaId;
      });
    }
    console.log('this.payload0', this.payload);
  }

  found(media) {
    console.log('media', media);

    this.medias.find((obj): any => {
      if (obj.mediaId == media.mediaId) return obj;
    });
  }
}
