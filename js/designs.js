$(function(){
    // 
        let submit = $('#submit').on('click', function(e){ //trigger the makeGrid function and prevent the page from refreshing
            makeGrid();
             e.preventDefault();
            });

        function makeGrid() {
            let height = $('#input_height').val();      //get grid height input from user
            let width = $('#input_width').val();        //get grid width input from user
            let pixel_canvas = $('#pixel_canvas');      // get the table element

       // add  a click event listener to the submit button
            $('#submit').on('click', function(){
                pixel_canvas.html('');                       //set the table innerHTML to empty
                for (let i = 0; i < height; i++){
                    let tr = $('<tr></tr>');
                for( let j = 0; j < width; j++ ){
                        tr.append('<td></td>');
                    }
                    pixel_canvas.append(tr);                ///dynamically generate grid
                }     
            });

        }

        function colorCanvas(){
            $('#pixel_canvas').delegate( "td", "click", function() {  // the function gets user color input and aplies it to the currently  
                let userColor = $('#colorPicker').val();              // selcted td element
                $(this).css('background-color', userColor);
            });     
            }
            colorCanvas();

            function clear(){
            $('#pixel_canvas').delegate( "td", "dblclick", function() {  // the function restores the canvas to its original color state
                $(this).css('background-color', 'white');
            });
            }
            clear();

});
    

    
    