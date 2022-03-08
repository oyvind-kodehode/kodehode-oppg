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
parser.add_argument('-e', '--edges', metavar="NUM", type=int,
                    default=4, help='number of edges in shape')
parser.add_argument('-s', '--speed', metavar="SPEED", type=int,
                    default=10, help='speed of turtle')
parser.add_argument('-v', '--verbose', action='count',
                    default=0, help='verbose level, can be repeated')
parser.add_argument('--version', action='count',
                    default=0, help='print version information')
args = parser.parse_args()

def runturtle(edges):
    if edges < 2:
        sys.stderr.write("runturtle(): edges cannot be lower than 2\n")
        return 0

    speed(args.speed)
    shape("turtle")

    for i in range(edges):
        forward(100)
        right(360/edges)

    return edges

def main():
    retval = 0

    if args.version:
        print("%s %s" % (progname, __version__))
        sys.exit(0)

    if runturtle(args.edges):
        input("Press Enter to terminate the poor turtle")
    else:
        retval = 1

    return retval

if __name__ == "__main__":
    main_result = main()
    sys.exit(main_result)
