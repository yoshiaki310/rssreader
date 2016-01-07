angular.module('rssreader.RssCtrl', [])

  .controller('RssCtrl', ['$scope', '$resource', function ($scope, $resource) {
    var Rss = $resource('http://rss2json.com/api.json?rss_url=:rssurl', {rssurl: '@rssurl'})
    var rss = Rss.get({rssurl: 'http://ceblog.mediba.jp/rss'}, function () {
      console.dir(rss)
      if (rss.items[0]) {
        $scope.rss = rss.items
      } else {
        console.error('no results')
      }
    }, function (err) {
      console.dir(err)
      console.error('error')
    })
  }])

  .filter('removeHtmlTag', function () {
    return function (input) {
      return input.replace(/<(.+?)>/g, '')
    }
  })
