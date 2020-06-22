.PHONY: help update

help:
	@echo ======================================================================================
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'
	@echo ======================================================================================


image:		## Build image
	@docker build -t metablock-action .


update:		## Update dependencies
	@yarn upgrade --latest
