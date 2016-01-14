/**
 * Module Dependencies
 */

import $ from 'jquery'

var $tvShowsContainer = $('#app-body').find('.tv-shows')

$tvShowsContainer.on('click', 'button.like', function (ev) {
  var $this = $(this);
  var $article = $this.closest('.tv-show');
  var id = $article.data('id');

  $.post('/api/vote/' + id, function() {
    $article.toggleClass('liked')
    var val = Number($this.closest('article').find('.count').html()) + 1
    $this.closest('article').find('.count').html(val);
  })
})

export default $tvShowsContainer