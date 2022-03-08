#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""myturtle.py - Experiments with turtle.py

File ID: 278c890a-9ec2-11ec-82b4-f7ce64ad7ea4

Author: Øyvind <oyvind.kodehode@gmail.com>

"""

from turtle import *
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

def runturtle(edges):
    speed(11)
    shape("turtle")

    if edges == 0:
        sys.stderr.write("runturtle(): edges cannot be 0\n")

    for i in range(edges):
        forward(100)
        right(360/edges)

def main():
    retval = 0

    if args.version:
        print("%s %s" % (progname, __version__))
        sys.exit(0)

    runturtle(4)
    input("Press Enter to terminate the poor turtle")

    return retval

if __name__ == "__main__":
    main_result = main()
    sys.exit(main_result)
