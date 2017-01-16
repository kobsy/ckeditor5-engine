/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module engine/view/rooteditableelement
 */

import EditableElement from './editableelement';

const rootNameSymbol = Symbol( 'rootName' );

/**
 * Class representing a single root in the data view. A root can be either {@link #isReadOnly editable or read-only}, but
 * in both cases it is called "an editable". Roots can contain other {@link module:engine/view/editableelement~EditableElement editable
 * elements}
 * making them "nested editables".
 *
 * @extends module:engine/view/editableelement~EditableElement
 */
export default class RootEditableElement extends EditableElement {
	/**
	 * Creates root editable element.
	 *
	 * @param {module:engine/view/document~Document} document {@link module:engine/view/document~Document} that is an owner of the root.
	 * @param {String} name Node name.
	 */
	constructor( name ) {
		super( name );

		/**
		 * Name of this root inside {@link module:engine/view/document~Document} that is an owner of this root.
		 *
		 * @readonly
		 * @member {String}
		 */
		this.rootName = 'main';
	}

	/**
	 * Gets root name inside parent {@link module:engine/view/document~Document}.
	 *
	 * @type {String}
	 */
	get rootName() {
		return this.getCustomProperty( rootNameSymbol );
	}

	/**
	 * Sets root name inside parent {@link module:engine/view/document~Document}.
	 *
	 * @type {String}
	 */
	set rootName( rootName ) {
		this.setCustomProperty( rootNameSymbol, rootName );
	}
}
