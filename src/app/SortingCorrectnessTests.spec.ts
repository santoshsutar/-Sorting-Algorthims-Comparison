import { TestBed, async } from '@angular/core/testing';
import { BubbleSort } from './BubbleSort';
import { InsertionSort } from './insertion-sort';
import { ISorter } from "./isorter";
import { MergeSort } from './merge-sort';
import { QuickSort } from './quick-sort';
import { SelectionSort } from './selection-sort';
import { Utitility } from './Utitility';


describe('SortingCorrectnessTests', () => {
    let SortingTypes = [
        new BubbleSort<number>(),
        new InsertionSort<number>(),
        new MergeSort<number>(),
        new QuickSort<number>(),
        new SelectionSort<number>()
    ];

    it('PreSorted', async(() => {
        SortingTypes.forEach(sorter => {
            let presorted = [0, 1, 2, 3, 4, 5, 6, 7];
            sorter.Sort(presorted);
            TestUtitility.AssertArrayIsSorted(presorted);
        });
    }));
    it('AllReversed', async(() => {
        SortingTypes.forEach(sorter => {
            let arr = [7, 6, 5, 4, 3, 2, 1, 0];
            //let arr = [4, 3, 2, 1,0];
            sorter.Sort(arr);
            //console.log(arr);

            TestUtitility.AssertArrayIsSorted(arr);
        });
    }));
    it('SingleOutOfOrder', async(() => {
        SortingTypes.forEach(sorter => {
            let arr = [1, 0, 2, 3, 4];
            sorter.Sort(arr);
            TestUtitility.AssertArrayIsSorted(arr);
        });
    }));

    it('MultipleOutOfOrder', async(() => {
        SortingTypes.forEach(sorter => {
            let arr = [4, 3, 1, 2];
            sorter.Sort(arr);
            TestUtitility.AssertArrayIsSorted(arr);
        });
    }));
    it('RandomValuesSort', async(() => {
        SortingTypes.forEach(sorter => {
            let items = new Array(10);
            for (let i = 0; i < items.length; i++) {
                items[i] = Math.floor(Math.random() * 1000) + 0;
            }

            sorter.Sort(items);
            TestUtitility.AssertArrayIsSorted(items);
        });
    }));
    it('EmptyDoesNotCompareOrSwap', async(() => {
        SortingTypes.forEach(sorter => {
            let items = [];
            sorter.Sort(items);
            TestUtitility.AssertArrayIsSorted(items);
        });
    }));
});

export class TestUtitility {
    public static AssertArrayIsSorted(values: number[]): void {
        let previous = 0;
        values.forEach(current => {
            expect(previous).toBeLessThanOrEqual(current);
            previous = current;
        });
    }
}

