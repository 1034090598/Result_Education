import $ from 'jquery';
var images = require('../images/1.jpg');

const App = {
    Init: function(){
        $("#Body").html("Good<img src='"+ images +"'>");
    }
};

export default App;
