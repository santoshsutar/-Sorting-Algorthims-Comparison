import { TestBed, async } from '@angular/core/testing';
import { BubbleSort } from './BubbleSort';



describe('BubbleSortTests', () => {

    it('PreSortedDoesNotSwap', async(() => {

        let sort = new BubbleSort<number>();
        let presorted = [0, 1, 2, 3, 4, 5, 6, 7];
        sort.Sort(presorted);

        expect(sort.Comparisons).toEqual(7);
        expect(sort.Swaps).toEqual(0);

    }));
    it('EmptyDoesNotCompareOrSwap', async(() => {

        let sort = new BubbleSort<number>();
        let presorted = [];
        sort.Sort(presorted);

        expect(sort.Comparisons).toEqual(0);
        expect(sort.Swaps).toEqual(0);

    }));

    it('SingleDoesNotCompareOrSwap', async(() => {

        let sort = new BubbleSort<number>();
        let presorted = [1];
        sort.Sort(presorted);

        expect(sort.Comparisons).toEqual(0);
        expect(sort.Swaps).toEqual(0);

    }));

    it('SingleOutOfOrder', async(() => {

        let sort = new BubbleSort<number>();
        let presorted = [1, 0, 2, 3, 4];
        sort.Sort(presorted);

        expect(sort.Comparisons).toEqual(8);
        expect(sort.Swaps).toEqual(1);

    }));

    it('MultipleOutOfOrder', async(() => {

        let sort = new BubbleSort<number>();
        let presorted = [4, 3, 1, 2];
        sort.Sort(presorted);

        expect(sort.Comparisons).toEqual(9);
        expect(sort.Swaps).toEqual(5);

    }));

    it('LargeGeneratedArray', async(() => {

        let items = new Array(1000);
        for (let i = 0; i < items.length; i++) {
            items[i] = Math.floor(Math.random() * 1000) + 0;
        }
        let sort = new BubbleSort<number>();
        sort.Sort(items);
        expect(sort.Comparisons).toBeGreaterThanOrEqual(items.length);
        sort.Reset();

        sort.Sort(items);
        expect(sort.Comparisons).toEqual(items.length - 1);
        expect(sort.Swaps).toEqual(0);
    }));
});