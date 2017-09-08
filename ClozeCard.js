var ClozeCard = function(cloze, full) {
  this.cloze = cloze;
  this.full = full;

  this.partial = function() {
  	return this.full.replace(this.cloze, "...");
  };
};
 
module.exports = ClozeCard;
