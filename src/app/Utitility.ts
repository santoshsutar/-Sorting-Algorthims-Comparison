
export class Utitility {

    public static ArrayCopy<T>(source: Array<T>, sourceIndex: number, destinationArray: Array<T>, destinationIndex: number, length: number): void {
        let size = 1;
        for (let index = 0; index < source.length; index++) {
            if (index >= sourceIndex && size <= length) {
                const element = source[index];
                destinationArray[destinationIndex] = element;
                destinationIndex++;
                size++;
            }
        }
    }
    public static ArrayFullCopy<T>(source: Array<T>, destinationArray: Array<T>, length: number): void {
        let size = 1;
        for (let index = 0; index < source.length; index++) {
            destinationArray[index] = source[index];

        }
    }
}