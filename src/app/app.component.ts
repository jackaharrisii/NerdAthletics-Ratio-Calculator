import { Component } from '@angular/core';
import { Ratios } from 'src/assets/ratios';
// import ratios from '../assets/ratios';

interface Ratio {
  id: Number;
  baseLift: String;
  ratio: Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NerdAthleticsRatioCalculator';
  // ratios = 
  ratios = [
    {
        "id": 1,
        "baseLift": "Snatch",
        "ratio": 0.80
    },
    {
        "id": 2,
        "baseLift": "Seated Press",
        "ratio": 0.55
    },
    {
        "id": 3,
        "baseLift": "Clean",
        "ratio": 1.02
    },
    {
        "id": 4,
        "baseLift": "Jerk",
        "ratio": 1.05
    },
    {
        "id": 5,
        "baseLift": "Front Squat",
        "ratio": 1.15
    },
    {
        "id": 6,
        "baseLift": "Back Squat",
        "ratio": 1.35
    },
    {
        "id": 7,
        "baseLift": "Overhead Squat",
        "ratio": 0.84
    },
    {
        "id": 8,
        "baseLift": "Power Snatch",
        "ratio": 0.64
    },
    {
        "id": 9,
        "baseLift": "Power Clean",
        "ratio": 0.816
    },
    {
        "id": 10,
        "baseLift": "Snatch from Blocks Above the Knee",
        "ratio": 0.76
    },
    {
        "id": 11,
        "baseLift": "Clean from Blocks Above the Knee",
        "ratio": 0.969
    },
    {
        "id": 12,
        "baseLift": "Snatch from Blocks Below the Knee",
        "ratio": 0.76
    },
    {
        "id": 13,
        "baseLift": "Clean from Blocks Below the Knee",
        "ratio": 0.969
    }
];
}
