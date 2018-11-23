import { Tracker } from "./tracker";

export interface ISorter<T> extends Tracker<T> {
    Sort(items: T[]): void;
}
