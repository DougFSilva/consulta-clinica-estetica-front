import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { EspecialistaService } from 'src/app/services/especialista.service';

@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.css']
})
export class EspecialistaComponent implements OnInit{

  constructor(
    private service: EspecialistaService,
    private toast: ToastrService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
  }


}
