
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Operation Bundle Up', page: 'home' });
};

exports.media = function(req, res){
  res.render('media', { title: 'Media - Operation Bundle Up', page: 'media' });
};