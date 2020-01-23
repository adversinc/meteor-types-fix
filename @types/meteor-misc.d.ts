// This one is to fix errors in 'Template.instance().something'
interface TemplateStatic {
	instance(): any;
}

declare module Meteor {
	function callPromise<T>(name: string, ...args: any[]): Promise<T>;
	function _sleepForMs(ms: number): void;
}

declare module Blaze {
	interface EventsMap {
		// helper for event entries
		[key: string]: (event: MouseEvent, template: Template) => void;
	}
}
