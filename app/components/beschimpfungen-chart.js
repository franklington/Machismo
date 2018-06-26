import Component from '@ember/component';

export default Component.extend({

  content: function() {
    let model = this.get('model');

    var entry;

    var pfiff = 0,
    hupen = 0,
    schmatz = 0,
    spuck= 0,
    schimpf= 0,
    starr= 0,
    lach= 0,
    beruht= 0;



    model.forEach((post) => {
      entry = 'pfiff';
      if(post.get(entry)){
        pfiff++;
      }
      entry = 'hupen';
      if(post.get(entry)){
        hupen++;
      }
      entry = 'schmatz';
      if(post.get(entry)){
        schmatz++;
      }
      entry = 'spuck';
      if(post.get(entry)){
        spuck++;
      }
      entry = 'starr';
      if(post.get(entry)){
        starr++;
      }
      entry = 'lach';
      if(post.get(entry)){
        lach++;
      }
      entry = 'beruht';
      if(post.get(entry)){
        beruht++;
      }
      entry = 'schimpf';
      if(post.get(entry)){
        schimpf++;
      }
    });



    return   [
        	{
        		"label": "Hinterhergepfiffen",
        		"value": pfiff
        	},
        	{
        		"label": "Angehupt",
        		"value": hupen
        	},
        	{
        		"label": "Schmatzgeräusche",
        		"value": schmatz
        	},
        	{
        		"label": "Gespuckt",
        		"value": spuck
        	},
        	{
        		"label": "Beschimpft",
        		"value": schimpf
        	},
        	{
        		"label": "Angestarrt",
        		"value": starr
        	},
        	{
        		"label": "Ausgelacht",
        		"value": lach
        	},
        	{
        		"label": "Berührt",
        		"value": beruht
        	}
          ];

  }.property('model.@each')
});
