declare module Meteor {
	function callPromise<T>(name: string, ...args: any[]): Promise<T>;
	function _sleepForMs(ms: number): void;
}
