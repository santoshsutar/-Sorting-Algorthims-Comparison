import { Tracker } from "./tracker";
import { ISorter } from "./isorter";

export class InsertionSort<T> extends Tracker<T> implements ISorter<T> {


    public Sort(items: T[]): void {
        let sortedRangeEndIndex = 1;

        while (sortedRangeEndIndex < items.length) {
            if (this.Compare(items[sortedRangeEndIndex], items[sortedRangeEndIndex - 1]) < 0) {
                let insertIndex = this.FindInsertionIndex(items, items[sortedRangeEndIndex]);
                this.Insert(items, insertIndex, sortedRangeEndIndex);
            }

            sortedRangeEndIndex++;
        }
    }

    private FindInsertionIndex(items: T[], valueToInsert: T): number {
        for (let index = 0; index < items.length; index++) {
            if (this.Compare(items[index], valueToInsert) > 0) {
                return index;
            }
        }

        throw new Error("The insertion index was not found");
    }
    private Insert(itemArray: T[], indexInsertingAt: number, indexInsertingFrom: number): void {
        // itemArray =       0 1 2 4 5 6 3 7
        // insertingAt =     3
        // insertingFrom =   6
        // actions
        //  1: store index at in temp     temp = 4
        //  2: set index at to index from  -> 0 1 2 3 5 6 3 7   temp = 4
        //  3: walking backwards from index from to index at + 1
        //     shift values from left to right once
        //     0 1 2 3 5 6 6 7   temp = 4
        //     0 1 2 3 5 5 6 7   temp = 4
        //  4: write temp value to index at + 1
        //     0 1 2 3 4 5 6 7   temp = 4

        // Step 1
        let temp = itemArray[indexInsertingAt];

        // Step 2

        this.Assign(itemArray, indexInsertingAt, itemArray[indexInsertingFrom]);

        // Step 3
        for (let current = indexInsertingFrom; current > indexInsertingAt; current--) {
            this.Assign(itemArray, current, itemArray[current - 1]);
        }

        // Step 4
        this.Assign(itemArray, indexInsertingAt + 1, temp);
    }

}
