import sqlite3
import csv
import argparse
import os


def parse_arguments():
    parser = argparse.ArgumentParser()
    parser.add_argument('--db', help='Full path to sqlite database')
    parser.add_argument('--table', help='name of the table to dump')
    parser.add_argument('--out', help='path to CSV file to write')
    parser.add_argument('-f', '--force', action='store_true', help='overwrite CSV file if it exists')
    args = parser.parse_args()

    if args.out is None:
        args.out = '{}.csv'.format(args.table)
        print('writing output to {}'.format(args.out))

    return args


def db_connect(db_filename):
    return sqlite3.connect(db_filename)


def dump_table(db_filename, table, csv_filename)
    # setup step // TOASK connection is not defined
    c = db_conn.cursor()

    csvfile = open(csv_filename, 'w') # w means write, in windows it maz need wb which means write in bianary
    csvwriter = csv.writer(csvfile)

    # the data step

    for row in c.execute('SELECT * FROM {}'.format(table))#instead table, track, album artist etc.
        csvwriter.writerow(row)

    csvfile.close()

def validate_arguments(args, db_conn):
    #this function checks if the CSV already exists or not and exits
    if os.path.exits(args.out) and not args.force:
        print('error: {} already exists.'.format(args.out))
        print('delete the file (or use '--force' to overwrite) and rerun to produce dump.')
        exit(1)

    # checks if the db table already not exists, or exits
    if not exists_table(db_conn, args.table):
        print('error: {} table does not exist in {}'.format(args.table, args_db))
        exit(1)


def exists_table(db, name):
    """
    check to see if table exists in db.
    :param db: database connection for the database check
    :param name: name of the table to look for
    :return: True if the table exists
    """
    query = "SELECT 1 FROM sqlite_master WHERE type='table' and name LIKE ?"
    cursor = db.cursor()
    return cursor.execute(query, (name,)).fetchone() is not None


args = parse_arguments()
db_conn = db_connect(args.db)
validate_arguments(args, db_conn)
dumb_table(db_conn, args.table, args.out)
db_conn.close()

