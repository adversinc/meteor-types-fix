declare var ReactiveDict: ReactiveDictStatic;

declare interface ReactiveDictStatic {
	new <U,T>(initialValue?: T, equalsFunc?: Function): ReactiveDict<U,T>;
}
declare interface ReactiveDict<U,T> {
	get(key: U): T;
	set(key: U, newValue: T): void;
}

/**
 * Strict typed version of ReactiveDict.
 *
 * Required since TypeScript does not allow overriding declarations, and
 * @types/Meteor adds its own relaxed ReactiveDict
 */
declare interface StrictDict<U, T extends keyof U = keyof U> extends ReactiveDict<U, T> {
	get(key: T): U[T];
	set(key: T, newValue: U[T]): void;

	setDefault(key: T, value?: U[T]): void;
	equals(key: T, value: U[T] | undefined | null): boolean;
	clear(): void;
	destroy(): void;
}

/**
 * Strictly typing for ReactiveDict's
 */
declare interface StrictDict3<U> {
	get<T extends keyof U>(key: T): U[T] | null;
	set<T extends keyof U>(key: T, value: U[T]): void;
}
