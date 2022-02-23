import React, { Component } from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
	<Modal
		isOpen={!!props.selectedOption}
		contentLabel="Selected Option"
		onRequestClose={props.clearSelectedOption}
	>
		<h3>Selected Option</h3>
		{props.selectedOption && <p>{props.selectedOption}</p>}
		<button onClick={props.clearSelectedOption}>Ugh fine, I'll do it.</button>
	</Modal>
);

export default OptionModal;
