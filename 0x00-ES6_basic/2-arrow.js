export default function getNeighborhoodsList() {
	this.sanFranciscoNeighbourhoods = [ 'SOMA', 'Union Square'];

	const self = this;
	this.add.Neighborhoods = (newNeighborhood) => {
		self.sanFranciscoNeighborhoods.push(newNeighborhood);
		return self.sanfranciscoNeighborhoods;
	};
}
