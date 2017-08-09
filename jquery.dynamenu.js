(function( $ ){
  var methods = {
    init : function( options ) { 
        
    },
    sliding: function( ) {

        return this.each(function() {
            
            $(this).css({"opacity":"0.4"});
            
            $(this).hover(function() {
                $("a.mlink", this).css({"font-weight":"bold"});                
                
                $(this).animate({
                    opacity:1,
                    "margin-left":"+=5"
                }, 100, "linear", function() {
                 
                }
                );
            },
            function() {
                    $("a.mlink", this).css({"font-weight":"normal"});                

                    $(this).animate({
                    opacity:0.4,
                    "margin-left":"-=5"                        
                }, 100, "linear", function() {
                  
                });
            });
                          
        });
    }
  };

  $.fn.dynamenu = function( method ) {
    
    if ( methods[method] ) {
      methods.init.apply( this, arguments );
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else {
      $.error( 'Метод' +  method + ' не существует!' );
    }      
  };

})( jQuery );

