# Makefile
# File ID: b48a7e4a-9a06-11ec-96d4-d9d22b540f2c

HTMLFILES  =
HTMLFILES += norsk_flagg.html
HTMLFILES += w3schools-js.html

.PHONY: all
all:

.PHONY: clean
clean:

.PHONY: test
test:
	xmllint --noout $(HTMLFILES)
	tidy -o /dev/null -q $(HTMLFILES)
