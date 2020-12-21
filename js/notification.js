
function checkNotification() {
  alert('check permision');
  Notification.requestPermission(function(status) {
    alert('Notification permission status: ' + status);
  });
}

/*
  Fungerar
*/
async function showNotification() {
  alert('send notio');
	const result = await Notification.requestPermission();
	if (result === 'granted') {
		const noti = new Notification('Hello!', {
			body: 'It’s me.',
			icon: 'images/favicon.png'
		});
		noti.onclick = () => alert('clicked');
	}
}
// showNotification();
