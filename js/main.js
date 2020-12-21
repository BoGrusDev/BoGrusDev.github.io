/*
window.onload  = () => {
    console.log('window-load');
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
        .register('./serviceWorker.js');
    }
};
*/

function forceSWupdate () {
        alert('Force update');
        location.reload();
        /*
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(function (registrations) {
            for (let registration of registrations) {
                registration.update();
                alert('Registration done');
            }
            console.log('Reload');
            // location.reload();
            location.href = location.href;
            console.log('not Reload');
        })  
    };
    */
};


window.onload  = () => {

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./serviceWorker.js')
        .then(function(registration) {
        // registration worked
        console.log('Registration succeeded.');
        
        
         registration.pushManager.getSubscription()
         .then(function (subscription) {
           //If already access granted, enable push button status
           console.log('Enable');
           console.log(subscription);
           /*
            if (subscription) {
                changePushStatus(true);
            }
            else {
                changePushStatus(false);
            }
           */
         })
         .catch(function (error) {
           console.error('Error occurred while enabling push ', error);
         });


            //registration.update()
            /*
            Notification.requestPermission(function(result) {
                if (result === 'granted') {
                    navigator.serviceWorker.ready.then(function(registration) {
                        // alert('notification');

                        var options = {
                            body: "Test av notification",
                  
                            requireInteraction: true
                            //data : payload
                        };

                    registration.showNotification('Notification with ServiceWorker', options);
                    });
                }
            });
            */

       });
    };
};


