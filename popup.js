function begin() {
  addDownloadButton();
}
/**Retrieve url of tab. */
function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    //Can assume that "tabs" is nonempty. 
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}

function addDownloadButtonOld() {
  // Iterate through all of the versions on the page, adding buttons to
  // download the version.
  var $versions = document.querySelectorAll('#sm_dl_wait');  
  console.log($versions);
  for (var i = 0; i < $versions.length; i++) {
    var $ver = $versions[i];
    var link = $ver.dataset.id;
    var $button = document.createElement('button');
    $button.innerText = 'Download PDF';
    $ver.appendChild($button);
    $button.addEventListener('click', function() {window.open(link, '_blank')});
  }
}

function addDownloadButton() {
  // Iterate through all of the versions on the page, adding buttons to
  // download the version.
  var $getLink = document.querySelector('#sm_dl_wait');  
  console.log($getLink);
  var link = $getLink.dataset.id;

  var $getAttachDiv = document.querySelectorAll('div[style="font-size:2em;font-family:Georgia,serif"]');
  $getFirst = $getAttachDiv[0];
  $getFirst.style.marginLeft= "auto";
  $getFirst.style.marginRight="auto";
  $getFirst.align= "center";  
  console.log($getFirst); 

  var $button = document.createElement('button');
  $button.innerText = 'Download PDF';
  $button.margin = "0 auto";
  console.log($button);

  $getFirst.appendChild($button);
  console.log($getFirst);
  //$getLink.appendChild($button);
  $button.addEventListener('click', function() {window.open(link, '_blank')});
  
}

begin();