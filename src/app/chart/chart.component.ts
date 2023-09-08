import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  // ...

  // ...
  constructor() {}

  ngOnInit(): void {
    Chart.register(...registerables);

    // const ctx = document.getElementById('myLineChart').getContext('2d');
    // const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    // gradient.addColorStop(0, '#8A74F9');
    // gradient.addColorStop(0.8428, 'rgba(138,116,249,0.26)');
    // gradient.addColorStop(1.7589, 'rgba(138,116,249,0)');

    const myLineChart = new Chart('myLineChart', {
      type: 'line',
      data: {
        labels: [
          'يناير',
          'فبراير',
          'مارس',
          'ابريل',
          'مايو',
          'يونية',
          'يوليو',
          'اغسطس',
          'سبتمبر',
          'اكتوبر',
          'نوفمبر',
          'ديسمبر',
        ],
        datasets: [
          {
            label: 'عدد مرات الاستخدام',
            backgroundColor: '#8A74F9',
            borderColor: '#8A74F9',
            data: [
              67, 10, 5, 70, 20, 30, 45, 2, 45, 80, 33, 21, 47, 18, 4,
            ] /*must be filled by api*/,
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: true
            }
          }
        }
      }
      },

  )};
}
