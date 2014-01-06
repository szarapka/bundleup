/**
 * Routes
 * Routes on Routes on Routes on Routes.
 *
 * @package     bundleup
 * @copyright   Copyright (C) 2013 Scott Szarapka
 * @author      Scott Szarapka [scott@szarapka.com] (www.szarapka.com)
 * @license     GPL v2 (http://www.gnu.org/licenses/gpl-2.0.txt)
 * @url         www.operationbundleup.com
 */

exports.index = function(req, res){
  res.render('index', { title: 'Operation Bundle Up', page: 'home' });
};

exports.media = function(req, res){
  res.render('media', { title: 'Media - Operation Bundle Up', page: 'media' });
};

exports.cities = function(req, res){
  res.render('cities', { title: 'Cities - Operation Bundle Up', page: 'cities' });
};

exports.team = function(req, res){
  res.render('team', { title: 'Team - Operation Bundle Up', page: 'team' });
};

exports.volunteer = function(req, res){
  res.render('volunteer', { title: 'Volunteer - Operation Bundle Up', page: 'volunteer' });
};