function(doc) {
  if (doc.type.indexOf("/type/document") >= 0) {
    emit(doc.creator.split('/')[2]+'/'+doc.name, doc);
  }
}