function form(){

    var message = {
        loading: 'Загрузка',
        success: 'Спасибо! скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    
    statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        function getFormData() {
            return new Promise(function(resolve, reject){
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    
                let formData = new FormData(form);
    
                let obj = {};
                formData.forEach(function(value, key){
                     obj[key] = value;   
                });
                let json = JSON.stringify(obj);
    
                request.send(json);

                request.onload = function(){
                    if (request.readyState === 4) {
                        if (request.status == 200) {
                            statusMessage.innerHTML = message.success;
                            resolve(this.response);    
                        } else {
                            statusMessage.innerHTML = message.failure;
                            reject();
                        }

                    }
                };
            });
        }

        getFormData()
        .then ( () => {
            for (let i = 0; i<input.length; i++) {
                input[i].value = '';
            }
        })
        .catch( () => console.log(message.failure));
    });

// Contact Form on Promise

    let contactForm = document.getElementById('form'),
        contactInput = contactForm.getElementsByTagName('input'),
        contactStatusMessage = document.createElement('div');

    contactStatusMessage.classList.add('status');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        contactForm.appendChild(contactStatusMessage);

        function getContact() {
            return new Promise(function(resolve, reject){
                let contactRequest = new XMLHttpRequest();
                contactRequest.open('POST', 'server.php');
                contactRequest.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                let contactData = new FormData(contactForm);
        
                let ob = {};
                contactData.forEach(function(value, key){
                    ob[key] = value;   
                });
                let json = JSON.stringify(ob);
    
                contactRequest.send(json);

                contactRequest.onload = function(){
                    if (contactRequest.readyState === 4) {
                        if (contactRequest.status == 200) {
                            contactStatusMessage.innerHTML = message.success;
                            resolve(this.response);
                        } else {
                            contactStatusMessage.innerHTML = message.failure;
                            reject();
                        }
                    }
                };
            });
        }
        
        getContact()
        .then( () => {
            for (let i = 0; i<contactInput.length; i++) {
                        contactInput[i].value = '';
                    }
        })
        .catch( () => console.log(message.failure) );
    });
}

module.exports = form;
