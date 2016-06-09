function begin() {
  addDownloadButton();
}

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

/** Adds download button to the web page */
function addDownloadButton() {
  //Retrieves the link
  var $getLink = document.querySelector('#sm_dl_wait');  
  //console.log($getLink);

  //actual link is under data-id tag
  var link = $getLink.dataset.id;

  //var $getAttachDiv = document.querySelectorAll('div[style="font-size:2em;font-family:Georgia,serif"]');
  var $getAttachDiv = document.querySelectorAll('center');
  $getFirst = $getAttachDiv[0];

  //Creates a button to download pdf
  var $button = document.createElement('button');
  $button.innerText = 'Open PDF';

  $getFirst.parentNode.insertBefore($button, $getFirst);
  $getFirst.parentNode.removeChild($getFirst)

  $button.addEventListener('click', function() {window.open(link, '_blank')});
}

/** Directly goes to the PDF link */
function directDownload() {
    var $getLink = document.querySelector('#sm_dl_wait'); 
    var link = $getLink.dataset.id;
    window.open(link, '_blank');
}

begin();