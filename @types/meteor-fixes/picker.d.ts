declare module 'meteor/meteorhacks:picker' {
	export interface Picker {
		middleware(...args : any[]),
		filter(...args : any[]),
	}

	export const Picker: Picker;
}
