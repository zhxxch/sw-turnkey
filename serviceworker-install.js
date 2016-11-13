if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("serviceworker.js")
    .then(function(registration) {
   // Worker is registered
  }).catch(function(error) {
   // There was an error registering the SW
  });
}
