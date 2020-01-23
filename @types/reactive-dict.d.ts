declare var ReactiveDict: ReactiveDictStatic;

declare interface ReactiveDictStatic {
	new <U,T>(initialValue?: T, equalsFunc?: Function): ReactiveDict<U,T>;
}
declare interface ReactiveDict<U,T> {
	get(key: U): T;
	set(key: U, newValue: T): void;
}
