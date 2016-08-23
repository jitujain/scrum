(function($) {
  Drupal.behaviors.scrum = {
    attach: function(context, settings) {

      $('select[name="field_ct_scrum[und]"]').change(function() {
        console.log($(this).val());
        var tid = $(this).val();
        $('#block-views-views-scrum-last-scrum select').val(tid);
        $('#block-views-views-scrum-last-scrum .form-submit').click();
      });
    }
  };
})(jQuery);
