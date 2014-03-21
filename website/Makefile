GITUSER=uwescience
REPONAME=AstroData
OUTPUTDIR = deploy_production

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
	if test -d _build; \
	then echo " (_build directory exists)"; \
	else mkdir _build; \
	fi
	if test -d _build/$(REPONAME); \
	then echo "  (repository directory exists)"; \
	else cd _build && git clone git@github.com:$(GITUSER)/$(REPONAME).git; \
	fi
	cd _build/$(REPONAME) && git checkout gh-pages && git pull;
	rsync -r $(OUTPUTDIR)/* _build/$(REPONAME)/
	cd _build/$(REPONAME) && git add . && git commit -m "update site"
	cd _build/$(REPONAME) && git push origin gh-pages
