import Component from '@ember/component';

export default Component.extend({
  content: function() {
    let model = this.get('model');

    var entry;

    var strasse = 0,
    verkehr = 0,
    hause = 0,
    arbeit= 0,
    bar= 0;






    model.forEach((post) => {

      var ort = post.get('wo');
      switch (ort) {
        case "Strasse":
          strasse++;
          break;

        case "öffentl. Verkehr":
          verkehr++;
          break;

        case "Zuhause":
          hause++;
          break;

        case "Arbeit":
          arbeit++;
          break;

        case "Bar/Club":
          bar++;
          break;

      }

    });



    return   [
        	{
        		"label": "Strasse",
        		"value": strasse
        	},
        	{
        		"label": "öffentl. Verkehr",
        		"value": verkehr
        	},
        	{
        		"label": "Zuhause",
        		"value": hause
        	},
        	{
        		"label": "Arbeit",
        		"value": arbeit
        	},
        	{
        		"label": "Bar/Club",
        		"value": bar
        	}
          ];

  }.property('model.@each')
});
