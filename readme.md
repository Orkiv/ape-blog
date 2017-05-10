![Sapphire Blog](https://github.com/Orkiv/serverless-blog/raw/master/Screen%20Shot%202017-03-15%20at%2010.13.06%20AM.png)

# Ape-Blog

Ape-blog is an AngularJS blogging module. 

# Index

1. [Install](#install)
2. [Requirements](#requirements)
2. [Getting started](#getting-started)
3. [Documentation](#documentation)
4. [Models](#models)

# Requirements

1. Orkiv Sapphire account.[Login](https://www.orkiv.com/sapphire)


# Install 

#### Via bower

	bower install ape-js

#### Via npm 

	npm install ape-js

Or download the package directly [here](https://github.com/Orkiv/ape-js/archive/master.zip) 

# Getting Started

Insert these tags  after your angularjs tag :

	<script type="text/javascript" src="bower_components/ape-js/ape.js"></script>
	<script type="text/javascript" src="bower_components/ape-blog/ape-blog.js"></script>
	/*
	OR
	*/
	<script type="text/javascript" src="/ape-js/ape.js"></script>
	<script type="text/javascript" src="/ape-blog/ape-blog.js"></script>
	/*
	OR
	*/
	<script type="text/javascript" src="node_modules/ape-js/ape.js"></script>
	<script type="text/javascript" src="node_modules/ape-blog/ape-blog.js"></script>

** This module requires a sapphire account.
Learn more about sapphire [here](https://www.orkiv.com/sapphire-web).



# Getting Started

Below is an example on initializing Ape-Blog
	
	     var myApp = angular.module('myApp', ['ApeBlog',"ngSanitize"]);
      myApp.controller('Cntrl', function ($scope, ApeBlog) {

    ApeBlog.Init(SAPPHIRE_ACCOUNT_ID);
    //Fetch groups
    ApeBlog.Groups( function(Data){
      console.log(Data);
    });
    ... 
    });

# Documentation

### Factory functions

### Init - function (account String)

Initialize service. This function must be executed prior to any request.

account - [Sapphire](https://www.orkiv.com/sapphire-web) account ID.

### SetStart - function (start function() )

Set function to be executed prior to each request.

start - function to be executed prior to each request.

### SetEnd - function (end function(response [response](#response) , http_response [angular-http-response](https://docs.angularjs.org/api/ng/service/$http) ) )

Set function to be executed after each request.

end - function to be ran after each request. 

### Groups - function (callback function(groups array[[Group](https://github.com/Orkiv/serverless-blog/blob/master/README.md#group)] ) )

List blog groups from Sapphire account.

callback - function ran once data is retrieved from Sapphire. On error the value passed, `group`, is set to false.

### Blogs - function(query [Query](#query), callback function(blogs array[[Query response](#query-response)] )  )

List blogs from Sapphire.

query - Object used to filter data retrieved from Sapphire.
callback - function ran once data is retrieved form Sapphire. On error the value passed, `blogs`, is set to false.

### OpenBlog - function(id String,  callback function(blog [Blog](https://github.com/Orkiv/serverless-blog/blob/master/README.md#blog)) )

Open a blog via id.

id - ID of the [Blog](https://github.com/Orkiv/serverless-blog/blob/master/README.md#blog) to open.

callback - function ran once data is retrieved form Sapphire. On error the value passed, `blog`, is set to false.

### CreateQuery - function() 

Create an empty [Query](#query) object.

#### Return : [Query](#query)
Empty query object.

### MediaUrl - function(id String)

Create a URL to a media resource within your sapphire account.

id - ID of the desired file to load.

#### Return : string
URL to media resource.

# Models

## Query response

The object returned upon execution of function [blogs()](#blogs)

### Properties

#### pages - int

Length of blog pages. 
** Starting with `1`.

#### result - array[ [blog](https://github.com/Orkiv/serverless-blog/blob/master/README.md#blog) ]

Results of query.

## Query

The object used to search and paginate through blogs.

### Properties

#### search - string 

Title of blog to search for.

#### group - string

Blog group ID of cursor, use trending to get trending topics. Separate multiple group id by commma

#### page - int

Blog page index.

## Response
Raw response of API request. This varies with the data your endpoint is sending.
** On API error the value of this model will always be `false` .