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

def runturtle(tshape):
    speed(11)
    shape("turtle")

    if "square" in tshape:
        forward(100)
        right(90)
        forward(100)
        right(90)
        forward(100)
        right(90)
        forward(100)
        right(90)
    elif "triangle" in tshape:
        forward(100)
        right(120)
        forward(100)
        right(120)
        forward(100)
    else:
        sys.stderr.write("runturtle(): Unknown tshape\n")

def main():
    retval = 0

    if args.version:
        print("%s %s" % (progname, __version__))
        sys.exit(0)

    runturtle("square")
    input("Press Enter to terminate the poor turtle")

    return retval

if __name__ == "__main__":
    main_result = main()
    sys.exit(main_result)
