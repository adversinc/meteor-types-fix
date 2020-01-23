interface SSRStatic {
	compileTemplate(templateName: string, templateContent: string, options?: object): void;
	render(template: string|TemplateStatic, data: object): string;
}

declare var SSR: SSRStatic;
