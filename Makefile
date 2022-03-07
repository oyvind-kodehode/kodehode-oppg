# Makefile
# File ID: b48a7e4a-9a06-11ec-96d4-d9d22b540f2c

.PHONY: all
all:
	cd javascript && $(MAKE)
	cd oppg && $(MAKE)
	cd svg && $(MAKE)

.PHONY: clean
clean:
	cd javascript && $(MAKE) clean
	cd oppg && $(MAKE) test
	cd svg && $(MAKE) clean

.PHONY: test
test:
	cd javascript && $(MAKE) test
	cd oppg && $(MAKE) test
	cd svg && $(MAKE) test
