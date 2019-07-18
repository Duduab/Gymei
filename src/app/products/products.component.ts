import {Component, OnInit} from '@angular/core';
import {ProductsExpService} from '../Services/products-exp.service';
import {PaydialogComponent} from './paydialog/paydialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product = [];
  price: number = 0;


  constructor(private prodservice: ProductsExpService,
              public dialog: MatDialog) { }

    ngOnInit() {
      this.prodservice.getProducts().subscribe(data => {
        this.product = data;
      });
    }

  openDialog(): void {
      let dialogRef = this.dialog.open(PaydialogComponent, {
        height: '540px',
        width: '500px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });

  }

}
