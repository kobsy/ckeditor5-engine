/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import RootEditableElement from '../../../src/view/rooteditableelement';

/**
 * Creates view root element and sets it to {@link module:engine/view/document~Document#roots roots collection}.
 *
 * @param {module:engine/view/document~Document} doc View document.
 * @param {String} name Root element name.
 * @param {String} rootName Root name.
 * @returns {module:engine/view/rooteditableelement~RootEditableElement} Root element.
 */
export default function createRoot( doc, name = 'div', rootName = 'main' ) {
	const root = new RootEditableElement( name );

	root._document = doc;
	root.rootName = rootName;
	doc.roots.add( root );

	return root;
}
