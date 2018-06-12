import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
    datum:attr('string'),
    zeit:attr('string'),
    ort:attr('string'),
    wo:attr('string'),

    pfiff:attr('boolean'),
    hupen:attr('boolean'),
    schmatz:attr('boolean'),
    spuck:attr('boolean'),
    schimpf:attr('boolean'),
    starr:attr('boolean'),
    lach:attr('boolean'),
    beruht:attr('boolean'),

    beschreibung:attr('string'),
    freigabe:attr('boolean'),

});
