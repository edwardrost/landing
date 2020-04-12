function modal(){

    function showModal(){
        document.querySelector('.overlay').style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(){
        document.querySelector('.overlay').style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = '';
    }

    let more = document.querySelector('.more'),
        close = document.querySelector('.popup-close'),
        descriptionBtn = document.querySelectorAll('.description-btn');

    more.addEventListener('click', showModal);

    close.addEventListener('click', closeModal);

    descriptionBtn.forEach(function(item){
        item.addEventListener('click', showModal);
    });
}

module.exports = modal;