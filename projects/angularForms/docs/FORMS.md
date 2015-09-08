## FORMS Documentation

### Database requirements

Currently the app connects to a local MySQL database. To generate unique __Wired Request__ ID's, a table was created in this database, with only one auto-incremented column, to use the last inserted row ID, as the Wired Request ID.

The structure of this table is in the script __CREATE_INSERT_TABLE_wired_request.sql__, within this directory.  The script also insert one record, to start from 1001, and to keep the next auto-increment index in the table. More info about this is provided in the script itself.

To getting more data for the form, now the app has also a connection to a remote SQL Server. 

### Perl 

The app uses the package DBI, for making both connections, to MySQL and MSSQL. For running perl, i use [StrawberryPerl](http://strawberryperl.com/), a perl environment for MS Windows, and install the latest version of [Mojolicious](http://mojolicio.us).

### Directories

##### App directory

The source files of the app are located in the __repo/src/app/__ directory. This files are pretty formatted for use in development.

##### Distribution directory

The files are located in the __repo/src/dist/__ directory. This files are concatenated and minified for use in production.

### Local Development requirements

#### Gulp

__NOTE: Gulp is not required in the production server, is ONLY required for development IF you want to execute the Gulp tasks__

NodeJS and npm are required only in development to execute the ___gulp___ tasks, and produce the concatenated and minified distributionversion of the source files. Otherwise, update the references in the UI to use the original files.

There are 6 Gulp tasks:

- gulp html: Minify the Html files
- gulp styles: Minify and concatenate the Css files
- gulp jshint: Run jshint validations on the javascript files
- gulp scripts: Minify and concatenate the javascript files
- gulp server: Start a webserver
- gulp (Default): Run the others tasks and watch for changes

#### Usage

__Default task__

```
$ npm install
$ gulp
```

Or

```
$ npm install
$ npm start
```

__Individual tasks__

```
$ gulp html
$ gulp styles
$ gulp jshint
$ gulp scripts
$ gulp server
```
