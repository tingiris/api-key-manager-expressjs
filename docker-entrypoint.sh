#!/bin/bash
set -e

[[ $DEBUG == true ]] && set -x

DB_NAME=${DB_NAME:-"mysql-db"}
DB_USER=${DB_USER:-"dev"}
DB_PASS=${DB_PASS:-"dev"}

DB_REMOTE_ROOT_NAME=${DB_REMOTE_ROOT_NAME:-"root"}
DB_REMOTE_ROOT_PASS=${DB_REMOTE_ROOT_PASS:-"root"}
DB_REMOTE_ROOT_HOST=${DB_REMOTE_ROOT_HOST:-"127.0.0.1"}

MYSQL_CHARSET=${MYSQL_CHARSET:-"utf8"}
MYSQL_COLLATION=${MYSQL_COLLATION:-"utf8_unicode_ci"}

create_data_dir() {
  mkdir -p ${MYSQL_DATA_DIR}
  chmod -R 0700 ${MYSQL_DATA_DIR}
  chown -R ${MYSQL_USER}:${MYSQL_USER} ${MYSQL_DATA_DIR}
}

create_run_dir() {
  mkdir -p ${MYSQL_RUN_DIR}
  chmod -R 0755 ${MYSQL_RUN_DIR}
  chown -R ${MYSQL_USER}:root ${MYSQL_RUN_DIR}

  # hack: remove any existing lock files
  rm -rf ${MYSQL_RUN_DIR}/mysqld.sock.lock
}

create_log_dir() {
  mkdir -p ${MYSQL_LOG_DIR}
  chmod -R 0755 ${MYSQL_LOG_DIR}
  chown -R ${MYSQL_USER}:${MYSQL_USER} ${MYSQL_LOG_DIR}
}

listen() {
  sed -e "s/^bind-address\(.*\)=.*/bind-address = $1/" -i /etc/mysql/mysql.conf.d/mysqld.cnf
}