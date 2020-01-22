function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // Loop through the FileList and render image files as thumbnails.
  data = [];
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
          name: cols[1]
        };
        data.push(obj);
      });
      console.log(data);
      $.post("/registration/", { info: data, count : count}, function(d) {
        console.log(d);
      });
    };

    reader.readAsText(f);
  }
}
evt = null;
obj = {};

document.getElementById("files").addEventListener(
  "change",
  e => {
    evt = e;
  },
  false
);

var count = 1;

$("#submit").click(function() {
  count = document.getElementById("count").valueAsNumber;
  handleFileSelect(evt);
});
