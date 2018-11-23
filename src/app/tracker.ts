
export interface IPerformanceTracker {
    Comparisons: number;
    Swaps: number;
    Reset(): void;
}

export class Tracker<T> implements IPerformanceTracker {

    /**
     *
     */
    constructor() {
        this._Comparisons=0;
        this._Swaps=0;
    }
    public get Comparisons(): number {
        return this._Comparisons;
    }
    public get Swaps(): number {
        return this._Swaps
    }
    _Comparisons: number;
    _Swaps: number;

    public Reset(): void {
        this._Comparisons = 0;
        this._Swaps = 0;
    }
    protected Swap(items: T[], left: number, right: number): void {
        if (left != right) {
            this._Swaps++;
            let temp = items[left];
            items[left] = items[right];
            items[right] = temp;
        }
    }
    protected Assign(items: T[], index: number, value: T): void {
        items[index] = value;
        this._Swaps++;
    }

    protected Compare(lhs: T, rhs: T): number {
        this._Comparisons++;
        return lhs > rhs ? 1 : -1;
    }
}
