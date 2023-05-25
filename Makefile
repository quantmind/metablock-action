.PHONY: help update

help:
	@echo ======================================================================================
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'
	@echo ======================================================================================


image:		## Build image
	@docker build -t metablock-action .

terminal:	## Terminal
	@docker run -it --rm metablock-action bash


outdated:		## Outdated dependencies
	@cd example && yarn outdated

update:		## Update dependencies
	@cd example && yarn upgrade --latest
