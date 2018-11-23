import { Tracker } from "./tracker";
import {ISorter } from "./isorter";
export class BubbleSort<T> extends Tracker<T> implements ISorter<T>   {
    public Sort(items: T[]): void {
        let swapped: boolean;

        do {
            swapped = false;
            for (let i = 1; i < items.length; i++) {
                if (this.Compare(items[i - 1], items[i]) > 0) {
                    this.Swap(items, i - 1, i);
                    swapped = true;
                }
            }
        } while (swapped != false);
    }
}
