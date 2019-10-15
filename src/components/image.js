import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
	componentDidMount() {
		var image = document.querySelectorAll("img");

		for (var i = 0; i < image.length; i++) {
			if (this.props.filter == "blur") {
				image[i].style.filter = "blur(" + this.props.filterDimension + ")";
			}
			else if (this.props.filter == "brightness") {
				image[i].style.filter = "brightness(" + this.props.filterDimension + ")";
			}
			else if (this.props.filter == "contrast") {
				image[i].style.filter = "contrast(" + this.props.filterDimension + ")";
			}
			else if (this.props.filter == "drop-shadow") {
				image[i].style.filter = "drop-shadow(" + this.props.filterDimension + ")";
			}
			else if (this.props.filter == "grayscale") {
				image[i].style.filter = "grayscale(" + this.props.filterDimension + ")";
			}
			else if (this.props.filter == "hue-rotate") {
				image[i].style.filter = "hue-rotate(" + this.props.filterDimension + ")";
			}
			else if (this.props.filter == "invert") {
				image[i].style.filter = "invert(" + this.props.filterDimension + ")";
			}
			else if (this.props.filter == "opacity") {
				image[i].style.filter = "opacity(" + this.props.filterDimension + ")";
			}
			else if (this.props.filter == "saturate") {
				image[i].style.filter = "saturate(" + this.props.filterDimension + ")";
			}
			else if (this.props.filter == "sepia") {
				image[i].style.filter = "sepia(" + this.props.filterDimension + ")";
			}
			else {
				image[i].style.filter = "none";
			}
		}
	}
	render() {
		return (
			<div className={this.props.containerClass}>
				{this.props.images.map((field) => {
					return <img id={field.id} className={field.class} src={field.imageSource} alt={field.defaultText} width={field.width} height={field.height} />
				})}
			</div>
		);
	}
}

Image.propTypes = {
	containerClass: PropTypes.string,
	filter: PropTypes.oneOf(["grayscale", "blur", "brightness", "contrast", "drop-shadow", "hue-rotate", "invert", "opacity", "saturate", "sepia", "none"]),
	filterDimension: PropTypes.string,
	images: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			class: PropTypes.string,
			imageSource: PropTypes.string.isRequired,
			defaultText: PropTypes.string.isRequired,
			width: PropTypes.string,
			height: PropTypes.string
		}).isRequired
	).isRequired
}
