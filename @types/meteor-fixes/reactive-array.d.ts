declare var ReactiveArray: ReactiveArrayStatic;

declare interface ReactiveArrayStatic {
	new <T>(initialValue?: T[]): ReactiveArray<T>;
}

declare interface ReactiveArray<T> {
	// Methods from Array
	concat(...args: T[]): ReactiveArray<T>;
	indexOf(searchElement: T, fromIndex?: number): number;
	join(separator?: string): string;
	lastIndexOf(searchElement: T, fromIndex?: number): number;
	pop(): T;
	push(...args: T[]): number;
	reverse(): void;
	shift(): T;
	sort(compareFunction?: (a:T, b:T) => number): ReactiveArray<T>;
	splice(index: number, howMany: number, ...args: T[]);
	toString(): string;
	unshift(...args: T[]): number;

	// Native methods
	array(): T[];
	list(): T[];
	depend(): void;
	clear(): void;
}
