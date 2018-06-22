import Component from '@ember/component';

export default Component.extend({
  content: function() {
        let model = this.get('model');

        var entry;

        var fruh = 0,
        vormittag = 0,
        mittag = 0,
        nachmittag= 0,
        abend= 0,
        nacht= 0;

        model.forEach((post) => {

          var zeit = post.get('zeit');
          switch (zeit) {
            case "Morgen":
              fruh++;
              break;

            case "Vormittag":
              vormittag++;
              break;

            case "Mittag":
              mittag++;
              break;

            case "Nachmittag":
              nachmittag++;
              break;

            case "Abend":
              abend++;
              break;
            case "Nacht":
              nacht++;
              break;

          }

        });


        return   [
            	{
            		"label": "Morgen",
            		"value": fruh
            	},
            	{
            		"label": "Vormittag",
            		"value": vormittag
            	},
            	{
            		"label": "Mittag",
            		"value": mittag
            	},
            	{
            		"label": "Nachmittag",
            		"value": nachmittag
            	},
            	{
            		"label": "Abend",
            		"value": abend
            	},
              {
                "label": "Nacht",
                "value": nacht
              }
              ];

      }.property('model.@each')
});
