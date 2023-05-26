.PHONY: help update

.PHONY: help
help:
	@echo ======================================================================================
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'
	@echo ======================================================================================


.PHONY: image
image:			## Build image
	@docker build -t metablock-action .

.PHONY: terminal
terminal:		## Terminal
	@docker run -it --rm metablock-action bash


.PHONY: build-example
build-example:		## Build example
	@cd example && yarn && yarn build

.PHONY: outdated-example
outdated-example:	## Outdated example dependencies
	@cd example && yarn outdated

.PHONY: update-example
update-example:		## Update example dependencies
	@cd example && yarn upgrade --latest
