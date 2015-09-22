import Ember from 'ember';

var articles = [{
  id: 1,
  title: "Bat Child Found in Cave!",
  image: "http://orig03.deviantart.net/d913/f/2012/194/2/6/this_is_the_image_by_flavinbagel-d5728xd.png"
}, {
  id: 2,
  title: "Pope drops new single: 'Holy Water'",
  image: "http://i.kinja-img.com/gawker-media/image/upload/s--Ls8G5zKF--/c_scale,fl_progressive,q_80,w_800/t24dmieyemjpv8lqfanb.jpg"
}, {
  id: 3,
  title: "Health & Beauty: Clumpy Mascrara is SOOOO IN!",
  image: "https://s-media-cache-ak0.pinimg.com/736x/a1/cf/dd/a1cfddd644579095a822f27d73193922.jpg"
}, {
  id: 4,
  title: "Wu-Tang/Full House Conspiracy? Some say Illuminati involved...",
  image: "https://s-media-cache-ak0.pinimg.com/736x/23/e6/5c/23e65c34ef62f6109fddab9e20647691.jpg"
}];


export default Ember.Route.extend({
  model() {
    return articles;
  }
});
