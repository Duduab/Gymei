import {Component, OnInit , Input,ElementRef} from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent implements OnInit {

  BMI = [{weight: null, height: null}];
  BNI_RES: string = null;
  m: number = null;
  BMI_UNDER: string = 'UNDERWEIGHT - in your BNI it is important to establish a good program to help you reach and maintain your ideal frame.';
  BMI_NORMAL: string = 'NORMAL - your BNI is perfect, lets Focused on Your body shaping.';
  BMI_OVER: string = 'OVERWEIGHT -We help you to lose weight and change the way you feel about yourself, boost your mood, and improve your health.';
  @Input() BMICalc: number;
  boolbni: boolean = true;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  OnBmiCalc(data: { weight: number, height: number }) {
    this.BMI.push({
      weight: data.weight,
      height: data.height
    });
    this.boolbni = false;
    this.BMICalc = data.weight / (data.height * data.height);
    if (this.BMICalc < 18.5) {
      this.BNI_RES = this.BMI_UNDER;
      this.m = 0;

    }
    if (this.BMICalc >= 18.5 && this.BMICalc <= 25) {
      this.BNI_RES = this.BMI_NORMAL;
      this.m = 1;
    }
    if (this.BMICalc > 25) {
      this.BNI_RES = this.BMI_OVER;
      this.m = 2;
    }
  }

}

