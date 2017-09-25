all: publish

publish:
	ng build --prod --base-href "https://altaf-ali.github.io/sentry/"
	angular-cli-ghpages

