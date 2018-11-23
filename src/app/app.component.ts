import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { BubbleSort } from './BubbleSort';
import { InsertionSort } from './insertion-sort';
import { MergeSort } from './merge-sort';
import { QuickSort } from './quick-sort';
import { SelectionSort } from './selection-sort';
import { Utitility } from './Utitility';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Bar chart:
    
    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ["BubbleSort", "InsertionSort", "MergeSort", "QuickSort", "SelectionSort"],
        datasets: [{
          label: '# of Votes',
          data: [9, 7, 3, 5, 2, 100],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Bar Chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    this.BarChart.data.datasets[0].data = [];
  }
  title = 'Sorting Algorthims Comparison';
  BarChart: Chart;
  public selectedDataOrder: string;
  public selectedOperation: string;
  public ItemCount:number;
  /**
   * Execute
   */
  public Execute(): void {
    //console.log("dsfa");

    this.GraphPoints(this.ItemCount);
  }
  private GetSortedPoints(count: number): number[] {
    let points = [count];

    for (let i = 0; i < count; i++) {
      points[i] = i;
    }

    return points;
  }
  private GraphPoints(count: number): void {
    let points = [];
    //console.log(this.selectedDataOrder);

    switch (this.selectedDataOrder) {
      case "Random":
        points = this.GetRandomPoints(count);
        break;
      case "Sorted":
        points = this.GetSortedPoints(count);
        break;
      case "Reversed":
        points = this.GetReversedPoints(count);
        break;
      default:
        points = [0];
        break;
    }
    let algorithms = [
      new BubbleSort<number>(),
      new InsertionSort<number>(),
      new MergeSort<number>(),
      new QuickSort<number>(),
      new SelectionSort<number>()
    ];

    this.BarChart.data.datasets[0].data = [];
    algorithms.forEach(algorithm => {
      let cloned = [points.length];
      Utitility.ArrayFullCopy(points, cloned, points.length);

      algorithm.Sort(cloned);
      //Series series = chart1.Series.Add(algorithm.GetType().Name);
      //console.log(this.selectedOperation);

      if (this.selectedOperation == "Comparisons") {
        //console.log(algorithm.Comparisons);

        this.BarChart.data.datasets[0].data.push(algorithm.Comparisons);
        // series.Points.Add(new double[] { algorithm.Comparisons });
      }
      else {
        this.BarChart.data.datasets[0].data.push(algorithm.Swaps);
      }
    });
    console.log(this.BarChart.data.datasets[0].data);
    this.BarChart.update();
  }
  private GetReversedPoints(count: number): number[] {
    let points = [count];

    let current = 0;
    for (let i = count - 1; i >= 0; i--) {
      points[current++] = i;
    }

    return points;
  }
  private randomIntFromInterval(min, max) // min and max included
  {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  private GetRandomPoints(count: number): number[] {
    let points = [count];

    for (let i = 0; i < count; i++) {
      points[i] = this.randomIntFromInterval(0, 1000);
    }

    return points;
  }


}
