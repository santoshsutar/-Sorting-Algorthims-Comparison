import { Tracker } from "./tracker";
import { ISorter } from "./isorter";
import { Utitility } from "./Utitility";

export class MergeSort<T> extends Tracker<T> implements ISorter<T> {
    Sort(items: T[]): void {
        if (items.length <= 1) {
            return;
        }
        
        let leftSize = items.length / 2;
        if ((items.length % 2)==1) {
            leftSize+=.5;
        }
        let rightSize = items.length - leftSize;
        //console.log(leftSize);
        let left = new Array<T>(leftSize);
        let right = new Array<T>(rightSize);     
        
        
        Utitility.ArrayCopy(items, 0, left, 0, leftSize);
        Utitility.ArrayCopy(items, leftSize, right, 0, rightSize);

        this.Sort(left);
        this.Sort(right);
        this.Merge(items, left, right);
    }
    

    private Merge(items: T[], left: T[], right: T[]): void {
        let leftIndex = 0;
        let rightIndex = 0;
        let targetIndex = 0;

        let remaining = left.length + right.length;

        while (remaining > 0) {
            if (leftIndex >= left.length) {
                this.Assign(items, targetIndex, right[rightIndex++]);
            }
            else if (rightIndex >= right.length) {
                this.Assign(items, targetIndex, left[leftIndex++]);
            }
            else if (this.Compare(left[leftIndex], right[rightIndex]) < 0) {
                this.Assign(items, targetIndex, left[leftIndex++]);
            }
            else {
                this.Assign(items, targetIndex, right[rightIndex++]);
            }
            targetIndex++;
            remaining--;
        }
    }

}
