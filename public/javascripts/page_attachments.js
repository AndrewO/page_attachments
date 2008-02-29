function add_attachment() {
  var attachments_box = $('attachments');
  var template = new Template('<p class="attachment" id="file_#{id}"><label>Upload file: </label><input type="file" name="page[add_attachments][]" /> <a href="#" onclick="Element.remove(\'file_#{id}\')">Cancel</a></p>');
  new Insertion.Bottom(attachments_box, template.evaluate({id: Math.round(Math.random() * 100000)}));
}
function remove_attachment(id){
  if(confirm("Really delete this attachment?")){
      var attachments_box = $('attachments');
      Element.remove("attachment_"+id);
      var template = new Template('<input type="hidden" name="page[delete_attachments][]" value="#{id}" />');
      new Insertion.Bottom(attachments_box, template.evaluate({id: id}));
      if(typeof $('attachments').down("#attachments-deleted") == 'undefined')
      {
        new Insertion.After('attachments-title', '<p class="attachment" id="attachments-deleted">Removed attachments will be deleted when you Save this page.</p>');
      }
      new Effect.Highlight('attachments-deleted');
  }
}