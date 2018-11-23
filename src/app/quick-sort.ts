import { Tracker } from "./tracker";
import { ISorter } from "./isorter";

export class QuickSort<T> extends Tracker<T> implements ISorter<T> {
    Sort(items: T[]): void {
        this.quicksort(items, 0, items.length - 1);
    }
    private randomIntFromInterval(min, max) // min and max included
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    private quicksort(items: T[], left: number, right: number): void {
        if (left < right) {
            //console.log("Left" + left);
            //console.log("right" + right);
            //let leftSize = items.length / 2;
            //if ((items.length % 2)==1) {
            //  leftSize+=.5;
            // }

            let pivotIndex = this.randomIntFromInterval(left,right);//_pivotRng.Next(left, right);
            //let pivotIndex=leftSize;
            let newPivot = this.partition(items, left, right, pivotIndex);
            //console.log(pivotIndex);

            this.quicksort(items, left, newPivot - 1);
            this.quicksort(items, newPivot + 1, right);
        }
    }

    partition(items: T[], left: number, right: number, pivotIndex: number): number {
        let pivotValue = items[pivotIndex];

        this.Swap(items, pivotIndex, right);

        let storeIndex = left;

        for (let i = left; i < right; i++) {
            if (this.Compare(items[i], pivotValue) < 0) {
                this.Swap(items, i, storeIndex);
                storeIndex += 1;
            }
        }
        this.Swap(items, storeIndex, right);
        return storeIndex;
    }
}
