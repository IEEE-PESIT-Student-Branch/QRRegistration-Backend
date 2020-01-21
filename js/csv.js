function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object
  var id = 202000000001;

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; (f = files[i]); i++) {
    var reader = new FileReader();
    reader.onload = function(event) {
      // NOTE: event.target point to FileReader
      var contents = event.target.result;
      var lines = contents.split("\n");
      //////
      lines.forEach(line => {
        var cols = line.split(",");
        var obj = {
          id: cols[0],
          name: cols[1],
          class: ""+cols[2].trim()
        };
        data.push(obj);
      });
      console.log(data);
      $.post("/csv", { info: data }, function(d) {
        console.log(d);
      });
    };

    reader.readAsText(f);
  }
}
evt = null;
data = [];
obj = {};

document.getElementById("files").addEventListener(
  "change",
  e => {
    evt = e;
  },
  false
);

$("#submit").click(function() {
  handleFileSelect(evt);
});
