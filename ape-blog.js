var ApeBlog = angular.module('ApeBlog', ['Ape']);



ApeBlog.factory('ApeBlog', function($http,Ape){


  var account;
  var start = function(){};
  var end = function(){};

  var warp = function(verb,endpoint,data,callback){
     var _Ape = {start: start, end: end, base:"https://orkiv.com/sapphire/blog_json.php", headers:{'account' : account} };
      Ape.Init(_Ape);
      Ape.Request(verb, endpoint, data,callback);
  }
  return {
    Init : function(_account ){
      account = _account;
    },
    SetStart : function(_start){
      start = _start;
    } ,
    CreateQuery  : function(){
      return {};
    }
    ,
    SetEnd : function(_end){
      end = _end;
    } , Groups : function(callback){
         warp("GET", "/groups/", {} , function(data){
               if(data)
                callback(data.result);
                else callback(false);
              });
    },  Blogs : function(query, callback){
         warp("GET", "/blogs/", query , function(data){
                callback(data);
              });
    } , OpenBlog : function(id,callback){
          warp("GET", "/blog/" + id, {} , function(data){
                if(data)
                callback(data.result);
                else callback(false);
            });
    } , MediaUrl : function(id){
      return "https://orkiv.com/sapphire/blog_json.php/media/ " + id + "?account=" + account;
    }

  }
});