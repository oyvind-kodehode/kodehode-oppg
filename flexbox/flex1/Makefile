# Makefile
# File ID: 8d560ac2-a5d4-11ec-977a-2fff93d806ad

HTMLFILES  =
HTMLFILES += flex1.html

.PHONY: all
all:

.PHONY: clean
clean:

.PHONY: test
test:
	xmllint --noout $(HTMLFILES)
	tidy -o /dev/null -q $(HTMLFILES)
