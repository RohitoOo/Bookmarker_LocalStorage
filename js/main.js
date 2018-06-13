// listen for form submit
document.getElementById('myForm').addEventListener('submit' , saveBookmark) ;

//save bookmark
function saveBookmark(e){

var siteName = document.getElementById('siteName').value;
var siteUrl = document.getElementById('siteUrl').value;

var bookmark = {
  name: siteName ,
  url: siteUrl
};

// local storage test
// localStorage.setItem( 'test', 'Hello World!');
// console.log(localStorage.getItem('test'));
// localStorage.removeItem('test');


if (localStorage.getItem('bookmarks') === null ){

var bookmarks = [] ;

bookmarks.push(bookmark) ;

localStorage.setItem('bookmarks' , JSON.stringify(bookmarks))}

else {

var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))

bookmarks.push(bookmark);

localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
};



// Prevents form from submitting
e.preventDefault();

};
