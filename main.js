let removeText = document.querySelectorAll('.removeText');
let hamburger =  document.querySelector('.hamburger');
let navList = document.querySelector('.nav-list');
let filterItem = document.querySelector('.filter-items');
let filterImage = document.querySelectorAll('.image');

//removing text
removeText.forEach(function(text){
  text.innerHTML= "";
})

// hamburger
hamburger.addEventListener('click', function(){
  navList.classList.toggle('responsive-nav');
  hamburger.classList.toggle('close');
})

//filter gallery
function filterFunction(){
  filterItem.addEventListener('click', function(e){
    if (e.target.classList.contains('item')){
      filterItem.querySelector('.active').classList.remove('active');
      e.target.classList.add('active');

      let filterName = e.target.getAttribute('data-name');
      filterImage.forEach(function(img){
        let filterImg= img.getAttribute('data-name');
        if ( filterName == filterImg || filterName == 'all'){
          img.classList.add('show-img');
        }
        else{
          img.classList.add('hide-img');
          img.classList.remove('show-img');
        }
      });
    }
  })
}

filterFunction();