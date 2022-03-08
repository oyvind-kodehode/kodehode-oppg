#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""myturtle.py - Experiments with turtle.py

File ID: 278c890a-9ec2-11ec-82b4-f7ce64ad7ea4

License: GNU General Public License version 2 or later.
Author: Øyvind <oyvind.kodehode@gmail.com>

"""

import argparse
import os
import sys

progname = os.path.basename(__file__)
__version__ = '0.0.0'

parser = argparse.ArgumentParser(
    description='',
    )
parser.add_argument('-v', '--verbose', action='count',
                    default=0, help='verbose level, can be repeated')
parser.add_argument('--version', action='count',
                    default=0, help='print version information')
args = parser.parse_args()

def main():
    retval = 0

    if args.version:
        print("%s %s" % (progname, __version__))
        sys.exit(0)

    return retval

if __name__ == "__main__":
    main_result = main()
    sys.exit(main_result)
