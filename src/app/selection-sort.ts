import { Tracker } from "./tracker";
import { ISorter } from "./isorter";

export class SelectionSort<T> extends Tracker<T> implements ISorter<T> {
    Sort(items: T[]): void {
        let sortedRangeEnd = 0;

        while (sortedRangeEnd < items.length) {
            let nextIndex = this.FindIndexOfSmallestFromIndex(items, sortedRangeEnd);
            this.Swap(items, sortedRangeEnd, nextIndex);

            sortedRangeEnd++;
        }
    }
    public FindIndexOfSmallestFromIndex(items: T[], sortedRangeEnd: number): number {
        let currentSmallest = items[sortedRangeEnd];
        let currentSmallestIndex = sortedRangeEnd;

        for (let i = sortedRangeEnd + 1; i < items.length; i++) {
            if (this.Compare(currentSmallest, items[i]) > 0) {
                currentSmallest = items[i];
                currentSmallestIndex = i;
            }
        }

        return currentSmallestIndex;
    }
}
