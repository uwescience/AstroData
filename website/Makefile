.PHONY: clean gen serve

all: clean gen

gen:
	hyde gen

serve: clean gen
	hyde serve

clean:
	rm -rf deploy deploy_production

update: gen

publish:
	hyde gen -c production.yaml
#	rsync -e ssh -r deploy_production/ gateway.astro.washington.edu:/www/astro/users/vanderplas/html/Astr599/
