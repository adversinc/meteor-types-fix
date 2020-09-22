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
declare interface ReactiveDictStrict<U, T> extends ReactiveDict<U, T> {
	get(key: U): T;
	set(key: U, newValue: T): void;

	setDefault(key: U, value?: T): void;
	equals(key: U, value: T | undefined | null): boolean;
	clear(): void;
	destroy(): void;
}
