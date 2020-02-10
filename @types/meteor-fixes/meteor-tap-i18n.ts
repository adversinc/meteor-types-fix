declare module "meteor/tap:i18n" {
	export var TAPi18n: {
		setLanguage(language: string);

		__(v: string): string;
	}
}
